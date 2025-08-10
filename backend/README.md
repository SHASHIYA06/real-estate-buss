Backend (Express) for Loan Lead App

- Routes:
  - GET /api/loan-types
  - GET /api/banks
  - GET /api/applications
  - POST /api/applications
  - PATCH /api/applications/:id/status
  - POST /api/auth/login

- To run locally:
  cp .env.example .env
  npm install
  npm run dev

- To seed a real DB, copy scripts/seed.sql into your Supabase SQL editor and run.
