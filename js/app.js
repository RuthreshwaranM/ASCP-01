/* ============================================================
   APP.JS — the question-bank UI. Reads window.QuestionBank
   (built by parser.js + the /data files) and renders into #app.
   State lives in the URL hash so back/forward and refresh work.
   ============================================================ */
(function(){

  var SECONDS_PER_QUESTION = 60; // timed-test budget

  function el(tag, attrs, children){
    var e = document.createElement(tag);
    attrs = attrs || {};
    for(var k in attrs){
      if(k === 'class') e.className = attrs[k];
      else if(k === 'html') e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function(c){
      if(c == null) return;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return e;
  }

  function bank(){ return window.QuestionBank || { subjects: [] }; }

  /* ---------------- routing ---------------- */
  function parseHash(){
    var raw = location.hash.replace(/^#/, '');
    var params = new URLSearchParams(raw);
    return {
      subject: params.get('subject'),
      chapter: params.get('chapter'),
      mode: params.get('mode')
    };
  }
  function goTo(state){
    var params = new URLSearchParams();
    if(state.subject) params.set('subject', state.subject);
    if(state.chapter) params.set('chapter', state.chapter);
    if(state.mode) params.set('mode', state.mode);
    var qs = params.toString();
    location.hash = qs ? '#' + qs : '#';
  }

  /* ---------------- breadcrumbs ---------------- */
  function renderBreadcrumb(steps){
    var host = document.getElementById('breadcrumbs');
    if(!host) return;
    host.innerHTML = '';
    steps.forEach(function(step, i){
      if(i > 0) host.appendChild(el('span', {class:'crumb-sep'}, ['/']));
      if(step.state){
        var a = el('a', {href:'#'}, [step.label]);
        a.addEventListener('click', function(ev){ ev.preventDefault(); goTo(step.state); });
        host.appendChild(a);
      } else {
        host.appendChild(el('span', {class:'crumb-current'}, [step.label]));
      }
    });
  }

  /* ---------------- pickers ---------------- */
  function renderSubjectList(app){
    app.innerHTML = '';
    app.appendChild(el('h1', {class:'bank-heading'}, ['Question Bank']));
    var subjects = bank().subjects;
    if(!subjects.length){
      app.appendChild(el('div', {class:'empty-state'}, [
        'No question files are loaded yet. Add one under /data and list it with a <script> tag in bank.html.'
      ]));
      renderBreadcrumb([{label:'Question Bank'}]);
      return;
    }
    app.appendChild(el('p', {class:'bank-subheading'}, ['Pick a subject to start practicing.']));
    var grid = el('div', {class:'grid'});
    subjects.forEach(function(s){
      var qCount = s.chapters.reduce(function(n,c){ return n + c.questions.length; }, 0);
      var card = el('button', {class:'pick-card', type:'button'}, [
        el('h3', null, [s.label]),
        el('p', null, [s.chapters.length + ' chapter' + (s.chapters.length===1?'':'s')]),
        el('span', {class:'meta'}, [qCount + ' questions'])
      ]);
      card.addEventListener('click', function(){ goTo({subject:s.id}); });
      grid.appendChild(card);
    });
    app.appendChild(grid);
    renderBreadcrumb([{label:'Question Bank'}]);
  }

  function renderChapterList(app, subject){
    app.innerHTML = '';
    app.appendChild(el('h1', {class:'bank-heading'}, [subject.label]));
    app.appendChild(el('p', {class:'bank-subheading'}, ['Pick a chapter.']));
    var grid = el('div', {class:'grid'});
    subject.chapters.forEach(function(c){
      var card = el('button', {class:'pick-card', type:'button'}, [
        el('h3', null, [c.label]),
        el('span', {class:'meta'}, [c.questions.length + ' questions'])
      ]);
      card.addEventListener('click', function(){ goTo({subject:subject.id, chapter:c.id}); });
      grid.appendChild(card);
    });
    app.appendChild(grid);
    renderBreadcrumb([
      {label:'Question Bank', state:{}},
      {label:subject.label}
    ]);
  }

  function renderModeSelect(app, subject, chapter){
    app.innerHTML = '';
    app.appendChild(el('h1', {class:'bank-heading'}, [chapter.label]));
    app.appendChild(el('p', {class:'bank-subheading'}, [
      chapter.questions.length + ' questions. Choose how you want to run them.'
    ]));
    var grid = el('div', {class:'grid mode-grid'});

    var practice = el('button', {class:'pick-card mode-card', type:'button'}, [
      el('div', {class:'mode-title'}, ['Practice Mode', el('span', {class:'mode-badge'}, ['self-paced'])]),
      el('p', null, ['One question at a time, with the answer and explanation shown right after you pick.'])
    ]);
    practice.addEventListener('click', function(){ goTo({subject:subject.id, chapter:chapter.id, mode:'practice'}); });

    var test = el('button', {class:'pick-card mode-card', type:'button'}, [
      el('div', {class:'mode-title'}, ['Timed Test', el('span', {class:'mode-badge'}, ['exam sim'])]),
      el('p', null, ['All questions on one page, a countdown timer, and a score at the end.'])
    ]);
    test.addEventListener('click', function(){ goTo({subject:subject.id, chapter:chapter.id, mode:'test'}); });

    grid.appendChild(practice);
    grid.appendChild(test);
    app.appendChild(grid);

    renderBreadcrumb([
      {label:'Question Bank', state:{}},
      {label:subject.label, state:{subject:subject.id}},
      {label:chapter.label}
    ]);
  }

  /* ---------------- shared option rendering ---------------- */
  function optionsList(question, onPick, disabled, revealed){
    var list = el('ul', {class:'q-options'});
    question.options.forEach(function(opt){
      var classes = ['q-option'];
      if(revealed){
        if(opt.letter === question.correct) classes.push('is-correct');
        else if(revealed.picked === opt.letter) classes.push('is-wrong');
      } else if(revealed === undefined && disabled === false){
        // not answered yet, nothing to highlight
      }
      var btn = el('button', {
        class: classes.join(' '),
        type: 'button'
      }, [
        el('span', {class:'opt-letter'}, [opt.letter.toUpperCase()]),
        el('span', null, [opt.text])
      ]);
      if(disabled) btn.disabled = true;
      btn.addEventListener('click', function(){ onPick(opt.letter); });
      list.appendChild(btn);
    });
    return list;
  }

  function questionCard(question, index, extra){
    var card = el('div', {class:'q-card'});
    card.appendChild(el('span', {class:'q-number'}, ['Question ' + (index+1)]));
    card.appendChild(el('p', {class:'q-text'}, [question.text]));
    if(question.image){
      card.appendChild(el('img', {class:'q-image', src:'images/' + question.image, alt:''}));
    }
    return card;
  }

  /* ---------------- practice mode ---------------- */
  function renderPractice(app, subject, chapter){
    var questions = chapter.questions;
    var idx = 0;
    var score = 0;
    var answeredCount = 0;

    function draw(){
      app.innerHTML = '';
      var q = questions[idx];

      var topbar = el('div', {class:'quiz-topbar'});
      var track = el('div', {class:'progress-track'});
      track.appendChild(el('div', {class:'progress-fill', style:'width:' + Math.round(((idx)/questions.length)*100) + '%'}));
      topbar.appendChild(track);
      topbar.appendChild(el('span', {class:'progress-label'}, [(idx+1) + ' / ' + questions.length]));
      app.appendChild(topbar);

      var card = questionCard(q, idx);
      var picked = null;
      var feedbackHost = el('div');

      var list = optionsList(q, function(letter){
        if(picked) return;
        picked = letter;
        answeredCount++;
        var isCorrect = q.correct && letter === q.correct;
        if(isCorrect) score++;

        Array.prototype.forEach.call(list.children, function(btn, i){
          btn.disabled = true;
          var optLetter = q.options[i].letter;
          if(q.correct){
            if(optLetter === q.correct) btn.classList.add('is-correct');
            else if(optLetter === letter) btn.classList.add('is-wrong');
          } else if(optLetter === letter){
            btn.classList.add('is-selected');
          }
        });

        feedbackHost.innerHTML = '';
        if(!q.correct){
          feedbackHost.appendChild(el('div', {class:'q-feedback no-key'}, [
            'No answer key set for this question yet.'
          ]));
        } else {
          var fb = el('div', {class:'q-feedback ' + (isCorrect ? 'is-correct' : 'is-wrong')}, [
            isCorrect ? 'Correct.' : 'Not quite — the correct answer is ' + q.correct.toUpperCase() + '.'
          ]);
          if(q.explanation){
            fb.appendChild(el('p', {class:'q-explain'}, [q.explanation]));
          }
          feedbackHost.appendChild(fb);
        }
        nextBtn.disabled = false;
      }, false);

      card.appendChild(list);
      card.appendChild(feedbackHost);
      app.appendChild(card);

      var controls = el('div', {class:'quiz-controls'});
      var exitBtn = el('button', {class:'btn btn-ghost', type:'button'}, ['Exit']);
      exitBtn.addEventListener('click', function(){ goTo({subject:subject.id, chapter:chapter.id}); });

      var nextBtn = el('button', {class:'btn btn-primary', type:'button'}, [idx+1 === questions.length ? 'Finish' : 'Next']);
      nextBtn.disabled = true;
      nextBtn.addEventListener('click', function(){
        if(idx + 1 < questions.length){ idx++; draw(); }
        else { drawResults(); }
      });

      controls.appendChild(exitBtn);
      controls.appendChild(nextBtn);
      app.appendChild(controls);

      renderBreadcrumb([
        {label:'Question Bank', state:{}},
        {label:subject.label, state:{subject:subject.id}},
        {label:chapter.label, state:{subject:subject.id, chapter:chapter.id}},
        {label:'Practice'}
      ]);
    }

    function drawResults(){
      app.innerHTML = '';
      var keyed = questions.filter(function(q){ return q.correct; }).length;
      var res = el('div', {class:'results'});
      res.appendChild(el('div', {class:'results-score'}, [score + ' / ' + (keyed || questions.length)]));
      res.appendChild(el('p', {class:'results-sub'}, ['Questions answered correctly, out of those with an answer key set.']));
      if(keyed < questions.length){
        res.appendChild(el('div', {class:'results-note'}, [
          (questions.length - keyed) + ' question(s) in this chapter have no answer marked yet, so they weren\u2019t scored.'
        ]));
      }
      var again = el('button', {class:'btn btn-primary', type:'button'}, ['Practice again']);
      again.addEventListener('click', function(){ idx = 0; score = 0; answeredCount = 0; draw(); });
      var back = el('button', {class:'btn btn-ghost', type:'button'}, ['Back to chapter']);
      back.addEventListener('click', function(){ goTo({subject:subject.id, chapter:chapter.id}); });
      var controls = el('div', {class:'quiz-controls'});
      controls.appendChild(back);
      controls.appendChild(again);
      res.appendChild(controls);
      app.appendChild(res);

      renderBreadcrumb([
        {label:'Question Bank', state:{}},
        {label:subject.label, state:{subject:subject.id}},
        {label:chapter.label, state:{subject:subject.id, chapter:chapter.id}},
        {label:'Results'}
      ]);
    }

    draw();
  }

  /* ---------------- timed test mode ---------------- */
  function renderTest(app, subject, chapter){
    var questions = chapter.questions;
    var answers = {}; // index -> letter
    var totalSeconds = questions.length * SECONDS_PER_QUESTION;
    var remaining = totalSeconds;
    var timerId = null;
    var submitted = false;

    function formatTime(s){
      var m = Math.floor(s / 60);
      var sec = s % 60;
      return m + ':' + (sec < 10 ? '0' : '') + sec;
    }

    function draw(){
      app.innerHTML = '';

      var topbar = el('div', {class:'quiz-topbar'});
      var answeredN = Object.keys(answers).length;
      var track = el('div', {class:'progress-track'});
      track.appendChild(el('div', {class:'progress-fill', style:'width:' + Math.round((answeredN/questions.length)*100) + '%'}));
      topbar.appendChild(track);
      topbar.appendChild(el('span', {class:'progress-label'}, [answeredN + ' / ' + questions.length + ' answered']));
      var timerEl = el('span', {class:'timer'}, [formatTime(remaining)]);
      topbar.appendChild(timerEl);
      app.appendChild(topbar);

      var form = el('div', {class:'test-form'});
      questions.forEach(function(q, i){
        var card = questionCard(q, i);
        var list = optionsList(q, function(letter){
          answers[i] = letter;
          Array.prototype.forEach.call(list.children, function(btn, bi){
            btn.classList.toggle('is-selected', q.options[bi].letter === letter);
          });
          topbar.querySelector('.progress-label').textContent = Object.keys(answers).length + ' / ' + questions.length + ' answered';
          topbar.querySelector('.progress-fill').style.width = Math.round((Object.keys(answers).length/questions.length)*100) + '%';
        }, false);
        if(answers[i] != null){
          Array.prototype.forEach.call(list.children, function(btn, bi){
            btn.classList.toggle('is-selected', q.options[bi].letter === answers[i]);
          });
        }
        card.appendChild(list);
        form.appendChild(card);
      });
      app.appendChild(form);

      var controls = el('div', {class:'quiz-controls'});
      var exitBtn = el('button', {class:'btn btn-ghost', type:'button'}, ['Exit']);
      exitBtn.addEventListener('click', function(){ stopTimer(); goTo({subject:subject.id, chapter:chapter.id}); });
      var submitBtn = el('button', {class:'btn btn-primary', type:'button'}, ['Submit test']);
      submitBtn.addEventListener('click', function(){ finish(); });
      controls.appendChild(exitBtn);
      controls.appendChild(submitBtn);
      app.appendChild(controls);

      renderBreadcrumb([
        {label:'Question Bank', state:{}},
        {label:subject.label, state:{subject:subject.id}},
        {label:chapter.label, state:{subject:subject.id, chapter:chapter.id}},
        {label:'Timed Test'}
      ]);

      startTimer(timerEl);
    }

    function startTimer(timerEl){
      stopTimer();
      timerId = setInterval(function(){
        remaining--;
        if(timerEl && timerEl.isConnected){
          timerEl.textContent = formatTime(Math.max(remaining,0));
          timerEl.classList.toggle('is-low', remaining <= 60);
        }
        if(remaining <= 0){ finish(); }
      }, 1000);
    }
    function stopTimer(){ if(timerId){ clearInterval(timerId); timerId = null; } }

    function finish(){
      if(submitted) return;
      submitted = true;
      stopTimer();
      app.innerHTML = '';

      var keyed = 0, correct = 0;
      questions.forEach(function(q, i){
        if(q.correct){
          keyed++;
          if(answers[i] === q.correct) correct++;
        }
      });

      var res = el('div', {class:'results'});
      res.appendChild(el('div', {class:'results-score'}, [correct + ' / ' + (keyed || questions.length)]));
      res.appendChild(el('p', {class:'results-sub'}, ['Scored out of questions with an answer key set.']));
      if(keyed < questions.length){
        res.appendChild(el('div', {class:'results-note'}, [
          (questions.length - keyed) + ' question(s) have no answer marked yet, so they weren\u2019t scored.'
        ]));
      }

      questions.forEach(function(q, i){
        var picked = answers[i];
        var status = !q.correct ? 'is-unkeyed' : (picked === q.correct ? 'is-correct' : 'is-wrong');
        var item = el('div', {class:'review-item ' + status});
        item.appendChild(el('p', {class:'review-q'}, ['Q' + (i+1) + '. ' + q.text]));
        var yourLetter = picked ? picked.toUpperCase() : '\u2014';
        item.appendChild(el('p', {class:'review-line'}, ['Your answer: ', el('b', null, [yourLetter])]));
        if(q.correct){
          item.appendChild(el('p', {class:'review-line'}, ['Correct answer: ', el('b', null, [q.correct.toUpperCase()])]));
        } else {
          item.appendChild(el('p', {class:'review-line'}, ['No answer key set for this question yet.']));
        }
        res.appendChild(item);
      });

      var controls = el('div', {class:'quiz-controls'});
      var back = el('button', {class:'btn btn-ghost', type:'button'}, ['Back to chapter']);
      back.addEventListener('click', function(){ goTo({subject:subject.id, chapter:chapter.id}); });
      var retry = el('button', {class:'btn btn-primary', type:'button'}, ['Retake test']);
      retry.addEventListener('click', function(){
        answers = {}; remaining = totalSeconds; submitted = false; draw();
      });
      controls.appendChild(back);
      controls.appendChild(retry);
      res.appendChild(controls);
      app.appendChild(res);

      renderBreadcrumb([
        {label:'Question Bank', state:{}},
        {label:subject.label, state:{subject:subject.id}},
        {label:chapter.label, state:{subject:subject.id, chapter:chapter.id}},
        {label:'Results'}
      ]);
    }

    draw();
  }

  /* ---------------- router ---------------- */
  function render(){
    var app = document.getElementById('app');
    if(!app) return;

    var state = parseHash();
    var data = bank();

    if(!state.subject){ renderSubjectList(app); return; }
    var subject = data.subjects.filter(function(s){ return s.id === state.subject; })[0];
    if(!subject){ renderSubjectList(app); return; }

    if(!state.chapter){ renderChapterList(app, subject); return; }
    var chapter = subject.chapters.filter(function(c){ return c.id === state.chapter; })[0];
    if(!chapter){ renderChapterList(app, subject); return; }

    if(state.mode === 'practice'){ renderPractice(app, subject, chapter); return; }
    if(state.mode === 'test'){ renderTest(app, subject, chapter); return; }

    renderModeSelect(app, subject, chapter);
  }

  window.addEventListener('hashchange', render);
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
