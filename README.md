# Educational — Teacher SaaS Dashboard

## Project overview

A frontend prototype for teachers to manage students, classes, learning materials, MCQ questions, tests, results, reports, calendars, messages, notifications, and settings.

## What it contains

- React 19 and Vite application
- Teacher dashboard and sidebar navigation
- Profile screen
- Dashboard statistics and recent-activity interface
- Pages/menu destinations for common teaching workflows
- Responsive styling and React Icons

## Current status

The inspected repository is primarily a frontend experience. Some dashboard data is representative/static, and no separate backend or database service is defined at the repository root. Authentication, persistence, multi-user authorization, and real classroom workflows should therefore be treated as unverified or future work.

The npm package is named `clarivoo`, while the current UI uses “Teacher SaaS.” The final product name should be chosen and applied consistently. The default branch is `sanjana-code`.

## Local development

```bash
npm install
npm run dev
```

Before release:

```bash
npm run lint
npm run build
```

## Recommended next work

Freeze the product name and user roles, define the backend/data model, replace sample data with authorized persistence, add authentication and tests, and document why `sanjana-code` is the default branch.
