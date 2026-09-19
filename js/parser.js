/* ============================================================
   PARSER.JS — turns the plain-text question format into data.

   Format (see any file in /data for real examples):
     1. Question text, can wrap onto
        a second line if it's long.
     a. wrong option
     *b. correct option      <- the leading * marks the answer
     c. wrong option
     d. wrong option
     Explanation: optional, shown after answering.
     [image: filename.png]   <- optional, put the file in /images

   Two globals get set up:
     registerSubject(id, label)
     registerChapterText(subjectId, chapterId, chapterLabel, text)
   Both are called from files in /data. This file must load BEFORE
   any of those data files, and AFTER this comment block nothing
   in /data needs to know how parsing works.
   ============================================================ */
(function(){

  var REGISTRY = { subjects: [] };

  function findSubject(id){
    for(var i=0;i<REGISTRY.subjects.length;i++){
      if(REGISTRY.subjects[i].id === id) return REGISTRY.subjects[i];
    }
    return null;
  }

  function parseChapterText(text){
    var lines = text.replace(/\r\n/g, '\n').split('\n');
    var questions = [];
    var current = null;

    var qStart   = /^\s*(\d+)\.\s*(.*)$/;
    var optStart = /^\s*(\*?)\s*([a-dA-D])[\.\)]\s*(.*)$/;
    var explStart = /^\s*Explanation:\s*(.*)$/i;
    var imgStart  = /^\s*\[image:\s*(.+?)\]\s*$/i;

    function pushCurrent(){
      if(current && current.text.trim() && current.options.length > 0){
        questions.push(current);
      }
      current = null;
    }

    for(var i=0;i<lines.length;i++){
      var line = lines[i];
      if(!line.trim()) continue;

      var om = line.match(optStart);
      var qm = !om ? line.match(qStart) : null;
      var em = line.match(explStart);
      var im = line.match(imgStart);

      if(qm){
        pushCurrent();
        current = {
          number: parseInt(qm[1], 10),
          text: qm[2].trim(),
          options: [],
          explanation: '',
          image: null,
          correct: null
        };
        continue;
      }

      if(om && current){
        var isCorrect = !!om[1];
        var letter = om[2].toLowerCase();
        var optText = om[3].trim();
        current.options.push({ letter: letter, text: optText });
        if(isCorrect) current.correct = letter;
        continue;
      }

      if(em && current){
        current.explanation = (current.explanation ? current.explanation + ' ' : '') + em[1].trim();
        continue;
      }

      if(im && current){
        current.image = im[1].trim();
        continue;
      }

      // plain continuation line
      if(current){
        if(current.options.length === 0){
          current.text += (current.text ? ' ' : '') + line.trim();
        } else if(current.explanation){
          current.explanation += ' ' + line.trim();
        }
      }
    }
    pushCurrent();
    return questions;
  }

  window.registerSubject = function(id, label){
    if(!findSubject(id)){
      REGISTRY.subjects.push({ id: id, label: label || id, chapters: [] });
    }
  };

  window.registerChapterText = function(subjectId, chapterId, chapterLabel, text){
    var subject = findSubject(subjectId);
    if(!subject){
      console.error('registerChapterText: call registerSubject("' + subjectId + '", ...) first.');
      return;
    }
    var existing = null;
    for(var i=0;i<subject.chapters.length;i++){
      if(subject.chapters[i].id === chapterId){ existing = subject.chapters[i]; break; }
    }
    var questions = parseChapterText(text || '');
    if(existing){
      existing.questions = questions;
      existing.label = chapterLabel || existing.label;
    } else {
      subject.chapters.push({ id: chapterId, label: chapterLabel || chapterId, questions: questions });
    }
  };

  window.QuestionBank = REGISTRY;
})();
