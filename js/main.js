/* main.js — orbit beads, scroll reveal, case study modal, note form, email link */
(function () {
  "use strict";
  var EMAIL = "gee9.ms@gmail.com";
  var FORM_ENDPOINT = "https://formspree.io/f/mnppgdjr";

  /* ---------- Orbit beads: pendulum drop from the top of each ring ---------- */
  function Orbit(el) {
    var d = Number(el.dataset.dir || 1), delay = Number(el.dataset.delay || 0) * 1000;
    var k = 2, c = 0.55, STEP = 1 / 240, rest = 4 * Math.PI;
    var th, w, damp, raf = 0, last = 0, acc = 0, timer = 0;
    function set() { el.style.transform = "rotate(" + ((th - Math.PI) * 180 / Math.PI * d) + "deg)"; }
    function reset() { th = Math.PI; w = 1.0; damp = false; set(); }
    function tick(t) {
      if (!last) last = t;
      acc += Math.min(0.05, (t - last) / 1000); last = t;
      while (acc >= STEP) {
        if (!damp && th >= 3 * Math.PI) damp = true;
        var a = -k * Math.sin(th) - (damp ? c * w : 0);
        w += a * STEP; th += w * STEP; acc -= STEP;
      }
      set();
      if (damp && Math.abs(w) < 0.004 && Math.abs(th - rest) < 0.002) { th = rest; set(); raf = 0; return; }
      raf = requestAnimationFrame(tick);
    }
    this.play = function () {
      this.stop(); reset();
      timer = setTimeout(function () { last = 0; acc = 0; raf = requestAnimationFrame(tick); }, delay);
    };
    this.stop = function () { clearTimeout(timer); cancelAnimationFrame(raf); raf = 0; };
    reset();
  }
  var orbits = [].map.call(document.querySelectorAll(".orbit"), function (el) { return new Orbit(el); });
  var hero = document.getElementById("hero");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    orbits.forEach(function (o) { o.stop(); });
  } else if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { orbits.forEach(function (o) { e.isIntersecting ? o.play() : o.stop(); }); });
    }, { threshold: 0.2 }).observe(hero);
  } else {
    orbits.forEach(function (o) { o.play(); });
  }

  /* ---------- Scroll reveal (replays on re-entry) ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("in", e.isIntersecting); });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal, .reveal-card").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal, .reveal-card").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Case study modal ---------- */
  var modal = document.getElementById("modal"),
      scroller = document.getElementById("modalScroller"),
      track = document.getElementById("modalTrack"),
      sheet = document.getElementById("modalSheet"),
      host = document.getElementById("csHost"),
      prog = document.getElementById("csProg"),
      doc = document.getElementById("csDoc"),
      cleanup = null, lastFocus = null, closeTimer = 0;

  function openModal(id, color) {
    clearTimeout(closeTimer);
    lastFocus = document.activeElement;
    if (cleanup) { cleanup(); cleanup = null; }
    sheet.style.background = color || "#F6F3FB";
    modal.hidden = false;
    document.body.classList.add("modal-open");
    scroller.scrollTop = 0;
    requestAnimationFrame(function () {
      modal.classList.add("show");
      cleanup = window.CaseStudy.openCase(host, prog, doc, id);
      document.getElementById("modalClose").focus({ preventScroll: true });
    });
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
    closeTimer = setTimeout(function () {
      modal.hidden = true;
      if (cleanup) { cleanup(); cleanup = null; }
      if (lastFocus) lastFocus.focus({ preventScroll: true });
    }, 250);
  }
  document.querySelectorAll("[data-case]").forEach(function (b) {
    b.addEventListener("click", function () { openModal(b.dataset.case, b.dataset.sheet); });
  });
  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalBack").addEventListener("click", closeModal);
  track.addEventListener("click", function (e) { if (e.target === track) closeModal(); });
  modal.addEventListener("click", function (e) { if (e.target === scroller) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  /* ---------- Note form (Formspree) ---------- */
  var form = document.getElementById("note"),
      input = document.getElementById("noteInput"),
      hint = document.getElementById("noteHint"),
      send = form.querySelector(".note__send"),
      step = 0, message = "", busy = false;

  function say(t, cls) { hint.textContent = t || ""; hint.className = "note__hint" + (cls ? " " + cls : ""); }
  function swapTo(placeholder, type) {
    input.classList.add("out");
    setTimeout(function () {
      input.value = ""; input.type = type; input.placeholder = placeholder;
      input.classList.remove("out"); input.classList.add("pre");
      void input.offsetWidth;
      input.classList.remove("pre");
      input.focus();
    }, 350);
  }
  input.addEventListener("input", function () { if (hint.classList.contains("err")) say(""); });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (busy) return;
    var v = input.value.trim();
    if (step === 0) {
      if (!v) { say("Write something first", "err"); return; }
      message = v; step = 1; say("");
      swapTo("Your email, so I can reply", "email");
      input.setAttribute("aria-label", "Your email");
      return;
    }
    if (step === 1) {
      if (!/^\S+@\S+\.\S+$/.test(v)) { say("Enter a valid email", "err"); return; }
      busy = true; say("");
      fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email: v, message: message, _subject: "New note from your portfolio" })
      }).then(function (r) {
        if (!r.ok) throw new Error(r.status);
        step = 2;
        send.classList.add("fly");
        input.classList.add("out");
        input.disabled = true; send.disabled = true;
        say("Sent. Talk soon.", "ok");
      }).catch(function () {
        say("Couldn't send. Try again.", "err");
      }).then(function () { busy = false; });
    }
  });

  /* ---------- Email link: mail app, Gmail compose as fallback ---------- */
  document.getElementById("emailLink").addEventListener("click", function (e) {
    e.preventDefault();
    var left = false;
    function mark() { left = true; }
    window.addEventListener("blur", mark, { once: true });
    document.addEventListener("visibilitychange", mark, { once: true });
    window.location.href = "mailto:" + EMAIL;
    setTimeout(function () {
      window.removeEventListener("blur", mark);
      document.removeEventListener("visibilitychange", mark);
      if (!left && document.hasFocus()) {
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(EMAIL), "_blank", "noopener");
      }
    }, 1200);
  });
})();
