# Campaign Resource Index

This is a static resource hub for the D&D files in the shared Google Drive library:

https://drive.google.com/drive/folders/1--voDZq_j_efkoUehk4LHyAa04KLcjcY

## Files

- `index.html` is the website.
- `styles.css` handles the layout and visual design.
- `script.js` contains the source links and categorized resource data.

## Google Sites publishing

The primary PDFs, spreadsheets, and useful folder links are already mapped in `SOURCE_LINKS` at the top of `script.js`.

Google Sites cannot directly host this folder as a normal website with CSS and JavaScript files. Use one of these approaches:

- Embed the published page URL from a static host such as GitHub Pages, Netlify, or Cloudflare Pages.
- Or recreate the sections in Google Sites manually and use the Drive links from `script.js`.

The site uses PDF page anchors like `#page=123`. Google Drive previews may ignore page anchors depending on the viewer, but the page number is also displayed on each card.
