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

  function letterFor(i) {
    return String.fromCharCode(97 + i); // 0->'a', 1->'b', ...
  }

  /* Builds the question set for a session: applies question-shuffle,
     trims to the requested count, and (optionally) shuffles each
     question's options — re-lettering them a/b/c/d in their new,
     on-screen order so every letter comparison downstream still
     just works. */
  function prepareQuestions(chapter, opts) {
    var list = opts.shuffleQ ? shuffle(chapter.questions) : chapter.questions.slice();
    list = list.slice(0, opts.count);
    return list.map(function (q) {
      var srcOptions = opts.shuffleOpt ? shuffle(q.options) : q.options.slice();
      return {
        number: q.number,
        stem: q.stem,
        images: q.images,
        explanation: q.explanation,
        needsAnswerKey: q.needsAnswerKey,
        options: srcOptions.map(function (o, i) {
          return { letter: letterFor(i), text: o.text, correct: o.correct };
        })
      };
    });
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

    var total = chapter.questions.length;
    var flagged = chapter.questions.filter(function (q) {
      return q.needsAnswerKey;
    }).length;

    var state = {
      mode: "practice",
      count: total,
      shuffleQ: true,
      shuffleOpt: false,
      timerType: "off",
      timerMinutes: Math.max(1, Math.round((total * SECONDS_PER_QUESTION) / 60)),
      timerSeconds: SECONDS_PER_QUESTION
    };

    function clampCount(n) {
      return Math.min(total, Math.max(1, n));
    }

    function render() {
      var timerDisabled = state.mode === "practice";

      var timerBody;
      if (timerDisabled) {
        timerBody =
          '<div class="setup-note">In Practice mode you get instant feedback after each answer, with an explanation where available.</div>';
      } else if (state.timerType === "total") {
        timerBody =
          '<label class="setup-label">Total minutes</label>' +
          '<div class="stepper">' +
          '<button type="button" class="stepper__btn" data-step-timer="-1">&minus;</button>' +
          '<div class="stepper__value">' + state.timerMinutes + "</div>" +
          '<button type="button" class="stepper__btn" data-step-timer="1">+</button>' +
          "</div>";
      } else if (state.timerType === "per") {
        timerBody =
          '<label class="setup-label">Seconds per question</label>' +
          '<div class="stepper">' +
          '<button type="button" class="stepper__btn" data-step-timer="-1">&minus;</button>' +
          '<div class="stepper__value">' + state.timerSeconds + "</div>" +
          '<button type="button" class="stepper__btn" data-step-timer="1">+</button>' +
          "</div>";
      } else {
        timerBody = '<div class="setup-note">No clock — answer at your own pace and review at the end.</div>';
      }

      app.innerHTML =
        '<div class="panel setup">' +
        '<button class="link-back" data-back>&larr; ' +
        escapeHtml(subject.label) +
        "</button>" +
        "<h2>Session setup</h2>" +
        "<p>" +
        total +
        " question" +
        (total === 1 ? "" : "s") +
        " available in this chapter." +
        (flagged
          ? ' <span class="flag">' + flagged + " without a marked answer</span> will be shown ungraded."
          : "") +
        "</p>" +
        '<div class="setup-grid">' +
        '<div class="setup-panel">' +
        '<h3 class="setup-panel__title"><span class="dot"></span>Mode</h3>' +
        '<div class="segmented" data-segment="mode">' +
        '<button type="button" class="segmented__btn' +
        (state.mode === "practice" ? " is-active" : "") +
        '" data-value="practice">Practice</button>' +
        '<button type="button" class="segmented__btn' +
        (state.mode === "test" ? " is-active" : "") +
        '" data-value="test">Test</button>' +
        "</div>" +
        '<label class="setup-label">Number of questions</label>' +
        '<div class="stepper">' +
        '<button type="button" class="stepper__btn" data-step="-1">&minus;</button>' +
        '<div class="stepper__value">' + state.count + "</div>" +
        '<button type="button" class="stepper__btn" data-step="1">+</button>' +
        "</div>" +
        '<div class="toggle-row">' +
        "<div><div class=\"toggle-row__label\">Shuffle questions</div><div class=\"toggle-row__desc\">Random order each attempt</div></div>" +
        '<button type="button" class="toggle' +
        (state.shuffleQ ? " is-on" : "") +
        '" data-toggle="shuffleQ" aria-pressed="' +
        state.shuffleQ +
        '"><span class="toggle__knob"></span></button>' +
        "</div>" +
        '<div class="toggle-row">' +
        "<div><div class=\"toggle-row__label\">Shuffle options</div><div class=\"toggle-row__desc\">Randomize A/B/C/D order</div></div>" +
        '<button type="button" class="toggle' +
        (state.shuffleOpt ? " is-on" : "") +
        '" data-toggle="shuffleOpt" aria-pressed="' +
        state.shuffleOpt +
        '"><span class="toggle__knob"></span></button>' +
        "</div>" +
        "</div>" +
        '<div class="setup-panel">' +
        '<h3 class="setup-panel__title"><span class="dot"></span>Timer</h3>' +
        '<div class="segmented' +
        (timerDisabled ? " is-disabled" : "") +
        '" data-segment="timer">' +
        '<button type="button" class="segmented__btn' +
        (state.timerType === "off" ? " is-active" : "") +
        '" data-value="off"' +
        (timerDisabled ? " disabled" : "") +
        ">Off</button>" +
        '<button type="button" class="segmented__btn' +
        (state.timerType === "total" ? " is-active" : "") +
        '" data-value="total"' +
        (timerDisabled ? " disabled" : "") +
        ">Total</button>" +
        '<button type="button" class="segmented__btn' +
        (state.timerType === "per" ? " is-active" : "") +
        '" data-value="per"' +
        (timerDisabled ? " disabled" : "") +
        ">Per question</button>" +
        "</div>" +
        timerBody +
        "</div>" +
        "</div>" +
        '<div class="quiz__controls">' +
        '<button class="btn" data-cancel>Cancel</button>' +
        '<button class="btn btn--primary" data-start>Start session</button>' +
        "</div>" +
        "</div>";

      app.querySelector("[data-back]").addEventListener("click", function () {
        renderChapterList(subjectId);
      });
      app.querySelector("[data-cancel]").addEventListener("click", function () {
        renderChapterList(subjectId);
      });

      app.querySelectorAll('[data-segment="mode"] .segmented__btn').forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.mode = btn.getAttribute("data-value");
          if (state.mode === "practice") state.timerType = "off";
          render();
        });
      });
      app.querySelectorAll('[data-segment="timer"] .segmented__btn').forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (timerDisabled) return;
          state.timerType = btn.getAttribute("data-value");
          render();
        });
      });
      app.querySelectorAll("[data-step]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.count = clampCount(state.count + parseInt(btn.getAttribute("data-step"), 10));
          render();
        });
      });
      app.querySelectorAll("[data-step-timer]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var d = parseInt(btn.getAttribute("data-step-timer"), 10);
          if (state.timerType === "total") {
            state.timerMinutes = Math.max(1, state.timerMinutes + d);
          } else if (state.timerType === "per") {
            state.timerSeconds = Math.max(10, state.timerSeconds + d * 5);
          }
          render();
        });
      });
      app.querySelectorAll("[data-toggle]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var key = btn.getAttribute("data-toggle");
          state[key] = !state[key];
          render();
        });
      });
      app.querySelector("[data-start]").addEventListener("click", function () {
        if (state.mode === "practice") {
          runPractice(subjectId, chapter, state);
        } else {
          runTest(subjectId, chapter, state);
        }
      });
    }

    render();
  }

  /* ---------------- Practice mode ---------------- */

  function runPractice(subjectId, chapter, opts) {
    var questions = prepareQuestions(chapter, opts);
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

  function runTest(subjectId, chapter, opts) {
    var questions = prepareQuestions(chapter, opts);
    var timerType = (opts && opts.timerType) || "off";
    var totalSeconds =
      timerType === "total"
        ? opts.timerMinutes * 60
        : timerType === "per"
        ? questions.length * opts.timerSeconds
        : 0;
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
        (timerType === "off"
          ? ""
          : ' &middot; Time left <strong data-time>' + fmtTime(remaining) + "</strong>") +
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
      " &middot; Test</h2>" +
      "<p>" +
      questions.length +
      " questions" +
      (timerType === "off"
        ? ". No timer — work at your own pace, review at the end."
        : ", " + fmtTime(totalSeconds) + " on the clock. The timer starts as soon as you press start.") +
      "</p>" +
      '<div class="quiz__controls">' +
      '<button class="btn" data-back>Back</button>' +
      '<button class="btn btn--primary" data-start>Start test</button>' +
      "</div>" +
      "</div>";
    app.querySelector("[data-back]").addEventListener("click", function () {
      renderModePicker(subjectId, chapter.id);
    });
    app.querySelector("[data-start]").addEventListener("click", function () {
      if (timerType !== "off") startTimer();
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
