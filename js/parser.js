/* ============================================================
   PARSER.JS
   ------------------------------------------------------------
   Turns the plain-text question format described in README.md
   into structured question objects, and exposes registerSubject
   / registerChapterText for the data/*.js files to call.

   Question text format:
     1. Question text?
     a. wrong
     *b. correct        <- the star marks the answer
     c. wrong
     d. wrong
     Explanation: optional, shown in Practice mode.

   2, 3 or 4 options all work. A line that is exactly
   [image: file.png] on its own adds a diagram (file lives in
   /images).
   ============================================================ */
(function () {
  "use strict";

  var QUESTION_START = /^\s*(\d+)\s*\.\s*(.*)$/;
  var OPTION_START = /^\s*(\*)?\s*([a-dA-D])\s*\.\s*(.*)$/;
  var EXPLANATION_START = /^\s*Explanation\s*:\s*(.*)$/i;
  var IMAGE_LINE = /^\s*\[\s*image\s*:\s*(.+?)\s*\]\s*$/i;

  function parseChapterText(rawText) {
    var lines = String(rawText || "").split(/\r?\n/);
    var questions = [];
    var current = null;

    function pushCurrent() {
      if (!current) return;
      // Trim collected strings.
      current.stem = current.stem.trim();
      current.explanation = current.explanation.trim();
      current.options.forEach(function (opt) {
        opt.text = opt.text.trim();
      });
      var correctCount = current.options.filter(function (o) {
        return o.correct;
      }).length;
      current.needsAnswerKey = correctCount !== 1;
      questions.push(current);
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (!line || !line.trim()) continue;

      var qMatch = QUESTION_START.exec(line);
      if (qMatch) {
        pushCurrent();
        current = {
          number: parseInt(qMatch[1], 10),
          stem: qMatch[2] || "",
          options: [],
          explanation: "",
          images: [],
          needsAnswerKey: false
        };
        continue;
      }

      if (!current) continue; // stray text before the first question — ignore

      var optMatch = OPTION_START.exec(line);
      if (optMatch) {
        current.options.push({
          letter: optMatch[2].toLowerCase(),
          text: optMatch[3] || "",
          correct: !!optMatch[1]
        });
        continue;
      }

      var imgMatch = IMAGE_LINE.exec(line);
      if (imgMatch) {
        current.images.push(imgMatch[1]);
        continue;
      }

      var explMatch = EXPLANATION_START.exec(line);
      if (explMatch) {
        current.explanation = current.explanation
          ? current.explanation + " " + explMatch[1]
          : explMatch[1];
        continue;
      }

      // Continuation line — a question, option or explanation that
      // wrapped onto more than one source line.
      if (current.options.length === 0) {
        current.stem += " " + line.trim();
      } else if (current.explanation) {
        current.explanation += " " + line.trim();
      } else {
        var last = current.options[current.options.length - 1];
        last.text += " " + line.trim();
      }
    }
    pushCurrent();
    return questions;
  }

  window.QuestionBank = window.QuestionBank || { subjects: {}, order: [] };

  window.registerSubject = function (id, label) {
    var bank = window.QuestionBank;
    if (!bank.subjects[id]) {
      bank.subjects[id] = { id: id, label: label, chapters: [] };
      bank.order.push(id);
    } else {
      bank.subjects[id].label = label;
    }
  };

  window.registerChapterText = function (subjectId, chapterId, chapterLabel, text) {
    if (!window.QuestionBank.subjects[subjectId]) {
      window.registerSubject(subjectId, subjectId);
    }
    var subject = window.QuestionBank.subjects[subjectId];
    subject.chapters.push({
      id: chapterId,
      label: chapterLabel,
      questions: parseChapterText(text)
    });
  };

  window.QuestionBankParser = { parseChapterText: parseChapterText };
})();
