/* ============================================================
   PROTECTION.JS
   ------------------------------------------------------------
   A deterrent, not security (see README.md). Toggle it off
   entirely with `protection: false` in site-config.js.

   Blocks: right-click, F12 / Ctrl+Shift+I/J/C, Ctrl+U/S/P,
   text selection, image dragging, printing. Blurs the page
   on tab-switch and on common screenshot key combinations.
   ============================================================ */
(function () {
  "use strict";

  function start() {
    var cfg = window.SITE || {};
    if (cfg.protection === false) return;

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    document.addEventListener("dragstart", function (e) {
      if (e.target && e.target.tagName === "IMG") e.preventDefault();
    });

    document.addEventListener("selectstart", function (e) {
      // Still allow selecting text inside inputs/textareas.
      var tag = e.target && e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
    });

    document.addEventListener("keydown", function (e) {
      var k = e.key;
      var blockCombo =
        k === "F12" ||
        (e.ctrlKey && e.shiftKey && (k === "I" || k === "i" || k === "J" || k === "j" || k === "C" || k === "c")) ||
        (e.metaKey && e.altKey && (k === "I" || k === "i" || k === "J" || k === "j")) ||
        (e.ctrlKey && !e.shiftKey && (k === "u" || k === "U" || k === "s" || k === "S" || k === "p" || k === "P"));
      if (blockCombo) {
        e.preventDefault();
        report("blocked-shortcut", k);
      }

      // Best-effort screenshot deterrent.
      var screenshotAttempt =
        k === "PrintScreen" ||
        (e.metaKey && e.shiftKey && ["3", "4", "5"].indexOf(k) !== -1); // macOS
      if (screenshotAttempt) {
        blurBriefly();
        report("blocked-screenshot-key", k);
      }
    });

    window.addEventListener("beforeprint", function (e) {
      e.preventDefault();
      report("blocked-print", "");
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        document.documentElement.classList.add("is-blurred");
      } else {
        document.documentElement.classList.remove("is-blurred");
      }
    });

    function blurBriefly() {
      document.documentElement.classList.add("is-blurred");
      window.setTimeout(function () {
        document.documentElement.classList.remove("is-blurred");
      }, 1200);
    }

    function report(kind, key) {
      if (!cfg.alertEndpoint) return;
      try {
        fetch(cfg.alertEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kind: kind,
            key: key,
            page: window.location.pathname,
            at: new Date().toISOString()
          })
        }).catch(function () {});
      } catch (err) {
        /* no-op on static hosts without fetch/CORS */
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
