# Komal Kathwade — Personal Portfolio

A modern, animated personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Showcases academic background, technical skills, projects, freelance services, and contact information — designed for recruiters, clients, and collaborators.

[![Live Demo](https://img.shields.io/badge/Live-komal--portfolio--nu.vercel.app-06b6d4?style=for-the-badge&logo=vercel&logoColor=white)](https://komal-portfolio-nu.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

## Live Preview

**[https://komal-portfolio-nu.vercel.app/](https://komal-portfolio-nu.vercel.app/)**

---

## Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Smooth animations** — scroll reveals, typing effect, hover interactions via Framer Motion
- **Glassmorphism UI** — dark theme with purple/cyan gradient accents
- **Single source of truth** — all content managed in one data file
- **Privacy-first contact** — email and LinkedIn only (no phone number exposed)
- **Freelance-ready** — dedicated services section with project inquiry CTAs
- **SEO-friendly** — meta tags and semantic HTML structure
- **Fast performance** — built with Vite for quick dev and optimized production builds

---

## Sections

| Section      | Description                                              |
| ------------ | -------------------------------------------------------- |
| Hero         | Name, roles, contact links, GitHub avatar, Open to Work |
| About        | Summary, brand quote, highlights (CGPA, projects, etc.)  |
| Skills       | Programming, backend, frontend, databases, soft skills   |
| Experience   | Internship timeline with bullet points                   |
| Projects     | Featured work with GitHub and live demo links            |
| Education    | Academic background and certifications                   |
| Freelance    | Services offered and client inquiry buttons              |
| Contact      | Email, LinkedIn, GitHub, and quick message CTA           |

---

## Tech Stack

| Category   | Technologies                                      |
| ---------- | ------------------------------------------------- |
| Frontend   | React 19, JavaScript (JSX), Tailwind CSS v4       |
| Animation  | Framer Motion                                     |
| Icons      | Lucide React, custom SVG social icons             |
| Build Tool | Vite 8                                            |
| Linting    | ESLint                                            |
| Deployment | Vercel                                            |

---

## Project Structure

```
komal-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Freelance.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── Skills.jsx
│   │   ├── SocialIcons.jsx
│   │   └── ui.jsx
│   ├── data/
│   │   └── portfolio.js      ← Edit all content here
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/komal-k2005/komal-portfolio.git
cd komal-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start local development server |
| `npm run build`   | Build for production           |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint                     |

---

## Customization

All portfolio content lives in **`src/data/portfolio.js`**. Update this file to change:

- Profile info (name, email, social links, tagline)
- Skills and tech stack categories
- Work experience and projects
- Education and certifications
- Freelance services and navigation links

No need to touch individual components unless you want to change layout or styling.

---

## Deployment

This project is configured for **Vercel** deployment:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — no extra config needed
4. Your site goes live on every push to `main`

Build command: `npm run build`  
Output directory: `dist`

---

## Author

**Komal Kathwade**  
Software Developer · BTech Computer Engineering · Pune, India

[![GitHub](https://img.shields.io/badge/GitHub-komal--k2005-181717?style=flat-square&logo=github)](https://github.com/komal-k2005)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-komal--kathwade-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/komal-kathwade/)
[![Upwork](https://img.shields.io/badge/Upwork-Hire_Me-14A800?style=flat-square&logo=upwork&logoColor=white)](https://www.upwork.com/freelancers/~0115ba2ce8ca2069a5)
[![Email](https://img.shields.io/badge/Email-hellokomalk@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:hellokomalk@gmail.com)

> *"Code with Logic. Build with Purpose. Grow with Consistency."*

---

## License

This project is open source and available for personal and portfolio use.
