/**
 * Pipeline de build para diegomena.rocks (Node.js + EJS + esbuild).
 *
 * 1) Empaqueta y minifica CSS -> css/bundle.min.css y calcula su hash SHA-256 corto.
 * 2) Empaqueta y minifica JS -> js/bundle.min.js y calcula su hash SHA-256 corto.
 * 3) Calcula un buildId determinista a partir de la version, los bundles y el contenido,
 *    y escribe version.json en la raiz para invalidacion automatica de cache HTML.
 * 4) Renderiza cada content/blog/*.json usando views/post.ejs -> blog/<slug>.html
 *    inyectando cssVersion, jsVersion, i18nVersion y buildId.
 * 5) Actualiza la lista de articulos, los parametros ?v=<version>-<hash> y
 *    <meta name="app-version"> dentro de index.html.
 * 6) Sincroniza sitemap.xml.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const ejs = require("ejs");
const esbuild = require("esbuild");

const ROOT = path.resolve(__dirname, "..");
const PKG = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
const VERSION = PKG.version || "2.5.3";
const VIEWS_DIR = path.join(ROOT, "views");
const CONTENT_DIR = path.join(ROOT, "content", "blog");
const BLOG_OUT_DIR = path.join(ROOT, "blog");
const CSS_DIR = path.join(ROOT, "css");
const JS_DIR = path.join(ROOT, "js");

function shortHash(content) {
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 8);
}

function loadPosts() {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".json"));
  const posts = files.map((f) =>
    JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, f), "utf8")),
  );
  posts.sort((a, b) => (a.order || 999) - (b.order || 999));
  return posts;
}

function buildCssBundle() {
  const cssOrder = [
    "bootstrap.min.css",
    "slick.min.css",
    "accessible-slick-theme.min.css",
    "resume.css",
    "darkMode_v2.css",
    "blog.css",
  ];
  const combined = cssOrder
    .map((f) => {
      const p = path.join(CSS_DIR, f);
      return `/* === ${f} === */\n` + fs.readFileSync(p, "utf8");
    })
    .join("\n");

  const result = esbuild.transformSync(combined, {
    loader: "css",
    minify: true,
  });
  const outPath = path.join(CSS_DIR, "bundle.min.css");
  fs.writeFileSync(outPath, result.code, "utf8");

  const cssVersion = `${VERSION}-${shortHash(result.code)}`;
  console.log(
    `[OK] CSS Bundle: css/bundle.min.css (${(result.code.length / 1024).toFixed(1)} KB, v=${cssVersion})`,
  );
  return cssVersion;
}

function buildJsBundle() {
  const jsOrder = [
    "resume.js",
    "openLink.js",
    "slick.min.js",
    "slick-init.js",
    "i18n.js",
    "accessibility.js",
    "navbar-focus.js",
    "pagination.js",
    "ambient.js",
    "cuelume.js",
    "cuelume-init.js",
    "scrolly.js",
    "controls-init.js",
  ];

  // Slick solo inicializa si existe el nodo en la pagina (en blog no hay carrusel)
  const combined = jsOrder
    .map((f) => {
      const p = path.join(JS_DIR, f);
      let src = fs.readFileSync(p, "utf8");
      if (f === "slick-init.js") {
        src = `if (typeof window.jQuery !== "undefined" && window.jQuery.fn && window.jQuery.fn.slick && document.querySelector(".slider-for, .events-carousel")) {\n${src}\n}`;
      }
      return `\n/* === ${f} === */\n` + src + "\n";
    })
    .join("\n");

  const result = esbuild.transformSync(combined, {
    loader: "js",
    minify: true,
    target: "es2018",
  });
  const outPath = path.join(JS_DIR, "bundle.min.js");
  fs.writeFileSync(outPath, result.code, "utf8");

  const jsVersion = `${VERSION}-${shortHash(result.code)}`;
  console.log(
    `[OK] JS Bundle: js/bundle.min.js (${(result.code.length / 1024).toFixed(1)} KB, v=${jsVersion})`,
  );
  return jsVersion;
}

function renderCardHtml(post) {
  return `          <article class="resume-item d-flex flex-column flex-md-row mb-3 align-items-center">
            <div class="resume-content mr-auto">
              <h3 class="mb-0" data-i18n="${post.i18nPrefix}-title">
                ${post.cardTitle}
              </h3>
              <div class="subheading mb-3" data-i18n="${post.i18nPrefix}-date">
                ${post.dateLabel}
              </div>
              <p data-i18n="${post.i18nPrefix}-desc" class="mb-1">
                ${post.excerpt}
              </p>
              <a
                href="./blog/${post.slug}.html"
                style="text-decoration: underline !important; text-underline-offset: 2px;"
                data-i18n="${post.i18nPrefix}-link"
                data-i18n-aria="${post.i18nPrefix}-aria"
                aria-label="${post.cardAria}">
                Leer artículo
              </a>
            </div>
            <div class="resume-image blog-card-image-wrap ml-md-4 mt-3 mt-md-0 flex-shrink-0">
              <a href="./blog/${post.slug}.html" class="diploma-thumbnail-link blog-card-thumb-link m-0 h-100" aria-hidden="true" tabindex="-1">
                <img src="./${post.thumbImage || post.image}" alt="" width="248" height="152" loading="lazy" class="diploma-thumbnail img-fluid h-100 w-100" style="object-fit: cover; border-radius: 10px;" aria-hidden="true" />
              </a>
            </div>
          </article>`;
}

function computeBuildId(posts, cssVersion, jsVersion) {
  const indexRaw = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  const normalizedIndex = indexRaw
    .replace(/<meta\s+name="app-version"\s+content="[^"]*"\s*\/>/g, "")
    .replace(/bundle\.min\.css(?:\?v=[0-9a-zA-Z._-]+)?/g, "bundle.min.css")
    .replace(/bundle\.min\.js(?:\?v=[0-9a-zA-Z._-]+)?/g, "bundle.min.js")
    .replace(
      /<!-- BLOG_CARDS_START -->[\s\S]*?<!-- BLOG_CARDS_END -->/,
      "<!-- BLOG_CARDS -->",
    );

  const postsPayload = JSON.stringify(posts);
  const hash = shortHash(
    `${VERSION}|${cssVersion}|${jsVersion}|${normalizedIndex}|${postsPayload}`,
  );
  return `${VERSION}-${hash}`;
}

function buildBlogPages(posts, { cssVersion, jsVersion, buildId }) {
  const templatePath = path.join(VIEWS_DIR, "post.ejs");
  const template = fs.readFileSync(templatePath, "utf8");
  for (const post of posts) {
    const i18nPath = path.join(BLOG_OUT_DIR, "js", `${post.slug}-i18n.js`);
    const i18nHash = fs.existsSync(i18nPath)
      ? shortHash(fs.readFileSync(i18nPath, "utf8"))
      : shortHash(post.slug);
    const i18nVersion = `${VERSION}-${i18nHash}`;

    const html = ejs.render(
      template,
      {
        post,
        allPosts: posts,
        version: VERSION,
        cssVersion,
        jsVersion,
        i18nVersion,
        buildId,
      },
      { filename: templatePath, views: [VIEWS_DIR] },
    );
    const outPath = path.join(BLOG_OUT_DIR, `${post.slug}.html`);
    fs.writeFileSync(outPath, html, "utf8");
    console.log(`[OK] Blog renderizado: blog/${post.slug}.html (buildId=${buildId})`);
  }
}

function syncIndexBlogCards(posts, { cssVersion, jsVersion, buildId }) {
  const indexPath = path.join(ROOT, "index.html");
  let indexHtml = fs.readFileSync(indexPath, "utf8");
  indexHtml = indexHtml
    .replace(
      /<meta\s+name="app-version"\s+content="[^"]*"\s*\/>/g,
      `<meta name="app-version" content="${buildId}" />`,
    )
    .replace(
      /bundle\.min\.css(?:\?v=[0-9a-zA-Z._-]+)?/g,
      `bundle.min.css?v=${cssVersion}`,
    )
    .replace(
      /bundle\.min\.js(?:\?v=[0-9a-zA-Z._-]+)?/g,
      `bundle.min.js?v=${jsVersion}`,
    );
  const startTag = "<!-- BLOG_CARDS_START -->";
  const endTag = "<!-- BLOG_CARDS_END -->";
  const sIdx = indexHtml.indexOf(startTag);
  const eIdx = indexHtml.indexOf(endTag);
  if (sIdx === -1 || eIdx === -1 || eIdx < sIdx) {
    console.log("[WARN] Marcadores BLOG_CARDS no encontrados en index.html");
    return;
  }
  const cardsBlock =
    startTag + "\n" + posts.map(renderCardHtml).join("\n") + "\n          " + endTag;
  indexHtml =
    indexHtml.slice(0, sIdx) + cardsBlock + indexHtml.slice(eIdx + endTag.length);
  fs.writeFileSync(indexPath, indexHtml, "utf8");
  console.log(
    `[OK] index.html sincronizado (${posts.length} posts, buildId=${buildId})`,
  );
}

function writeVersionManifest({ buildId, cssVersion, jsVersion }) {
  const manifest = {
    version: VERSION,
    buildId,
    css: cssVersion,
    js: jsVersion,
  };
  fs.writeFileSync(
    path.join(ROOT, "version.json"),
    JSON.stringify(manifest, null, 2) + "\n",
    "utf8",
  );
  console.log(`[OK] version.json generado (buildId=${buildId})`);
}

function syncSitemap(posts) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: "https://diegomena.rocks/", lastmod: today, priority: "1.0" },
    ...posts.map((p) => ({
      loc: `https://diegomena.rocks/blog/${p.slug}.html`,
      lastmod: p.dateModified || today,
      priority: "0.8",
    })),
  ];
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, "sitemap.xml"), xml, "utf8");
  console.log(`[OK] sitemap.xml sincronizado (${urls.length} URLs)`);
}

function run() {
  const posts = loadPosts();
  const cssVersion = buildCssBundle();
  const jsVersion = buildJsBundle();
  const buildId = computeBuildId(posts, cssVersion, jsVersion);
  buildBlogPages(posts, { cssVersion, jsVersion, buildId });
  syncIndexBlogCards(posts, { cssVersion, jsVersion, buildId });
  writeVersionManifest({ buildId, cssVersion, jsVersion });
  syncSitemap(posts);
}

run();
