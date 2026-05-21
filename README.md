# Startup Club VIT Bhopal Website

Live demo: https://files-mentioned-by-the-user-email.vercel.app  
GitHub repository: https://github.com/Himanshusaurabh0411/startup-club-website

Premium React website for Startup Club VIT Bhopal, built for the recruitment task with a modern startup-focused interface, responsive layouts, animation, API integration, and Vercel-ready deployment.

Public Instagram reference used for content direction: https://www.instagram.com/startup.vit/

## Features

- Premium dark/light startup UI with the Startup Club SC logo
- Public `@startup.vit` profile signals reflected in content, stats, events, and highlights
- Responsive navbar with mobile hamburger menu
- Strong hero section with animated background, glassmorphism, and CTA buttons
- About section with mission, vision, why-join cards, and achievement stats
- Premium event cards for hackathons, pitch competitions, networking, founder talks, and workshops
- Program cards for bootcamps, founder labs, and pitch studios
- Core team section with role cards and social icons
- Animated testimonial section
- Contact form with validation and success notification
- Scroll progress indicator
- Loading animation
- Smooth scrolling and hover interactions
- Mock/real API integration through Express and Vercel serverless routes

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios
- Node.js
- Express
- Vercel serverless functions

## Installation

```bash
npm install
npm run dev
```

The local app runs at:

- Frontend: `http://127.0.0.1:5173`
- Express API: `http://localhost:5050`

## Build

```bash
npm run build
npm run preview
```

## API Endpoints

- `GET /api/club-data` returns stats, about cards, events, programs, team members, testimonials, and social links.
- `POST /api/interest` accepts contact form submissions with `name`, `email`, and `message`.

## Folder Structure

```text
.
├── api/                  # Vercel serverless API routes
├── public/assets/         # Logo and visual assets
├── server/                # Express backend for local development
├── src/
│   ├── components/        # Reusable React sections and UI pieces
│   ├── data/              # Shared mock/API content
│   ├── styles/            # Tailwind entry and global styles
│   ├── App.jsx
│   └── main.jsx
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository on Vercel.
3. Use these settings:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

The `api/` folder keeps API routes working on Vercel without a separate backend server.

## Recruitment Checklist

| Requirement | Status |
| --- | --- |
| React.js frontend | Complete |
| Responsive design | Complete |
| Modern clean UI | Complete |
| Navigation bar | Complete |
| Hero section | Complete |
| Minimum 3 sections | Complete, includes 6+ sections |
| Footer | Complete |
| Theme toggle | Complete |
| Smooth scrolling | Complete |
| Framer Motion animations | Complete |
| Hover interactions | Complete |
| Loading animation | Complete |
| Scroll progress indicator | Complete |
| API integration | Complete |
| Vercel deployment-ready | Complete |
