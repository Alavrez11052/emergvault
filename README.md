# EM Hub — Emergency Medicine Learning Platform

A full-stack, case-based learning platform for student doctors rotating through
emergency medicine. Built with Next.js (App Router), PostgreSQL, and Tailwind CSS.
Deploys for free on **Netlify + Neon**.

## Features

- **46+ realistic EM cases** across 15 categories (cardiovascular, trauma,
  toxicology, pediatrics, OB/GYN, and more) — each with chief complaint, HPI,
  vitals, exam, workup, differential, management, teaching points, and
  optional quiz questions.
- **Accounts & progress tracking** — students register, take quizzes, comment
  on cases, and see their completion stats on a personal dashboard.
- **Dark mode** — smooth, flash-free theme toggle, persisted per user.
- **Clean, rounded, animated UI** — soft shadows, rounded corners, smooth
  transitions throughout.
- **Staff backend** (`/staff`) — for `CONTRIBUTOR`, `SENIOR_STAFF`, and
  `ADMIN` roles:
  - Full case editor (create/edit/delete cases and quiz questions, publish/draft)
  - Comment moderation (hide/delete) — senior staff & admin only
  - Announcements board (staff-only or public; public posting requires
    senior staff/admin)
  - Read-only analytics (most-viewed cases, completion rates, category breakdown)
- **Admin panel** (`/admin`) — `ADMIN` role only:
  - User management: promote/demote roles, suspend/reinstate, delete accounts
  - Full audit log of every staff/admin action

## Roles

| Role            | Can do                                                        |
|-----------------|-----------------------------------------------------------------|
| `USER`          | Browse cases, take quizzes, comment, track progress            |
| `CONTRIBUTOR`   | + Create/edit cases, post staff-only announcements, view analytics |
| `SENIOR_STAFF`  | + Moderate comments, post public announcements                 |
| `ADMIN`         | + Manage user accounts and roles, view audit log                |

## Deploying for free on Netlify + Neon

This app uses PostgreSQL (via the `pg` package) instead of a local file
database, specifically so it runs cleanly on Netlify's serverless functions
(which don't support a persistent filesystem).

**1. Create a free Postgres database**

Easiest option — use Netlify's built-in database:
- In the Netlify dashboard, go to your team → **Extensions** → add **Neon**
- Create a database from there; Netlify will automatically add a
  `DATABASE_URL` (or similar) environment variable to your site

Or create one directly at [neon.tech](https://neon.tech) (free tier, no
credit card) and copy the connection string yourself.

**2. Deploy the site**

- Push this repo to GitHub
- In Netlify: **Add new site → Import an existing project**, pick the repo
- Netlify auto-detects Next.js — no build settings needed (see `netlify.toml`)
- In **Site settings → Environment variables**, add:
  - `DATABASE_URL` — your Neon connection string (skip if using the Netlify/Neon
    extension, which sets this for you)
  - `JWT_SECRET` — a long random string (e.g. generate with `openssl rand -base64 48`)
- Deploy

**3. Set up the database schema and seed data**

Run these once, locally, pointed at your production database (copy the
connection string into a local `.env` temporarily, or export it inline):

```bash
npm install
DATABASE_URL="your-neon-connection-string" npm run migrate
DATABASE_URL="your-neon-connection-string" npm run seed
```

This creates all the tables and seeds the admin account, a demo staff
account, and all 46 cases.

Default seeded accounts (**change these passwords immediately** once live):

- **Admin:** `admin@emhub.local` / `Admin123!`
- **Senior staff:** `senior@emhub.local` / `Staff123!`

To promote your own account to staff later, log in as the admin, go to
`/admin`, and change your account's role from the dropdown.
