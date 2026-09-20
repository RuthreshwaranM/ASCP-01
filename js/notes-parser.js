/* ============================================================
   NOTES-PARSER.JS
   ------------------------------------------------------------
   Turns the plain-text note format described in data/notes.js
   into HTML, and exposes registerNotesSubject / registerNotesTopic
   for data/notes.js to call. You shouldn't need to edit this file
   — edit data/notes.js instead.

   Text format recognised inside a note:
     A line on its own                -> a normal paragraph
     Several lines in a row            -> joined into one paragraph
     A blank line                      -> starts a new paragraph
     "- some text"                     -> a bullet point
     "## A Heading"                    -> a small heading
     "[image: filename.png]"           -> a picture (file in /images)
   ============================================================ */
(function () {
  "use strict";

  var HEADING_LINE = /^\s*##\s+(.*)$/;
  var BULLET_LINE = /^\s*-\s+(.*)$/;
  var IMAGE_LINE = /^\s*\[\s*image\s*:\s*(.+?)\s*\]\s*$/i;

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] || c
      );
    });
  }

  function parseNoteText(rawText) {
    var lines = String(rawText || "").split(/\r?\n/);
    var html = "";
    var paragraph = [];
    var list = [];

    function flushParagraph() {
      if (!paragraph.length) return;
      html += "<p>" + escapeHtml(paragraph.join(" ")) + "</p>";
      paragraph = [];
    }
    function flushList() {
      if (!list.length) return;
      html +=
        "<ul>" +
        list.map(function (item) { return "<li>" + escapeHtml(item) + "</li>"; }).join("") +
        "</ul>";
      list = [];
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];

      if (!line.trim()) {
        flushParagraph();
        flushList();
        continue;
      }

      var h = HEADING_LINE.exec(line);
      if (h) {
        flushParagraph();
        flushList();
        html += "<p class=\"note-heading\"><strong>" + escapeHtml(h[1]) + "</strong></p>";
        continue;
      }

      var img = IMAGE_LINE.exec(line);
      if (img) {
        flushParagraph();
        flushList();
        html += '<img class="question__image" src="images/' + escapeHtml(img[1]) + '" alt="">';
        continue;
      }

      var b = BULLET_LINE.exec(line);
      if (b) {
        flushParagraph();
        list.push(b[1]);
        continue;
      }

      // Plain text line — continues the current paragraph.
      flushList();
      paragraph.push(line.trim());
    }
    flushParagraph();
    flushList();
    return html;
  }

  window.NotesBank = window.NotesBank || { subjects: {}, order: [] };

  window.registerNotesSubject = function (id, label) {
    var bank = window.NotesBank;
    if (!bank.subjects[id]) {
      bank.subjects[id] = { id: id, label: label, topics: [] };
      bank.order.push(id);
    } else {
      bank.subjects[id].label = label;
    }
  };

  window.registerNotesTopic = function (subjectId, title, text) {
    if (!window.NotesBank.subjects[subjectId]) {
      window.registerNotesSubject(subjectId, subjectId);
    }
    window.NotesBank.subjects[subjectId].topics.push({
      title: title,
      html: parseNoteText(text)
    });
  };

  window.NotesParser = { parseNoteText: parseNoteText };
})();
