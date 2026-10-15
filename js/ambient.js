/**
 * Fondos ambiente.
 * - Canvas global: red de particulas con lineas + particulas libres +
 *   atraccion al puntero. En modo oscuro, estilo A11Y PRO: starfield con
 *   twinkle/drift + nebulosas difusas + red cyan sutil.
 * - Canvas #sideNav: red de particulas blancas (sidebar siempre navy).
 * - Pausable via #fxToggle (WCAG 2.2.2), persistente en localStorage.
 * - Desactivado con prefers-reduced-motion (WCAG 2.3.3).
 * - Pausa cuando la pestana esta oculta.
 * - Comparte estado con cuelume-init.js via evento "fx:toggled".
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
  var time = 0;
  var pointer = { x: -9999, y: -9999 };

  window.addEventListener("pointermove", function (e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
  });
  window.addEventListener("pointerleave", function () {
    pointer.x = pointer.y = -9999;
  });

  function isDark() {
    return document.documentElement.classList.contains("dark");
  }

  function globalPalette() {
    return isDark()
      ? { dot: "rgba(224, 231, 255, 0.7)", line: "rgba(56, 189, 248, 0.16)" }
      : { dot: "rgba(0, 85, 179, 0.55)", line: "rgba(0, 85, 179, 0.22)" };
  }

  function sidebarPalette() {
    return { dot: "rgba(255, 255, 255, 0.55)", line: "rgba(255, 255, 255, 0.16)" };
  }

  /* Nebulosas difusas modo oscuro (patron A11Y PRO) */
  var nebulae = [];
  function initNebulae(w, h) {
    var maxDim = Math.max(w, h);
    nebulae = [
      {
        color: "14, 165, 233",
        baseX: w * 0.75,
        baseY: h * 0.25,
        orbitX: w * 0.12,
        orbitY: h * 0.1,
        baseR: maxDim * 0.42,
        baseAlpha: 0.07,
        speedX: 0.18,
        speedY: 0.22,
        phaseX: 0.8,
        phaseY: 1.5,
      },
      {
        color: "124, 58, 237",
        baseX: w * 0.2,
        baseY: h * 0.7,
        orbitX: w * 0.14,
        orbitY: h * 0.12,
        baseR: maxDim * 0.38,
        baseAlpha: 0.06,
        speedX: 0.2,
        speedY: 0.16,
        phaseX: 2.1,
        phaseY: 3.2,
      },
    ];
  }

  function drawNebulae(ctx) {
    for (var k = 0; k < nebulae.length; k++) {
      var neb = nebulae[k];
      var nAngX = time * neb.speedX + neb.phaseX;
      var nAngY = time * neb.speedY + neb.phaseY;
      var nx = neb.baseX + Math.sin(nAngX) * neb.orbitX;
      var ny = neb.baseY + Math.cos(nAngY) * neb.orbitY;
      var nr = neb.baseR * (0.94 + 0.06 * Math.sin(nAngX * 0.6));
      var na = neb.baseAlpha * (0.85 + 0.15 * Math.sin(nAngY * 0.8));

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

  function makeField(el, getPalette, getSize, opts) {
    opts = opts || {};
    var f = {
      el: el,
      ctx: el.getContext("2d"),
      getPalette: getPalette,
      getSize: getSize,
      starfield: !!opts.starfield,
      w: 0,
      h: 0,
      particles: [],
    };

    f.resize = function () {
      var s = f.getSize();
      f.w = el.width = s.w;
      f.h = el.height = s.h;
      f.initParticles();
      if (f.starfield) initNebulae(f.w, f.h);
      if (!running) f.draw();
    };

    f.initParticles = function () {
      var n = f.starfield
        ? Math.min(120, Math.max(70, Math.floor((f.w * f.h) / 12000)))
        : Math.min(70, Math.floor((f.w * f.h) / 26000));
      f.particles = [];
      for (var i = 0; i < n; i++) {
        var p = {
          x: Math.random() * f.w,
          y: Math.random() * f.h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.8,
          free: Math.random() < 0.45,
        };
        if (f.starfield) {
          // Estrella: twinkle + drift + brillo heroe ocasional
          p.isHero = Math.random() < 0.14;
          p.r = 0.9 + Math.random() * 1.6;
          p.baseAlpha = p.isHero
            ? 0.8 + Math.random() * 0.2
            : 0.6 + Math.random() * 0.4;
          p.phase = Math.random() * Math.PI * 2;
          p.speed = 0.45 + Math.random() * 0.75;
          p.color = p.isHero
            ? Math.random() < 0.45
              ? "186, 230, 253"
              : Math.random() < 0.7
                ? "224, 231, 255"
                : "255, 255, 255"
            : "255, 255, 255";
        }
        f.particles.push(p);
      }
    };

    f.draw = function () {
      var c = f.getPalette();
      var ctx = f.ctx;
      ctx.clearRect(0, 0, f.w, f.h);

      var starMode = f.starfield && isDark();
      if (starMode) drawNebulae(ctx);

      // Particulas (en starfield: twinkle + glow heroe)
      for (var i = 0; i < f.particles.length; i++) {
        var p = f.particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (starMode) {
          var tw = Math.sin(time * p.speed + p.phase);
          var alpha = p.baseAlpha * (0.6 + 0.4 * tw);
          if (p.isHero) {
            ctx.shadowBlur = 4;
            ctx.shadowColor = "rgba(" + p.color + ", " + (alpha * 0.6).toFixed(3) + ")";
          }
          ctx.fillStyle = "rgba(" + p.color + ", " + alpha.toFixed(3) + ")";
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = c.dot;
          ctx.fill();
        }
      }

      // Red de conexiones (no aplica a particulas libres)
      ctx.strokeStyle = c.line;
      ctx.lineWidth = 1;
      var maxDist = f.starfield ? 160 : 130;
      var maxDistSq = maxDist * maxDist;
      for (var a = 0; a < f.particles.length; a++) {
        if (f.particles[a].free) continue;
        for (var b = a + 1; b < f.particles.length; b++) {
          if (f.particles[b].free) continue;
          var dx = f.particles[a].x - f.particles[b].x;
          var dy = f.particles[a].y - f.particles[b].y;
          if (dx * dx + dy * dy < maxDistSq) {
            ctx.beginPath();
            ctx.moveTo(f.particles[a].x, f.particles[a].y);
            ctx.lineTo(f.particles[b].x, f.particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    f.step = function () {
      var rect = f.el.getBoundingClientRect();
      var mx = pointer.x - rect.left;
      var my = pointer.y - rect.top;
      var attractR = 170;
      var attractRSq = attractR * attractR;
      for (var i = 0; i < f.particles.length; i++) {
        var p = f.particles[i];
        var ddx = mx - p.x;
        var ddy = my - p.y;
        var dSq = ddx * ddx + ddy * ddy;
        if (dSq < attractRSq && dSq > 1) {
          var d = Math.sqrt(dSq);
          var force = (1 - d / attractR) * 0.025;
          p.vx += (ddx / d) * force;
          p.vy += (ddy / d) * force;
          var speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > 0.9) {
            p.vx = (p.vx / speed) * 0.9;
            p.vy = (p.vy / speed) * 0.9;
          }
        }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = f.w + 10;
        if (p.x > f.w + 10) p.x = -10;
        if (p.y < -10) p.y = f.h + 10;
        if (p.y > f.h + 10) p.y = -10;
      }
      f.draw();
    };

    return f;
  }

  fields.push(
    makeField(
      canvas,
      globalPalette,
      function () {
        return { w: window.innerWidth, h: window.innerHeight };
      },
      { starfield: true },
    ),
  );

  if (nav) {
    var navCanvas = document.createElement("canvas");
    navCanvas.className = "side-nav-canvas";
    navCanvas.setAttribute("aria-hidden", "true");
    nav.insertBefore(navCanvas, nav.firstChild);
    fields.push(
      makeField(navCanvas, sidebarPalette, function () {
        var r = nav.getBoundingClientRect();
        return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
      }),
    );
  }

  function step() {
    time += 0.006;
    for (var i = 0; i < fields.length; i++) fields[i].step();
    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (running || reduceMotion.matches) return;
    running = true;
    for (var i = 0; i < fields.length; i++) fields[i].el.style.display = "block";
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
      for (var i = 0; i < fields.length; i++) fields[i].resize();
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

  // Reaccionar a cambios de preferencia de movimiento en vivo
  reduceMotion.addEventListener("change", function () {
    if (reduceMotion.matches) {
      stop();
    } else if (localStorage.getItem(STORAGE_KEY) !== "false") {
      start();
    }
  });

  for (var i = 0; i < fields.length; i++) fields[i].resize();

  var savedPaused = false;
  try {
    savedPaused = localStorage.getItem(STORAGE_KEY) === "false";
  } catch (e) {}
  setPaused(savedPaused, false);
})();
