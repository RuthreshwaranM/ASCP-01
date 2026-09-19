/* ============================================================
   SITE.JS — reads window.SITE (from site-config.js) and fills in
   every [data-site-*] mount point. Nothing here needs editing;
   change site-config.js instead.
   ============================================================ */
(function(){

  function el(tag, attrs, children){
    var e = document.createElement(tag);
    attrs = attrs || {};
    for(var k in attrs){
      if(k === 'class') e.className = attrs[k];
      else if(k === 'html') e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (children || []).forEach(function(c){
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return e;
  }

  function currentPage(){
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function buildHeader(site){
    var wrap = el('div', {class:'site-header-inner'});

    var brand = el('a', {class:'brand', href:'index.html'});
    if(site.logo) brand.appendChild(el('img', {class:'brand-logo', src:site.logo, alt:site.brandName || ''}));
    var brandText = el('div', {class:'brand-text'});
    brandText.appendChild(el('span', {class:'brand-name'}, [site.brandName || '']));
    if(site.brandLine) brandText.appendChild(el('span', {class:'brand-line'}, [site.brandLine]));
    brand.appendChild(brandText);
    wrap.appendChild(brand);

    var nav = el('nav', {class:'site-nav'});
    var cur = currentPage();
    (site.sections || []).filter(function(s){ return s.show; }).forEach(function(s){
      nav.appendChild(el('a', {
        href: s.href,
        class: 'nav-link' + (cur === s.href ? ' is-active' : '')
      }, [s.label]));
    });
    wrap.appendChild(nav);

    var toggle = el('button', {class:'nav-toggle', type:'button', 'aria-label':'Toggle menu'}, ['\u2630']);
    toggle.addEventListener('click', function(){ nav.classList.toggle('is-open'); });
    wrap.appendChild(toggle);

    return wrap;
  }

  function buildFooter(site){
    var wrap = el('div', {class:'site-footer-inner'});
    wrap.appendChild(el('p', {class:'footer-note'}, [site.footerNote || '']));
    var links = el('div', {class:'footer-links'});
    (site.links || []).forEach(function(l){
      links.appendChild(el('a', {href:l.url, class:'footer-link'}, [l.label]));
    });
    wrap.appendChild(links);
    return wrap;
  }

  function buildHero(site){
    var wrap = el('div', {class:'hero'});
    if(site.brandLine) wrap.appendChild(el('p', {class:'hero-eyebrow'}, [site.brandLine]));
    wrap.appendChild(el('h1', {class:'hero-title'}, [site.tagline || '']));
    var bankSection = (site.sections || []).filter(function(s){ return s.show; })[0];
    if(bankSection){
      wrap.appendChild(el('a', {class:'hero-cta', href:bankSection.href}, ['Open ' + bankSection.label]));
    }
    return wrap;
  }

  function buildTiles(site){
    var wrap = el('div', {class:'tiles'});
    (site.sections || []).filter(function(s){ return s.show; }).forEach(function(s){
      var a = el('a', {class:'tile', href:s.href});
      if(s.icon) a.appendChild(el('span', {class:'tile-icon'}, [s.icon]));
      a.appendChild(el('h3', {class:'tile-label'}, [s.label]));
      if(s.blurb) a.appendChild(el('p', {class:'tile-blurb'}, [s.blurb]));
      wrap.appendChild(a);
    });
    return wrap;
  }

  function mount(selector, builder, site){
    document.querySelectorAll(selector).forEach(function(target){
      target.innerHTML = '';
      target.appendChild(builder(site));
    });
  }

  function init(){
    var site = window.SITE || {};
    mount('[data-site-header]', buildHeader, site);
    mount('[data-site-footer]', buildFooter, site);
    mount('[data-site-hero]', buildHero, site);
    mount('[data-site-tiles]', buildTiles, site);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
