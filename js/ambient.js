/**
 * Fondos ambiente — Constelacion de accesibilidad digital (patron hero-anim.js de A11Y PRO).
 * - En reposo la red respira suavemente (friccion 0.995 + oscilacion orbital de ~3px).
 * - Se activa al acercar el puntero: atraccion suave, hilos nodo->cursor, glow progresivo y ondas al clic.
 * - Alpha de lineas graduado por distancia (1 - d/LINK_D): entran y salen sin parpadeo.
 * - Micro-glifos de accesibilidad (tab, audio, contrast, focus, check) en los margenes laterales.
 * - En modo oscuro mantiene nebulosas difusas de fondo.
 * - Canvas #sideNav: particulas blancas con la misma fisica calmada.
 * - Pausable via #fxToggle (WCAG 2.2.2), desactivado con prefers-reduced-motion (WCAG 2.3.3).
 */
(function () {
  "use strict";

  var canvas = document.getElementById("ambient-canvas");
  var toggle = document.getElementById("fxToggle");
  var nav = document.getElementById("sideNav");
  if (!canvas || !canvas.getContext) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var STORAGE_KEY = "fx_enabled";
  var rafId = null;
  var running = false;
  var fields = [];
  var tick = 0;
  var pointer = { x: -1e4, y: -1e4, active: false };
  var pulses = [];

  var GLYPHS = ["tab", "audio", "contrast", "focus", "check"];

  window.addEventListener(
    "pointermove",
    function (e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    },
    { passive: true },
  );
  window.addEventListener("pointerleave", function () {
    pointer.active = false;
    pointer.x = pointer.y = -1e4;
  });
  window.addEventListener(
    "pointerdown",
    function (e) {
      if (pulses.length < 4) {
        pulses.push({ x: e.clientX, y: e.clientY, r: 10, str: 1 });
      }
    },
    { passive: true },
  );

  function isDark() {
    return document.documentElement.classList.contains("dark");
  }

  /* Nebulosas difusas modo oscuro */
  var nebulae = [];
  function initNebulae(w, h) {
    var maxDim = Math.max(w, h);
    nebulae = [
      {
        color: "14, 165, 233",
        baseX: w * 0.75,
        baseY: h * 0.25,
        orbitX: w * 0.1,
        orbitY: h * 0.08,
        baseR: maxDim * 0.42,
        baseAlpha: 0.06,
        speedX: 0.12,
        speedY: 0.15,
        phaseX: 0.8,
        phaseY: 1.5,
      },
      {
        color: "124, 58, 237",
        baseX: w * 0.22,
        baseY: h * 0.72,
        orbitX: w * 0.12,
        orbitY: h * 0.1,
        baseR: maxDim * 0.38,
        baseAlpha: 0.05,
        speedX: 0.14,
        speedY: 0.11,
        phaseX: 2.1,
        phaseY: 3.2,
      },
    ];
  }

  function drawNebulae(ctx) {
    for (var k = 0; k < nebulae.length; k++) {
      var neb = nebulae[k];
      var nAngX = tick * neb.speedX + neb.phaseX;
      var nAngY = tick * neb.speedY + neb.phaseY;
      var nx = neb.baseX + Math.sin(nAngX) * neb.orbitX;
      var ny = neb.baseY + Math.cos(nAngY) * neb.orbitY;
      var nr = neb.baseR * (0.95 + 0.05 * Math.sin(nAngX * 0.6));
      var na = neb.baseAlpha * (0.88 + 0.12 * Math.sin(nAngY * 0.8));

      var grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, nr);
      grad.addColorStop(0, "rgba(" + neb.color + ", " + na.toFixed(3) + ")");
      grad.addColorStop(0.5, "rgba(" + neb.color + ", " + (na * 0.35).toFixed(3) + ")");
      grad.addColorStop(1, "rgba(" + neb.color + ", 0)");

      ctx.beginPath();
      ctx.arc(nx, ny, nr, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  /* Micro-glifos de accesibilidad (copiado de hero-anim.js de A11Y PRO) */
  function drawGlyph(ctx, glyph, x, y, glow, dark, alpha) {
    var baseA = (0.34 + glow * 0.55) * alpha;
    var lum = dark ? 76 : 36;
    var col = "hsla(210,92%," + lum + "%," + baseA + ")";
    ctx.save();
    ctx.strokeStyle = col;
    ctx.fillStyle = col;
    ctx.lineWidth = 1.25;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    var s = 5.5 + glow * 2.5;
    ctx.beginPath();
    if (glyph === "tab") {
      ctx.moveTo(x - s, y);
      ctx.lineTo(x + s * 0.65, y);
      ctx.moveTo(x + s * 0.15, y - s * 0.55);
      ctx.lineTo(x + s * 0.7, y);
      ctx.lineTo(x + s * 0.15, y + s * 0.55);
      ctx.moveTo(x + s, y - s * 0.65);
      ctx.lineTo(x + s, y + s * 0.65);
      ctx.stroke();
    } else if (glyph === "audio") {
      ctx.arc(x - s * 0.45, y, 1.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x - s * 0.45, y, s * 0.65, -0.65, 0.65);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x - s * 0.45, y, s * 1.15, -0.65, 0.65);
      ctx.stroke();
    } else if (glyph === "contrast") {
      ctx.arc(x, y, s * 0.85, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, y, s * 0.85, -Math.PI / 2, Math.PI / 2);
      ctx.closePath();
      ctx.fill();
    } else if (glyph === "focus") {
      var c = s * 0.85,
        d = s * 0.38;
      ctx.moveTo(x - c, y - d);
      ctx.lineTo(x - c, y - c);
      ctx.lineTo(x - d, y - c);
      ctx.moveTo(x + d, y - c);
      ctx.lineTo(x + c, y - c);
      ctx.lineTo(x + c, y - d);
      ctx.moveTo(x + c, y + d);
      ctx.lineTo(x + c, y + c);
      ctx.lineTo(x + d, y + c);
      ctx.moveTo(x - d, y + c);
      ctx.lineTo(x - c, y + c);
      ctx.lineTo(x - c, y + d);
      ctx.stroke();
    } else if (glyph === "check") {
      ctx.moveTo(x - s * 0.75, y + s * 0.05);
      ctx.lineTo(x - s * 0.15, y + s * 0.65);
      ctx.lineTo(x + s * 0.85, y - s * 0.55);
      ctx.stroke();
    }
    ctx.restore();
  }

  function makeField(el, getSize, opts) {
    opts = opts || {};
    var f = {
      el: el,
      ctx: el.getContext("2d"),
      getSize: getSize,
      isSidebar: !!opts.sidebar,
      w: 0,
      h: 0,
      cssW: 0,
      cssH: 0,
      linkD: 120,
      cursorD: 210,
      parts: [],
    };

    f.resize = function (force) {
      var s = f.getSize();
      if (
        !force &&
        f.w &&
        Math.abs(s.w - f.cssW) < 1 &&
        Math.abs(s.h - f.cssH) < 150
      ) {
        return;
      }
      var dpr = Math.min(2, window.devicePixelRatio || 1);
      f.cssW = s.w;
      f.cssH = s.h;
      f.w = s.w;
      f.h = s.h;
      el.width = Math.round(s.w * dpr);
      el.height = Math.round(s.h * dpr);
      f.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      f.linkD = f.isSidebar
        ? 110
        : Math.max(92, Math.min(148, f.w * 0.092));
      f.cursorD = f.isSidebar
        ? 150
        : Math.max(160, Math.min(260, f.w * 0.17));
      f.initParticles();
      if (!f.isSidebar) initNebulae(f.w, f.h);
      if (!running) f.draw();
    };

    f.initParticles = function () {
      var n = f.isSidebar
        ? Math.min(36, Math.max(14, Math.round((f.w * f.h) / 14000)))
        : Math.max(64, Math.min(150, Math.round((f.w * f.h) / 14000)));
      f.parts = [];
      for (var i = 0; i < n; i++) {
        var a = Math.random() * Math.PI * 2;
        var v = 0.08 + Math.random() * 0.16;
        var glyph = !f.isSidebar && i < 12 ? GLYPHS[i % GLYPHS.length] : null;
        var bx = Math.random() * f.w;
        var by = Math.random() * f.h;
        f.parts.push({
          ax: bx,
          ay: by,
          x: bx,
          y: by,
          vx: Math.cos(a) * v,
          vy: Math.sin(a) * v,
          s: glyph ? 2.0 : 0.85 + Math.random() * 1.4,
          h: 205 + Math.random() * 32,
          lo: 0.55 + Math.random() * 0.3,
          glow: 0,
          phase: Math.random() * Math.PI * 2,
          breathSpeed: 0.35 + Math.random() * 0.35,
          breathAmp: 2.2 + Math.random() * 2.4,
          glyph: glyph,
        });
      }
    };

    f.step = function () {
      var rect = f.el.getBoundingClientRect();
      var mx = pointer.x - rect.left;
      var my = pointer.y - rect.top;
      var inField =
        pointer.active && mx >= 0 && my >= 0 && mx <= f.w && my <= f.h;
      var curD = f.cursorD;
      var cur2 = curD * curD;

      for (var i = 0; i < f.parts.length; i++) {
        var p = f.parts[i];
        if (inField) {
          var dx = mx - p.x,
            dy = my - p.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < cur2) {
            var d = Math.sqrt(d2) || 1;
            var force = (1 - d / curD) * 0.02;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
            p.glow += (1 - d / curD - p.glow) * 0.1;
          } else {
            p.glow *= 0.94;
          }
        } else {
          p.glow *= 0.94;
        }

        if (!f.isSidebar) {
          for (var k = 0; k < pulses.length; k++) {
            var q = pulses[k];
            var pdx = p.x - (q.x - rect.left),
              pdy = p.y - (q.y - rect.top);
            var pd = Math.sqrt(pdx * pdx + pdy * pdy) || 1;
            var band = Math.abs(pd - q.r);
            if (band < 60) {
              var pf = (1 - band / 60) * q.str * 0.5;
              p.vx += (pdx / pd) * pf;
              p.vy += (pdy / pd) * pf;
            }
          }
        }

        var sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > 2.0) {
          p.vx = (p.vx / sp) * 2.0;
          p.vy = (p.vy / sp) * 2.0;
        }
        /* Friccion clave de hero-anim.js: en reposo la velocidad cae a ~0
           y solo queda la respiracion orbital suave sobre el ancla */
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.ax += p.vx;
        p.ay += p.vy;
        if (p.ax < -20) p.ax = f.w + 20;
        else if (p.ax > f.w + 20) p.ax = -20;
        if (p.ay < -20) p.ay = f.h + 20;
        else if (p.ay > f.h + 20) p.ay = -20;

        /* Respiracion suave (oscilacion lenta de pocos px alrededor del ancla) */
        var ang = tick * p.breathSpeed + p.phase;
        p.x = p.ax + Math.cos(ang) * p.breathAmp;
        p.y = p.ay + Math.sin(ang * 0.85) * p.breathAmp;
      }

      f.draw(inField ? mx : -1e4, inField ? my : -1e4, inField);
    };

    f.draw = function (mx, my, inField) {
      var dark = isDark();
      var ctx = f.ctx;
      var W = f.w,
        H = f.h;
      ctx.clearRect(0, 0, W, H);

      if (f.isSidebar) {
        /* Sidebar navy: constelacion blanca suave */
        var sLink = f.linkD;
        var sLink2 = sLink * sLink;
        ctx.lineWidth = 1;
        for (var si = 0; si < f.parts.length; si++) {
          var sa = f.parts[si];
          for (var sj = si + 1; sj < f.parts.length; sj++) {
            var sb = f.parts[sj];
            var sdx = sa.x - sb.x,
              sdy = sa.y - sb.y;
            var sd2 = sdx * sdx + sdy * sdy;
            if (sd2 < sLink2) {
              var st = 1 - Math.sqrt(sd2) / sLink;
              var sglow = Math.max(sa.glow, sb.glow);
              ctx.strokeStyle =
                "rgba(255,255,255," + (st * (0.2 + sglow * 0.35)).toFixed(3) + ")";
              ctx.beginPath();
              ctx.moveTo(sa.x, sa.y);
              ctx.lineTo(sb.x, sb.y);
              ctx.stroke();
            }
          }
          var sr = sa.s * (1 + sa.glow * 1.2);
          ctx.fillStyle =
            "rgba(255,255,255," + (0.5 + sa.glow * 0.4).toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(sa.x, sa.y, sr, 0, Math.PI * 2);
          ctx.fill();
        }
        return;
      }

      if (dark) drawNebulae(ctx);

      var alpha = W >= 900 ? 0.9 : 0.58;
      var lineL = dark ? 62 : 40;
      var linkD = f.linkD;
      var link2 = linkD * linkD;
      var curD = f.cursorD;
      var cur2 = curD * curD;
      var n = f.parts.length;

      /* 1. Lineas entre particulas con alpha graduado por distancia + lineas al cursor */
      ctx.lineWidth = 1;
      for (var i = 0; i < n; i++) {
        var a = f.parts[i];
        for (var j = i + 1; j < n; j++) {
          var b = f.parts[j];
          var dx = a.x - b.x,
            dy = a.y - b.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < link2) {
            var t = 1 - Math.sqrt(d2) / linkD;
            var glow = Math.max(a.glow, b.glow);
            var baseLine = dark ? 0.2 : 0.22;
            ctx.strokeStyle =
              "hsla(215,85%," +
              lineL +
              "%," +
              t * (baseLine + glow * 0.42) * alpha +
              ")";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        if (inField) {
          var mdx = a.x - mx,
            mdy = a.y - my;
          var md2 = mdx * mdx + mdy * mdy;
          if (md2 < cur2) {
            var mt = 1 - Math.sqrt(md2) / curD;
            ctx.strokeStyle =
              "hsla(210,95%," +
              (dark ? 70 : 45) +
              "%," +
              mt * 0.46 * alpha +
              ")";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      /* 2. Nodos + micro-glifos de accesibilidad en margenes */
      for (var k = 0; k < n; k++) {
        var p = f.parts[k];
        var inTextZone =
          p.x > W * 0.24 &&
          p.x < W * 0.82 &&
          p.y > H * 0.12 &&
          p.y < H * 0.88;
        if (p.glyph && W >= 700 && !inTextZone) {
          drawGlyph(ctx, p.glyph, p.x, p.y, p.glow, dark, alpha);
          continue;
        }
        var lum = dark ? 62 + p.lo * 22 : 32 + p.lo * 20;
        var r = p.s * (1 + p.glow * 1.4);
        var pa = (0.78 + p.glow * 0.22) * alpha;
        ctx.fillStyle = "hsla(" + p.h + ",88%," + lum + "%," + pa + ")";
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
        if (p.glow > 0.15) {
          ctx.fillStyle =
            "hsla(" +
            p.h +
            ",95%," +
            (dark ? 68 : 45) +
            "%," +
            p.glow * 0.18 * alpha +
            ")";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* 3. Anillos de ondas al clic */
      for (var u = 0; u < pulses.length; u++) {
        var q = pulses[u];
        ctx.strokeStyle =
          "hsla(210,95%," +
          (dark ? 70 : 45) +
          "%," +
          q.str * 0.35 * alpha +
          ")";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.lineWidth = 1;
    };

    return f;
  }

  fields.push(
    makeField(
      canvas,
      function () {
        return { w: window.innerWidth, h: window.innerHeight };
      },
      { sidebar: false },
    ),
  );

  if (nav) {
    var navCanvas = document.createElement("canvas");
    navCanvas.className = "side-nav-canvas";
    navCanvas.setAttribute("aria-hidden", "true");
    nav.insertBefore(navCanvas, nav.firstChild);
    fields.push(
      makeField(
        navCanvas,
        function () {
          var r = nav.getBoundingClientRect();
          return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
        },
        { sidebar: true },
      ),
    );
  }

  function step() {
    tick += 0.016;
    for (var j = pulses.length - 1; j >= 0; j--) {
      pulses[j].r += 7;
      pulses[j].str *= 0.92;
      if (pulses[j].str < 0.05) pulses.splice(j, 1);
    }
    for (var i = 0; i < fields.length; i++) fields[i].step();
    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (running || reduceMotion.matches) return;
    running = true;
    for (var i = 0; i < fields.length; i++)
      fields[i].el.style.display = "block";
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    for (var i = 0; i < fields.length; i++) {
      fields[i].ctx.clearRect(0, 0, fields[i].w, fields[i].h);
      fields[i].el.style.display = "none";
    }
  }

  function setPaused(paused, persist) {
    if (persist !== false) {
      try {
        localStorage.setItem(STORAGE_KEY, paused ? "false" : "true");
      } catch (e) {}
    }
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(!paused));
    }
    document.dispatchEvent(
      new CustomEvent("fx:toggled", { detail: { enabled: !paused } }),
    );
    if (paused) {
      stop();
    } else {
      start();
    }
  }

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      for (var i = 0; i < fields.length; i++) fields[i].resize(false);
    }, 200);
  });

  if (toggle) {
    toggle.addEventListener("click", function () {
      setPaused(toggle.getAttribute("aria-pressed") === "true");
    });
  }

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      if (running) cancelAnimationFrame(rafId);
    } else if (running) {
      rafId = requestAnimationFrame(step);
    }
  });

  reduceMotion.addEventListener("change", function () {
    if (reduceMotion.matches) {
      stop();
    } else if (localStorage.getItem(STORAGE_KEY) !== "false") {
      start();
    }
  });

  for (var i = 0; i < fields.length; i++) fields[i].resize(true);

  var savedPaused = false;
  try {
    savedPaused = localStorage.getItem(STORAGE_KEY) === "false";
  } catch (e) {}
  setPaused(savedPaused, false);
})();
