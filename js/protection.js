/* ============================================================
   PROTECTION.JS — see the README for what this can and can't do.
   It is a deterrent, not security. Turn it off with
   `protection: false` in site-config.js.
   ============================================================ */
(function(){
  var site = window.SITE || {};
  if(!site.protection) return;

  function report(kind){
    if(!site.alertEndpoint) return;
    try{
      var payload = JSON.stringify({ kind:kind, path:location.pathname, t:Date.now() });
      if(navigator.sendBeacon){
        navigator.sendBeacon(site.alertEndpoint, payload);
      } else {
        fetch(site.alertEndpoint, { method:'POST', body:payload, keepalive:true });
      }
    }catch(e){ /* no-op on a static host */ }
  }

  function blur(ms){
    document.documentElement.classList.add('is-blurred');
    if(ms){
      window.clearTimeout(blur._t);
      blur._t = window.setTimeout(function(){
        document.documentElement.classList.remove('is-blurred');
      }, ms);
    }
  }
  function unblur(){ document.documentElement.classList.remove('is-blurred'); }

  document.addEventListener('contextmenu', function(e){ e.preventDefault(); });

  document.addEventListener('keydown', function(e){
    var k = e.key;
    var devtoolsCombo =
      k === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I','i','J','j','C','c'].indexOf(k) !== -1) ||
      (e.metaKey && e.altKey && ['I','i','J','j','C','c'].indexOf(k) !== -1);
    var saveCombo = (e.ctrlKey || e.metaKey) && ['u','U','s','S','p','P'].indexOf(k) !== -1;

    if(devtoolsCombo || saveCombo){
      e.preventDefault();
      report(devtoolsCombo ? 'devtools-shortcut' : 'save-shortcut');
    }
    if(k === 'PrintScreen'){
      report('printscreen');
      blur(700);
    }
  });

  document.addEventListener('dragstart', function(e){
    if(e.target && e.target.tagName === 'IMG') e.preventDefault();
  });

  document.addEventListener('selectstart', function(e){
    var t = e.target;
    if(t && t.closest && t.closest('input, textarea, [contenteditable="true"]')) return;
    e.preventDefault();
  });

  document.documentElement.classList.add('protection-on');

  document.addEventListener('visibilitychange', function(){
    if(document.hidden){
      blur();
      report('tab-hidden');
    } else {
      unblur();
    }
  });
})();
