# Lukas Portfolio

A simple, deploy-ready portfolio for internship outreach.

## Quickstart
1. Open `index.html` locally to preview.
2. Edit content in `index.html` (About, links) and `script.js` (projects data).
3. Replace `assets/CV_LukasWilliam_2025.pdf` with your latest CV (same filename), or update the link in the header.

## Deploy (GitHub Pages)
```bash
git init
git add .
git commit -m "feat: portfolio v1"
git branch -M main
git remote add origin https://github.com/<your-username>/lukas-portfolio.git
git push -u origin main
# then enable GitHub Pages in repo settings -> Pages -> Deploy from branch -> main / root
```

## Deploy (Netlify)
- Drag-and-drop the folder in https://app.netlify.com/drop or connect your repo and set the build as a static site.

## Customize
- Update colors/branding via Tailwind utility classes in `index.html` and small styles in `styles.css`.
- Add/edit projects in `script.js` (`projects` array).
- Swap favicon/branding in `/assets`.

## License
MIT — make it yours.
