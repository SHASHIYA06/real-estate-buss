ANDROMEDA - Loan Lead Generation Platform (Complete Package)

This package contains a full-stack starter app tailored to a loan distributor business.
It includes frontend (React + Vite), backend (Node + Express), Supabase schema, and deployment configs.

IMPORTANT: This package does NOT include any secret keys. Add your secrets to environment variables before deploying.

Folders:
- frontend/: React app (Home, Apply, Compare, Admin)
- backend/: Express API (routes for loans, banks, applications, auth)
- supabase/: SQL schema + seed scripts
- render.yaml, vercel.json: deployment helpers

QUICK LOCAL RUN (dev):
1) Backend
   cd backend
   cp .env.example .env
   # edit DATABASE_URL in .env if you want DB persistence
   npm install
   npm run dev
   # server at http://localhost:4000

2) Frontend
   cd frontend
   npm install
   npm run dev
   # app at http://localhost:5173

DEPLOY (one-click plan):
1) Create Supabase project and run supabase/schema.sql and supabase/seed.sql.
   - Copy the Supabase Postgres connection string; set it as DATABASE_URL in Render later.

2) Push this repo to GitHub (root of repo contains frontend/ and backend/).

3) Deploy backend on Render:
   - New Web Service -> Connect repo -> set root to backend/
   - Build Command: npm install
   - Start Command: npm start
   - Set environment variables in Render: DATABASE_URL, JWT_SECRET, ADMIN_USER, ADMIN_PASS, SUPABASE_URL, SUPABASE_SERVICE_KEY

4) Deploy frontend on Vercel:
   - New Project -> Connect repo -> point to frontend/ folder
   - Build Command: npm run build
   - Output Directory: dist
   - Set env var: VITE_API_BASE = https://<your-backend-url>

5) Test: Open frontend, submit Apply form. Check backend logs or Supabase applications table for new leads.

NEED HELP?
Reply here and I will walk you step-by-step through the deploy UI and env setup.
