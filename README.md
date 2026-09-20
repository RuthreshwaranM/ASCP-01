# Batch 01 — Cadet Site

Plain HTML/CSS/JS. No build step, no server. Drop the folder on
GitHub Pages, Vercel or Netlify and it works.

## The only file you normally edit
**`site-config.js`** — name, tagline, colours-source, which sections
exist, contact links, protection on/off.

| I want to...                | Do this                                                        |
|-----------------------------|----------------------------------------------------------------|
| Rename the site             | `brandName` / `brandLine` / `tagline` in `site-config.js`       |
| Remove a section            | set that section's `show: false`                                |
| Add a section               | copy a `sections` block, then copy `notes.html` to the new name |
| Change colours              | the six hex codes at the top of `css/theme.css`                 |
| Add questions               | `data/pa28-archer.js` — instructions are in the file header     |
| Add a new subject           | copy `data/pa28-archer.js`, add a `<script>` line in `bank.html`|
| Add a note                  | `data/notes.js` — instructions are in the file header            |
| Add a notes subject         | copy a `registerNotesSubject(...)` line in `data/notes.js`      |
| Swap the logo               | replace `images/logo.svg` (or point `logo:` at a PNG)           |
| Turn protection off         | `protection: false`                                             |

## Question format
    1. Question text?
    a. wrong
    *b. correct        <- the star marks the answer
    c. wrong
    d. wrong
    Explanation: optional, shown in Practice mode.

2, 3 or 4 options all work. `[image: file.png]` on its own line adds a
diagram (put the file in `/images`).

## Notes format
Notes are organised into subjects (Navigation, Meteorology, Air
Regulation, Technical General, or any others you add) — edit
`data/notes.js`, nothing else. Inside a note:

    Plain text becomes a paragraph.

    Leave a blank line between paragraphs.

    - a line starting with "- " becomes a bullet
    - another bullet

    ## A Subheading

`[image: file.png]` works the same way as in the question bank.

## About the protection
`js/protection.js` blocks right-click, F12, Ctrl+U/S/P, text selection,
image dragging and printing, and blurs the page on tab-switch or a
screenshot keypress.

Be clear-eyed about what that is: it's a **deterrent, not security**.
Anyone who disables JavaScript, opens DevTools before the page loads,
or points a phone camera at the screen gets through. That is true of
every website — the browser must be given the content in order to show
it. Real protection means keeping questions on a server behind a login
and sending only a few at a time, which is what your exam-bank project
does with its `/api` folder. If this batch site ever needs that, the
same approach ports over.

## Naming
Nothing here uses the airline's or the academy's name or marks.
Keep it that way and you stay clear of trademark trouble.
