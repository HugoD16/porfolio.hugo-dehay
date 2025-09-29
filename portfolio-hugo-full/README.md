# Portfolio Hugo — Multipages (React + Vite + Tailwind)

Site portfolio multipages : Accueil, À propos, Compétences, Expériences, Certifications, Parcours scolaire, Veille IA.  
CV PDF inclus dans `public/`.

## Démarrage
```bash
npm install
npm run dev
```
## Build & déploiement (Apache)
```bash
npm run build
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```

## Pousser sur GitHub (une fois extrait)
```bash
git init
git remote add origin https://github.com/HugoD16/portfolio.git
git branch -M main
git add .
git commit -m "Portfolio complet multipages React + Tailwind"
git push -u origin main --force
```
