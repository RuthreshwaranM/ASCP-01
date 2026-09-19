/* ============================================================
   SITE-CONFIG.JS  —  EDIT THIS FILE, NOTHING ELSE.
   ------------------------------------------------------------
   Everything you'd normally want to change (name, tagline,
   colours, which sections exist, contact links) lives here.
   Change a value, save, refresh. No build step.
   ============================================================ */
window.SITE = {

  /* ---------- 1. BRANDING ---------- */
  brandName:  "CADET WINGS Aryan Ruthresh",              // big name in the header
  brandLine:  "BATCH 01",                 // small line under it
  tagline:    "First batch. First solo. First everything.",
  logo:       "images/logo.svg",          // swap in your own PNG/SVG here
  footerNote: "Built by and for Batch 01 cadets.",

  /* ---------- 2. SECTIONS ----------
     To REMOVE a section: set show:false  (or delete the whole block).
     To ADD one: copy a block, give it a new href + page file.
     Order here = order on the home page and in the nav.          */
  sections: [
    { id:"bank",  show:true, label:"Question Bank", href:"bank.html",
      icon:"✈", blurb:"PA-28 Archer technical specific MCQs. Practice mode or timed test." },

    { id:"notes", show:true, label:"Notes", href:"notes.html",
      icon:"📘", blurb:"Ground school notes, checklists and quick-reference sheets." },

    { id:"about", show:true, label:"About Us", href:"about.html",
      icon:"👥", blurb:"Who we are — Batch 01, our training and our story." },

    /* Example of a section that's switched OFF. Flip show to true when ready.
    { id:"gallery", show:false, label:"Gallery", href:"gallery.html",
      icon:"📷", blurb:"Photos from the line, the sim and the ramp." },
    */
  ],

  /* ---------- 3. CONTACT / SOCIAL ----------
     Delete any line you don't want shown.                        */
  links: [
    { label:"WhatsApp",  url:"#" },
    { label:"Instagram", url:"#" },
    { label:"Email",     url:"mailto:you@example.com" },
  ],

  /* ---------- 4. PROTECTION ----------
     true  = block right-click, F12, Ctrl+U/S/P, text selection,
             blur the screen on tab-switch / screenshot attempts.
     false = turn all of that off.                                */
  protection: true,

  /* Optional: a URL that gets POSTed when someone tries to inspect
     or screenshot. Leave null on a static host (GitHub Pages).   */
  alertEndpoint: null,
};
