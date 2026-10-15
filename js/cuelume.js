/* GENERATED - NO EDITAR. Fuente: landing/design-system/. Sync: landing/scripts/sync-design-system.sh */
var cuelume = (() => {
  var w = Object.defineProperty;
  var E = Object.getOwnPropertyDescriptor;
  var Q = Object.getOwnPropertyNames;
  var R = Object.prototype.hasOwnProperty;
  var M = (e, t) => {
    for (var a in t) w(e, a, { get: t[a], enumerable: !0 });
  };
  var S = (e, t, a, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Q(t))
        !R.call(e, i) &&
          i !== a &&
          w(e, i, {
            get: () => t[i],
            enumerable: !(n = E(t, i)) || n.enumerable
          });
    return e;
  };
  var C = e => S(w({}, "__esModule", { value: !0 }), e);
  var H = {};
  M(H, {
    bind: () => F,
    play: () => p,
    setEnabled: () => h,
    sounds: () => b
  });
  var l = {
    chime: {
      masterGain: 0.5,
      layers: [
        { kind: "tone", waveform: "sine", frequency: 1046.5, attack: 0.006, decay: 0.22, peak: 0.09 },
        { kind: "tone", waveform: "sine", frequency: 1568, offset: 0.09, attack: 0.006, decay: 0.26, peak: 0.08 }
      ],
      shimmer: { delay: 0.12, feedback: 0.25, wet: 0.18, lowpass: 4e3 }
    },
    sparkle: {
      masterGain: 0.5,
      layers: [
        { kind: "tone", waveform: "sine", frequency: 1760, offset: 0, attack: 0.003, decay: 0.09, peak: 0.045 },
        { kind: "tone", waveform: "sine", frequency: 2217, offset: 0.045, attack: 0.003, decay: 0.09, peak: 0.04 },
        { kind: "tone", waveform: "sine", frequency: 2637, offset: 0.09, attack: 0.003, decay: 0.1, peak: 0.038 },
        { kind: "tone", waveform: "sine", frequency: 3520, offset: 0.135, attack: 0.003, decay: 0.12, peak: 0.032 }
      ],
      shimmer: { delay: 0.07, feedback: 0.35, wet: 0.22, lowpass: 6e3 }
    },
    droplet: {
      masterGain: 0.55,
      layers: [
        { kind: "tone", waveform: "sine", frequency: 1200, glideTo: 550, glideTime: 0.14, attack: 0.004, decay: 0.2, peak: 0.075 }
      ],
      shimmer: { delay: 0.09, feedback: 0.2, wet: 0.15, lowpass: 3e3 }
    },
    bloom: {
      masterGain: 0.5,
      layers: [
        { kind: "tone", waveform: "sine", frequency: 528, attack: 0.06, decay: 0.32, peak: 0.06 },
        { kind: "tone", waveform: "sine", frequency: 528, detune: 12, attack: 0.06, decay: 0.34, peak: 0.05 }
      ],
      shimmer: { delay: 0.15, feedback: 0.2, wet: 0.12, lowpass: 2500 }
    },
    whisper: {
      masterGain: 0.5,
      layers: [
        { kind: "noise", filterType: "lowpass", filterFrequency: 1200, filterQ: 0.7, attack: 0.04, decay: 0.16, peak: 0.05 }
      ]
    },
    tick: {
      masterGain: 0.4,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 5400, filterQ: 1.8, attack: 0.001, decay: 0.018, peak: 0.14 },
        { kind: "tone", waveform: "sine", frequency: 2600, attack: 0.001, decay: 0.012, peak: 0.018 }
      ]
    },
    press: {
      masterGain: 0.4,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 1700, filterQ: 1.4, attack: 0.001, decay: 0.02, peak: 0.13 }
      ]
    },
    release: {
      masterGain: 0.4,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 4600, filterQ: 1.8, attack: 0.001, decay: 0.016, peak: 0.12 },
        { kind: "tone", waveform: "sine", frequency: 3200, offset: 0.006, attack: 0.001, decay: 0.05, peak: 0.02 }
      ]
    },
    toggle: {
      masterGain: 0.4,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 2200, filterQ: 1.6, attack: 0.001, decay: 0.016, peak: 0.12 },
        { kind: "noise", filterType: "bandpass", filterFrequency: 3800, filterQ: 1.6, offset: 0.024, attack: 0.001, decay: 0.02, peak: 0.1 }
      ]
    },
    success: {
      masterGain: 0.5,
      layers: [
        { kind: "tone", waveform: "sine", frequency: 880, attack: 0.004, decay: 0.09, peak: 0.06 },
        { kind: "tone", waveform: "sine", frequency: 1108.73, offset: 0.06, attack: 0.004, decay: 0.1, peak: 0.06 },
        { kind: "tone", waveform: "sine", frequency: 1318.51, offset: 0.12, attack: 0.004, decay: 0.18, peak: 0.07 }
      ],
      shimmer: { delay: 0.1, feedback: 0.22, wet: 0.16, lowpass: 4500 }
    },
    error: {
      masterGain: 0.42,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 850, filterQ: 1.1, attack: 0.001, decay: 0.035, peak: 0.13 },
        { kind: "tone", waveform: "triangle", frequency: 440, offset: 0.025, attack: 0.004, decay: 0.09, peak: 0.045 },
        { kind: "tone", waveform: "triangle", frequency: 349.23, offset: 0.1, attack: 0.004, decay: 0.14, peak: 0.04 }
      ]
    },
    page: {
      masterGain: 0.38,
      layers: [
        { kind: "noise", filterType: "lowpass", filterFrequency: 1800, filterQ: 0.7, attack: 0.006, decay: 0.08, peak: 0.11 },
        { kind: "noise", filterType: "bandpass", filterFrequency: 4200, filterQ: 1.2, offset: 0.04, attack: 0.004, decay: 0.065, peak: 0.08 },
        { kind: "tone", waveform: "sine", frequency: 2400, offset: 0.075, attack: 0.002, decay: 0.045, peak: 0.02 }
      ]
    },
    loading: {
      masterGain: 0.42,
      layers: [
        { kind: "noise", filterType: "lowpass", filterFrequency: 1400, filterQ: 0.6, attack: 0.035, decay: 0.14, peak: 0.035 },
        { kind: "tone", waveform: "sine", frequency: 420, glideTo: 630, glideTime: 0.18, attack: 0.025, decay: 0.18, peak: 0.05 }
      ],
      shimmer: { delay: 0.11, feedback: 0.18, wet: 0.12, lowpass: 2800 }
    },
    ready: {
      masterGain: 0.45,
      layers: [
        { kind: "noise", filterType: "bandpass", filterFrequency: 3200, filterQ: 1.7, attack: 0.001, decay: 0.018, peak: 0.1 },
        { kind: "tone", waveform: "sine", frequency: 659.25, offset: 0.025, attack: 0.012, decay: 0.2, peak: 0.05 },
        { kind: "tone", waveform: "sine", frequency: 987.77, offset: 0.025, attack: 0.012, decay: 0.22, peak: 0.035 }
      ],
      shimmer: { delay: 0.13, feedback: 0.2, wet: 0.13, lowpass: 3600 }
    }
  };

  function u(e) {
    return typeof e == "string" && Object.prototype.hasOwnProperty.call(l, e);
  }
  var b = Object.keys(l);
  var q = 0.05,
    N = 0.05,
    V = 0.001;

  function I(e, t, a, n) {
    let i = e.createOscillator();
    if (
      ((i.type = a.waveform),
      i.frequency.setValueAtTime(a.frequency, n),
      a.detune && (i.detune.value = a.detune),
      a.glideTo !== void 0)
    ) {
      let r = a.glideTime ?? a.attack + a.decay;
      i.frequency.exponentialRampToValueAtTime(a.glideTo, n + r);
    }
    let o = e.createGain();
    o.gain.setValueAtTime(1e-4, n),
      o.gain.exponentialRampToValueAtTime(a.peak, n + a.attack),
      o.gain.exponentialRampToValueAtTime(1e-4, n + a.attack + a.decay),
      i.connect(o).connect(t),
      i.start(n),
      i.stop(n + a.attack + a.decay + q);
  }

  function O(e, t, a, n) {
    let i = a.attack + a.decay + q,
      o = Math.max(1, Math.floor(i * e.sampleRate)),
      r = e.createBuffer(1, o, e.sampleRate),
      c = r.getChannelData(0);
    for (let m = 0; m < o; m++) c[m] = 2 * Math.random() - 1;
    let s = e.createBufferSource();
    s.buffer = r;
    let f = e.createBiquadFilter();
    (f.type = a.filterType),
      (f.frequency.value = a.filterFrequency),
      a.filterQ !== void 0 && (f.Q.value = a.filterQ);
    let d = e.createGain();
    d.gain.setValueAtTime(1e-4, n),
      d.gain.exponentialRampToValueAtTime(a.peak, n + a.attack),
      d.gain.exponentialRampToValueAtTime(1e-4, n + a.attack + a.decay),
      s.connect(f).connect(d).connect(t),
      s.start(n),
      s.stop(n + i);
  }

  function P(e, t, a, n) {
    let i = e.createDelay(1);
    i.delayTime.value = n.delay;
    let o = e.createBiquadFilter();
    (o.type = "lowpass"), (o.frequency.value = n.lowpass);
    let r = e.createGain();
    r.gain.value = n.feedback;
    let c = e.createGain();
    return (
      (c.gain.value = n.wet),
      t.connect(i),
      i.connect(o),
      o.connect(r),
      r.connect(i),
      o.connect(c),
      c.connect(a),
      [i, o, r, c]
    );
  }

  function x(e) {
    return Math.max(...e.layers.map(t => (t.offset ?? 0) + t.attack + t.decay + q));
  }

  function B(e) {
    return !e || e.feedback <= 0
      ? 0
      : e.feedback >= 1
      ? e.delay
      : e.delay * (1 + Math.ceil(Math.log(V) / Math.log(e.feedback)));
  }

  function T(e, t) {
    if (!g) return;
    let a = e.currentTime,
      n = e.createGain();
    (n.gain.value = t.masterGain), n.connect(e.destination);
    let i = t.shimmer ? P(e, n, e.destination, t.shimmer) : [];
    for (let r of t.layers) {
      let c = a + (r.offset ?? 0);
      r.kind === "tone" ? I(e, n, r, c) : O(e, n, r, c);
    }
    let o = (x(t) + B(t.shimmer) + N) * 1e3;
    setTimeout(() => {
      n.disconnect();
      for (let r of i) r.disconnect();
    }, o);
  }

  var k = null;
  var g = true;

  try {
    if (typeof localStorage !== "undefined" && localStorage.getItem("a11y_ambient_paused") === "true") {
      g = false;
    }
  } catch (err) {}

  function h(e) {
    if (typeof e == "boolean") {
      g = e;
      if (!g && k && k.state === "running") {
        try { k.suspend(); } catch (err) {}
      } else if (g && k && k.state === "suspended") {
        try { k.resume(); } catch (err) {}
      }
    }
  }

  function _() {
    if (k) return k;
    if (typeof window > "u") return null;
    let e = window.AudioContext ?? window.webkitAudioContext;
    if (!e) return null;
    try {
      k = new e();
    } catch {
      return null;
    }
    return k;
  }

  function p(e = "chime") {
    if (!g || !u(e)) return;
    if (typeof navigator < "u" && navigator.userActivation?.hasBeenActive === !1) return;
    let t = _();
    if (!t) return;
    let a = l[e];
    if (t.state === "running") {
      if (!g) return;
      T(t, a);
    } else {
      try {
        t.resume().then(() => {
          if (g && t.state === "running") {
            T(t, a);
          }
        }, () => {});
      } catch {}
    }
  }

  var D = 150,
    v = new WeakSet(),
    G = new WeakSet(),
    A = -1 / 0;

  function L(e, t, a) {
    let n = e.getAttribute(t);
    return u(n) ? n : a;
  }

  function U(e) {
    return e.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }

  function j(e, t, a) {
    if (!(t.target instanceof Element)) return null;
    let n = t.target.closest(`[${a}]`);
    return n && e.contains(n) ? n : null;
  }

  function y(e, t, a, n, i = !1) {
    e.addEventListener(
      t,
      o => {
        if (!g) return;
        let r = j(e, o, a);
        if (!(!r || G.has(o)) && !(i && !U(o))) {
          if (t === "pointerenter") {
            let c = o.relatedTarget;
            if (c instanceof Node && r.contains(c)) return;
            let s = performance.now();
            if (s - A < D) return;
            A = s;
          }
          G.add(o);
          p(L(r, a, n));
        }
      },
      !0
    );
  }

  function F(e) {
    if (typeof document > "u") return;
    let t = e ?? document;
    v.has(t) ||
      (v.add(t),
      y(t, "pointerenter", "data-cuelume-hover", "chime", !0),
      y(t, "pointerdown", "data-cuelume-press", "press"),
      y(t, "pointerup", "data-cuelume-release", "release"),
      y(t, "click", "data-cuelume-toggle", "toggle"));
  }

  var cuelumeExport = C(H);
  if (typeof window !== "undefined") {
    window.cuelume = cuelumeExport;
  }
  return cuelumeExport;
})();

if (typeof window !== "undefined") {
  window.cuelume = cuelume;
}
