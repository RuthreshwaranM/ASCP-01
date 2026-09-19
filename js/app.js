/* ============================================================
   APP.JS
   ------------------------------------------------------------
   Renders the question-bank UI into <main id="app"> on
   bank.html, using the data parser.js built from window.QuestionBank
   (populated by data/*.js files loaded before this script).
   ============================================================ */
(function () {
  "use strict";

  var app = document.getElementById("app");
  if (!app) return;

  var SECONDS_PER_QUESTION = 60; // timed-test default

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
          c
        ] || c
      );
    });
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function letterUp(l) {
    return l.toUpperCase();
  }

  function questionMedia(q) {
    if (!q.images.length) return "";
    return q.images
      .map(function (file) {
        return (
          '<img class="question__image" src="images/' +
          escapeHtml(file) +
          '" alt="Diagram for question ' +
          q.number +
          '">'
        );
      })
      .join("");
  }

  /* ---------------- Top-level navigation ---------------- */

  function renderSubjectList() {
    var bank = window.QuestionBank || { subjects: {}, order: [] };
    var subjectIds = bank.order || Object.keys(bank.subjects);

    if (!subjectIds.length) {
      app.innerHTML =
        '<div class="panel empty-state">' +
        "<h2>No subjects yet</h2>" +
        "<p>Add a subject in a <code>data/*.js</code> file and list it in <code>bank.html</code>. See README.md.</p>" +
        "</div>";
      return;
    }

    var cardsHtml = subjectIds
      .map(function (id) {
        var subject = bank.subjects[id];
        var totalQuestions = subject.chapters.reduce(function (sum, ch) {
          return sum + ch.questions.length;
        }, 0);
        return (
          '<button class="subject-card" data-subject="' +
          escapeHtml(id) +
          '">' +
          '<span class="subject-card__label">' +
          escapeHtml(subject.label) +
          "</span>" +
          '<span class="subject-card__meta">' +
          subject.chapters.length +
          " chapter" +
          (subject.chapters.length === 1 ? "" : "s") +
          " &middot; " +
          totalQuestions +
          " questions</span>" +
          "</button>"
        );
      })
      .join("");

    app.innerHTML =
      '<div class="panel">' +
      "<h2>Choose a subject</h2>" +
      '<div class="subject-grid">' +
      cardsHtml +
      "</div>" +
      "</div>";

    app.querySelectorAll("[data-subject]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderChapterList(btn.getAttribute("data-subject"));
      });
    });
  }

  function renderChapterList(subjectId) {
    var subject = window.QuestionBank.subjects[subjectId];
    if (!subject) return renderSubjectList();

    var rowsHtml = subject.chapters
      .map(function (ch) {
        var flagged = ch.questions.filter(function (q) {
          return q.needsAnswerKey;
        }).length;
        return (
          '<button class="chapter-row" data-chapter="' +
          escapeHtml(ch.id) +
          '">' +
          '<span class="chapter-row__label">' +
          escapeHtml(ch.label) +
          "</span>" +
          '<span class="chapter-row__meta">' +
          ch.questions.length +
          " questions" +
          (flagged
            ? ' &middot; <span class="flag">' + flagged + " need an answer key</span>"
            : "") +
          "</span>" +
          "</button>"
        );
      })
      .join("");

    app.innerHTML =
      '<div class="panel">' +
      '<button class="link-back" data-back>&larr; Subjects</button>' +
      "<h2>" +
      escapeHtml(subject.label) +
      "</h2>" +
      '<div class="chapter-list">' +
      rowsHtml +
      "</div>" +
      "</div>";

    app.querySelector("[data-back]").addEventListener("click", renderSubjectList);
    app.querySelectorAll("[data-chapter]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        renderModePicker(subjectId, btn.getAttribute("data-chapter"));
      });
    });
  }

  function renderModePicker(subjectId, chapterId) {
    var subject = window.QuestionBank.subjects[subjectId];
    var chapter = subject.chapters.find(function (c) {
      return c.id === chapterId;
    });
    if (!chapter) return renderChapterList(subjectId);

    var graded = chapter.questions.filter(function (q) {
      return !q.needsAnswerKey;
    }).length;
    var flagged = chapter.questions.length - graded;

    app.innerHTML =
      '<div class="panel">' +
      '<button class="link-back" data-back>&larr; ' +
      escapeHtml(subject.label) +
      "</button>" +
      "<h2>" +
      escapeHtml(chapter.label) +
      "</h2>" +
      "<p class=\"mode-picker__summary\">" +
      chapter.questions.length +
      " questions" +
      (flagged
        ? ", <span class=\"flag\">" + flagged + " without a marked answer</span> (shown ungraded)"
        : "") +
      "</p>" +
      '<div class="mode-grid">' +
      '<button class="mode-card" data-mode="practice">' +
      "<span class=\"mode-card__title\">Practice</span>" +
      '<span class="mode-card__desc">One question at a time, with the answer and explanation shown right after you pick.</span>' +
      "</button>" +
      '<button class="mode-card" data-mode="test">' +
      "<span class=\"mode-card__title\">Timed test</span>" +
      '<span class="mode-card__desc">All questions, a running clock, no feedback until you submit.</span>' +
      "</button>" +
      "</div>" +
      "</div>";

    app.querySelector("[data-back]").addEventListener("click", function () {
      renderChapterList(subjectId);
    });
    app.querySelectorAll("[data-mode]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-mode");
        if (mode === "practice") {
          runPractice(subjectId, chapter);
        } else {
          runTest(subjectId, chapter);
        }
      });
    });
  }

  /* ---------------- Practice mode ---------------- */

  function runPractice(subjectId, chapter) {
    var questions = shuffle(chapter.questions);
    var index = 0;
    var correctCount = 0;
    var gradedSeen = 0;
    var answered = null; // selected letter for current question

    function renderQuestion() {
      var q = questions[index];
      answered = null;
      var progressPct = Math.round((index / questions.length) * 100);

      var optionsHtml = q.options
        .map(function (opt) {
          return (
            '<button class="option" data-letter="' +
            opt.letter +
            '">' +
            '<span class="option__letter">' +
            letterUp(opt.letter) +
            "</span>" +
            '<span class="option__text">' +
            escapeHtml(opt.text) +
            "</span>" +
            "</button>"
          );
        })
        .join("");

      app.innerHTML =
        '<div class="panel quiz">' +
        '<button class="link-back" data-quit>&larr; Exit practice</button>' +
        '<div class="progress"><div class="progress__bar" style="width:' +
        progressPct +
        '%"></div></div>' +
        '<p class="quiz__meta">Question ' +
        (index + 1) +
        " of " +
        questions.length +
        ' &middot; Score ' +
        correctCount +
        "/" +
        gradedSeen +
        "</p>" +
        '<div class="question">' +
        '<p class="question__stem">' +
        q.number +
        ". " +
        escapeHtml(q.stem) +
        "</p>" +
        questionMedia(q) +
        '<div class="options">' +
        optionsHtml +
        "</div>" +
        '<div class="feedback" data-feedback hidden></div>' +
        "</div>" +
        '<div class="quiz__controls">' +
        '<button class="btn btn--primary" data-next disabled>' +
        (index === questions.length - 1 ? "Finish" : "Next question") +
        "</button>" +
        "</div>" +
        "</div>";

      app.querySelector("[data-quit]").addEventListener("click", function () {
        renderModePicker(subjectId, chapter.id);
      });

      var nextBtn = app.querySelector("[data-next]");
      nextBtn.addEventListener("click", function () {
        if (index < questions.length - 1) {
          index++;
          renderQuestion();
        } else {
          renderResults(subjectId, chapter, correctCount, gradedSeen, "practice");
        }
      });

      app.querySelectorAll(".option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (answered) return; // already answered this question
          answered = btn.getAttribute("data-letter");
          revealAnswer(q, answered);
          nextBtn.removeAttribute("disabled");
        });
      });
    }

    function revealAnswer(q, chosenLetter) {
      var feedback = app.querySelector("[data-feedback]");
      var hasKey = !q.needsAnswerKey;
      var correctOpt = q.options.find(function (o) {
        return o.correct;
      });

      app.querySelectorAll(".option").forEach(function (btn) {
        var letter = btn.getAttribute("data-letter");
        btn.disabled = true;
        if (hasKey && correctOpt && letter === correctOpt.letter) {
          btn.classList.add("is-correct");
        }
        if (letter === chosenLetter && (!hasKey || letter !== correctOpt.letter)) {
          btn.classList.add("is-chosen");
        }
      });

      if (!hasKey) {
        feedback.innerHTML =
          '<p class="feedback__flag">This question has no answer marked with * in the data file yet, ' +
          "so it isn't scored. Open data/pa28-archer.js, add a * before the correct letter, refresh.</p>";
      } else {
        var isRight = chosenLetter === correctOpt.letter;
        gradedSeen++;
        if (isRight) correctCount++;
        feedback.innerHTML =
          '<p class="feedback__verdict ' +
          (isRight ? "is-right" : "is-wrong") +
          '">' +
          (isRight ? "Correct." : "Not quite — correct answer is " + letterUp(correctOpt.letter) + ".") +
          "</p>" +
          (q.explanation
            ? '<p class="feedback__explanation">' + escapeHtml(q.explanation) + "</p>"
            : "");
      }
      feedback.removeAttribute("hidden");
    }

    renderQuestion();
  }

  /* ---------------- Timed test mode ---------------- */

  function runTest(subjectId, chapter) {
    var questions = shuffle(chapter.questions);
    var totalSeconds = questions.length * SECONDS_PER_QUESTION;
    var remaining = totalSeconds;
    var index = 0;
    var picks = {}; // number -> letter
    var timerId = null;

    function fmtTime(s) {
      var m = Math.floor(s / 60);
      var sec = s % 60;
      return m + ":" + (sec < 10 ? "0" : "") + sec;
    }

    function stopTimer() {
      if (timerId) window.clearInterval(timerId);
      timerId = null;
    }

    function startTimer() {
      timerId = window.setInterval(function () {
        remaining--;
        var timeEl = app.querySelector("[data-time]");
        if (timeEl) timeEl.textContent = fmtTime(Math.max(remaining, 0));
        if (remaining <= 0) {
          stopTimer();
          finish();
        }
      }, 1000);
    }

    function renderQuestion() {
      var q = questions[index];
      var progressPct = Math.round((index / questions.length) * 100);
      var picked = picks[q.number];

      var optionsHtml = q.options
        .map(function (opt) {
          return (
            '<button class="option' +
            (picked === opt.letter ? " is-picked" : "") +
            '" data-letter="' +
            opt.letter +
            '">' +
            '<span class="option__letter">' +
            letterUp(opt.letter) +
            "</span>" +
            '<span class="option__text">' +
            escapeHtml(opt.text) +
            "</span>" +
            "</button>"
          );
        })
        .join("");

      app.innerHTML =
        '<div class="panel quiz">' +
        '<button class="link-back" data-quit>&larr; Exit test</button>' +
        '<div class="progress"><div class="progress__bar" style="width:' +
        progressPct +
        '%"></div></div>' +
        '<p class="quiz__meta">Question ' +
        (index + 1) +
        " of " +
        questions.length +
        ' &middot; Time left <strong data-time>' +
        fmtTime(remaining) +
        "</strong></p>" +
        '<div class="question">' +
        '<p class="question__stem">' +
        q.number +
        ". " +
        escapeHtml(q.stem) +
        "</p>" +
        questionMedia(q) +
        '<div class="options">' +
        optionsHtml +
        "</div>" +
        "</div>" +
        '<div class="quiz__controls quiz__controls--split">' +
        '<button class="btn" data-prev' +
        (index === 0 ? " disabled" : "") +
        ">Back</button>" +
        '<button class="btn btn--primary" data-next>' +
        (index === questions.length - 1 ? "Submit" : "Next") +
        "</button>" +
        "</div>" +
        "</div>";

      app.querySelector("[data-quit]").addEventListener("click", function () {
        stopTimer();
        renderModePicker(subjectId, chapter.id);
      });
      app.querySelectorAll(".option").forEach(function (btn) {
        btn.addEventListener("click", function () {
          picks[q.number] = btn.getAttribute("data-letter");
          renderQuestion();
        });
      });
      app.querySelector("[data-prev]").addEventListener("click", function () {
        if (index > 0) {
          index--;
          renderQuestion();
        }
      });
      app.querySelector("[data-next]").addEventListener("click", function () {
        if (index < questions.length - 1) {
          index++;
          renderQuestion();
        } else {
          finish();
        }
      });
    }

    function finish() {
      stopTimer();
      var correctCount = 0;
      var gradedSeen = 0;
      questions.forEach(function (q) {
        if (q.needsAnswerKey) return;
        gradedSeen++;
        var correctOpt = q.options.find(function (o) {
          return o.correct;
        });
        if (picks[q.number] === correctOpt.letter) correctCount++;
      });
      renderResults(subjectId, chapter, correctCount, gradedSeen, "test", questions, picks);
    }

    // Confirmation screen before the clock starts.
    app.innerHTML =
      '<div class="panel">' +
      "<h2>" +
      escapeHtml(chapter.label) +
      " &middot; Timed test</h2>" +
      "<p>" +
      questions.length +
      " questions, " +
      fmtTime(totalSeconds) +
      " on the clock. The timer starts as soon as you press start.</p>" +
      '<div class="quiz__controls">' +
      '<button class="btn" data-back>Back</button>' +
      '<button class="btn btn--primary" data-start>Start test</button>' +
      "</div>" +
      "</div>";
    app.querySelector("[data-back]").addEventListener("click", function () {
      renderModePicker(subjectId, chapter.id);
    });
    app.querySelector("[data-start]").addEventListener("click", function () {
      startTimer();
      renderQuestion();
    });
  }

  /* ---------------- Results ---------------- */

  function renderResults(subjectId, chapter, correctCount, gradedSeen, mode, questions, picks) {
    var pct = gradedSeen ? Math.round((correctCount / gradedSeen) * 100) : 0;

    var reviewHtml = "";
    if (mode === "test" && questions) {
      reviewHtml =
        '<div class="review">' +
        questions
          .map(function (q) {
            var correctOpt = q.options.find(function (o) {
              return o.correct;
            });
            var picked = picks[q.number];
            var status = q.needsAnswerKey
              ? "ungraded"
              : picked === correctOpt.letter
              ? "right"
              : "wrong";
            return (
              '<div class="review-row review-row--' +
              status +
              '">' +
              '<p class="review-row__stem">' +
              q.number +
              ". " +
              escapeHtml(q.stem) +
              "</p>" +
              '<p class="review-row__answer">' +
              (q.needsAnswerKey
                ? "No answer key set for this question."
                : "Your answer: " +
                  (picked ? letterUp(picked) : "(skipped)") +
                  " &middot; Correct: " +
                  letterUp(correctOpt.letter)) +
              "</p>" +
              (q.explanation && !q.needsAnswerKey
                ? '<p class="review-row__explanation">' + escapeHtml(q.explanation) + "</p>"
                : "") +
              "</div>"
            );
          })
          .join("") +
        "</div>";
    }

    app.innerHTML =
      '<div class="panel results">' +
      "<h2>" +
      (mode === "practice" ? "Practice complete" : "Test submitted") +
      "</h2>" +
      '<p class="results__score">' +
      correctCount +
      "/" +
      gradedSeen +
      ' <span class="results__pct">(' +
      pct +
      "%)</span></p>" +
      (gradedSeen < (questions ? questions.length : gradedSeen)
        ? '<p class="flag">Some questions in this chapter have no marked answer yet and were left out of the score.</p>'
        : "") +
      '<div class="quiz__controls">' +
      '<button class="btn" data-chapters>Choose another chapter</button>' +
      '<button class="btn btn--primary" data-retry>Try again</button>' +
      "</div>" +
      reviewHtml +
      "</div>";

    app.querySelector("[data-chapters]").addEventListener("click", function () {
      renderChapterList(subjectId);
    });
    app.querySelector("[data-retry]").addEventListener("click", function () {
      renderModePicker(subjectId, chapter.id);
    });
  }

  renderSubjectList();
})();
