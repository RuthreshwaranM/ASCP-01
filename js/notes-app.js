/* ============================================================
   NOTES-APP.JS
   ------------------------------------------------------------
   Renders the Notes UI into <main id="app"> on notes.html, from
   window.NotesBank (built by data/notes.js). You shouldn't need
   to edit this file — edit data/notes.js instead.
   ============================================================ */
(function () {
  "use strict";

  var app = document.getElementById("app");
  if (!app) return;

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c
      );
    });
  }

  function renderSubjects() {
    var bank = window.NotesBank || { subjects: {}, order: [] };
    var ids = bank.order || Object.keys(bank.subjects);

    if (!ids.length) {
      app.innerHTML =
        '<div class="panel empty-state">' +
        "<h2>No subjects yet</h2>" +
        "<p>Add one in <code>data/notes.js</code>. See README.md.</p>" +
        "</div>";
      return;
    }

    var cardsHtml = ids
      .map(function (id) {
        var subject = bank.subjects[id];
        return (
          '<button class="subject-card" data-subject="' +
          escapeHtml(id) +
          '">' +
          '<span class="subject-card__label">' +
          escapeHtml(subject.label) +
          "</span>" +
          '<span class="subject-card__meta">' +
          subject.topics.length +
          " note" +
          (subject.topics.length === 1 ? "" : "s") +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    app.innerHTML =
      '<div class="panel">' +
      "<h2>Ground School Notes</h2>" +
      "<p>Pick a subject to see its notes.</p>" +
      '<div class="subject-grid">' +
      cardsHtml +
      "</div>" +
      "</div>";

    app.querySelectorAll("[data-subject]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderSubject(btn.getAttribute("data-subject"));
      });
    });
  }

  function renderSubject(id) {
    var subject = window.NotesBank.subjects[id];
    if (!subject) return renderSubjects();

    var topicsHtml = subject.topics
      .map(function (t) {
        return (
          '<div class="block"><h3>' + escapeHtml(t.title) + "</h3>" + t.html + "</div>"
        );
      })
      .join("");

    app.innerHTML =
      '<div class="panel">' +
      '<button class="link-back" data-back>&larr; Subjects</button>' +
      "<h2>" +
      escapeHtml(subject.label) +
      "</h2>" +
      (topicsHtml ||
        '<p>No notes in this subject yet. Add one in <code>data/notes.js</code>.</p>') +
      "</div>";

    app.querySelector("[data-back]").addEventListener("click", renderSubjects);
  }

  renderSubjects();
})();
