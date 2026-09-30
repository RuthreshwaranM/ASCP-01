/* ============================================================
   DATA/PDFS.JS  —  YOUR PDF LIBRARY. EDIT THIS FILE TO ADD PDFs.
   ------------------------------------------------------------
   1. Put the PDF file inside the /pdfs folder
      (use a subfolder per subject if you like).
      Use simple names: navigation-basics.pdf  (no spaces).
   2. Add a line in the "files" list of the right subject.
   3. To add a new subject, copy one whole { ... } block.

   id    = short lowercase name, no spaces (must be unique)
   name  = what people see
   icon  = any emoji
   file  = path to the PDF, starting with "pdfs/"
   ============================================================ */
window.PDF_SUBJECTS = [

  { id: "navigation", name: "Navigation", icon: "🧭",
    files: [
      { title: "Navigation Basics", desc: "Charts, plotting and headings", file: "pdfs/navigation/Navigation_oxford.pdf" }
    ]
  },

  { id: "meteorology", name: "Meteorology", icon: "⛅",
    files: [
      { title: "Weather Basics", desc: "Atmosphere, clouds and fronts", file: "pdfs/meteorology/weather-basics.pdf" },
    ]
  },

  { id: "air-regulation", name: "Air Regulation", icon: "📜",
    files: [
      { title: "Rules of the Air", desc: "", file: "pdfs/air-regulation/rules-of-the-air.pdf" },
    ]
  },

  { id: "Technical-specific", name: "Technical Specific", icon: "🔧",
    files: [
      { title: "PA28 notes", desc: "", file: "pdfs/Technical-speci/pa28 ruthresh notes.pdf" },
    ]
  },

];