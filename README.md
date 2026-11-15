# lucassschmitz.github.io

Personal website of Lucas Schmitz (PhD candidate in Economics, Yale University).
It is plain HTML and CSS with no build step: GitHub Pages serves these files as they are.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page |
| `research.html` | Research page |
| `teaching.html` | Teaching page |
| `styles.css` | Look of every page (fonts, colors, layout) |
| `script.js` | Footer year and the [abstract] buttons |
| `Lucas_Schmitz_CV.pdf` | CV linked from every page |
| `photo.jpg` | Headshot (add one; until then the home page shows "LS") |

## Updating the site

- **New CV:** upload the new PDF with the same name, `Lucas_Schmitz_CV.pdf`, and it replaces the old one.
- **Photo:** upload a portrait named `photo.jpg` (lowercase). A 7:8 shape works best, e.g. 560 x 640 px.
- **Text:** on GitHub, open a `.html` file, click the pencil icon, edit, then click **Commit changes**.
- **New paper:** in `research.html`, copy a whole `<li class="paper-item">` block and give its abstract a new `id`
  (and the matching `aria-controls` on its button).

Changes go live at https://lucassschmitz.github.io within a few minutes of each commit.
