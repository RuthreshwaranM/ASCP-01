/* ============================================================
   SITE.JS
   ------------------------------------------------------------
   Reads window.SITE (site-config.js) and fills in:
     [data-site-header]   the top bar + nav
     [data-site-hero]     the big headline (index.html only)
     [data-site-tiles]    the section grid (index.html only)
     [data-site-footer]   the footer
     #breadcrumbs         "Home / Section" trail (inner pages)
   Nothing here needs editing — see site-config.js instead.
   ============================================================ */
(function () {
  "use strict";

  function currentFile() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function visibleSections(cfg) {
    return (cfg.sections || []).filter(function (s) {
      return s.show;
    });
  }

  function renderHeader(cfg) {
    var mount = document.querySelector("[data-site-header]");
    if (!mount) return;
    var here = currentFile();
    var sections = visibleSections(cfg);

    var navLinks = [{ id: "home", label: "Home", href: "index.html" }].concat(
      sections.map(function (s) {
        return { id: s.id, href: s.href, label: s.label };
      })
    );

    var navHtml = navLinks
      .map(function (link) {
        var isActive = link.href === here;
        return (
          '<a class="topbar__link' +
          (isActive ? " is-active" : "") +
          '" href="' +
          link.href +
          '">' +
          link.label +
          "</a>"
        );
      })
      .join("");

    mount.innerHTML =
      '<div class="topbar">' +
      '<a class="topbar__brand" href="index.html">' +
      '<img class="topbar__logo" src="' +
      cfg.logo +
      '" alt="" width="28" height="28">' +
      '<span class="topbar__brandtext">' +
      '<span class="topbar__name">' +
      cfg.brandName +
      "</span>" +
      '<span class="topbar__line">' +
      cfg.brandLine +
      "</span>" +
      "</span>" +
      "</a>" +
      '<button class="topbar__toggle" type="button" aria-label="Menu" aria-expanded="false">' +
      '<span></span><span></span><span></span>' +
      "</button>" +
      '<nav class="topbar__nav" data-topbar-nav>' +
      navHtml +
      "</nav>" +
      "</div>";

    var toggle = mount.querySelector(".topbar__toggle");
    var nav = mount.querySelector("[data-topbar-nav]");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function renderHero(cfg) {
    var mount = document.querySelector("[data-site-hero]");
    if (!mount) return;
    mount.innerHTML =
      '<div class="hero">' +
      '<p class="hero__kicker">' +
      cfg.brandLine +
      "</p>" +
      "<h1 class=\"hero__title\">" +
      cfg.tagline +
      "</h1>" +
      "</div>";
  }

  function renderTiles(cfg) {
    var mount = document.querySelector("[data-site-tiles]");
    if (!mount) return;
    var sections = visibleSections(cfg);
    mount.innerHTML =
      '<div class="tiles">' +
      sections
        .map(function (s) {
          return (
            '<a class="tile" href="' +
            s.href +
            '">' +
            '<span class="tile__icon" aria-hidden="true">' +
            s.icon +
            "</span>" +
            '<span class="tile__label">' +
            s.label +
            "</span>" +
            '<span class="tile__blurb">' +
            s.blurb +
            "</span>" +
            "</a>"
          );
        })
        .join("") +
      "</div>";
  }

  function renderFooter(cfg) {
    var mount = document.querySelector("[data-site-footer]");
    if (!mount) return;
    var linksHtml = (cfg.links || [])
      .map(function (l) {
        return '<a href="' + l.url + '">' + l.label + "</a>";
      })
      .join("");
    mount.innerHTML =
      '<div class="footer">' +
      '<p class="footer__note">' +
      cfg.footerNote +
      "</p>" +
      '<nav class="footer__links">' +
      linksHtml +
      "</nav>" +
      "</div>";
  }

  function renderBreadcrumbs(cfg) {
    var mount = document.getElementById("breadcrumbs");
    if (!mount) return;
    var here = currentFile();
    var section = (cfg.sections || []).find(function (s) {
      return s.href === here;
    });
    var label = section ? section.label : document.title;
    mount.innerHTML =
      '<a href="index.html">Home</a><span aria-hidden="true"> / </span><span>' +
      label +
      "</span>";
  }

  function init() {
    var cfg = window.SITE || {};
    renderHeader(cfg);
    renderHero(cfg);
    renderTiles(cfg);
    renderFooter(cfg);
    renderBreadcrumbs(cfg);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
