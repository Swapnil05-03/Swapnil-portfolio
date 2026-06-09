# Swapnil Dwivedi — Developer Portfolio

A premium, internship-ready developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## Folder Structure

```
swapnil-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Replace with your actual resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── CodingProfiles.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionDivider.jsx
│   ├── data/
│   │   └── portfolio.js    ← Edit all personal info here
│   ├── hooks/
│   │   └── useScrollProgress.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── index.html
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Upload

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Vercel Deployment

1. Push to GitHub
2. Go to vercel.com → New Project → Import repo
3. Framework: Vite | Build: npm run build | Output: dist
4. Deploy

## Customization

Edit src/data/portfolio.js to update all personal info, skills, projects, etc.
Replace public/resume.pdf with your actual resume PDF.
