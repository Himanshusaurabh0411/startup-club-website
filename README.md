# StartUp Club Website

Live website: https://files-mentioned-by-the-user-email.vercel.app

Modern React website created for the StartUp Club Round 2 task. The project includes a responsive frontend, a Node.js/Express API for local development, Vercel-compatible serverless API routes, theme toggle, smooth scrolling, scroll animations, and clean setup instructions.

## Requirement Checklist

| Requirement | Status | Where |
| --- | --- | --- |
| React.js frontend | Done | `src/` |
| Responsive design for mobile and laptop | Done | `src/styles/main.css` |
| Modern and clean UI | Done | custom layout, theme tokens, responsive sections |
| Navigation bar | Done | `src/components/Header.jsx` |
| Hero section | Done | `src/components/Hero.jsx` |
| Minimum 3 sections | Done | Programs, Events, Impact, Contact |
| Footer | Done | `src/components/Footer.jsx` |
| Node.js/Express backend | Done | `server/index.js` |
| API integration | Done | `/api/club-data` and `/api/interest` |
| Animations and smooth scrolling | Done | `useReveal` hook and CSS scroll behavior |
| Theme toggle | Done | header icon button with local storage |
| Creative UI/UX | Done | original club content, visual hero, event roadmap, contact flow |
| Vercel deployment ready | Done | `vercel.json` and `api/` routes |

## Tech Stack

- React.js with Vite
- Node.js and Express
- Vercel serverless API routes
- CSS modules through a single organized stylesheet
- Lucide React icons

## Local Setup

```bash
npm install
npm run dev
```

The app runs at:

- Frontend: `http://127.0.0.1:5173`
- Express API: `http://localhost:5050`

The Vite dev server proxies `/api` requests to the Express backend, so the frontend works locally without extra environment variables.

## Build

```bash
npm run build
npm run preview
```

## Deploy On Vercel

1. Push this folder to a GitHub repository.
2. Open Vercel and import the repository.
3. Use these settings:
   - Framework: `Vite`
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

The `api/` folder provides Vercel-compatible endpoints, so `/api/club-data` and `/api/interest` keep working after deployment.

## Folder Structure

```text
.
├── api/                  # Vercel serverless API routes
├── public/assets/         # Logo and hero visual assets
├── server/                # Express backend for local development
├── src/
│   ├── components/        # Reusable React sections
│   ├── data/              # Shared website content
│   ├── hooks/             # Scroll reveal hook
│   ├── styles/            # Main responsive CSS
│   ├── App.jsx
│   └── main.jsx
├── vercel.json
└── vite.config.js
```

## API Endpoints

- `GET /api/club-data` returns program, event, impact, and toolkit content.
- `POST /api/interest` accepts `name`, `email`, and `interest` from the contact form.

## Submission Notes

- Keep the GitHub repository public or accessible to reviewers.
- After deployment, submit both the GitHub repository link and the live Vercel link.
- Before submitting, open the live site once on mobile width and laptop width to confirm the responsive layout.
