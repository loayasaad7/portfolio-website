# Loay Asaad Portfolio Website

React + Vite portfolio website built from `Loay_Asaad_Portfolio_Projects_Detailed.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project content

Project copy, links, technologies, case-study sections, and screenshot arrays live in:

```text
src/data/projects.js
```

Each project includes an `images` array. Every image object uses this shape:

```js
{
  title: 'Student Dashboard',
  type: 'Mobile App',
  src: '/projects/attareq/student-dashboard.png',
  alt: 'Attareq student dashboard showing lessons progress and theory practice',
}
```

## Adding screenshots later

Put screenshots in the matching folder under `public/projects/`:

```text
public/projects/alamati/
public/projects/attareq/
public/projects/prayer-times/
public/projects/mosabaqat/
public/projects/talk2data/
public/projects/cinema/
```

Recommended filenames already referenced by the site:

```text
public/projects/alamati/mobile-app.png
public/projects/alamati/booking-flow.png
public/projects/alamati/admin-dashboard.png

public/projects/attareq/student-dashboard.png
public/projects/attareq/teacher-sessions.png
public/projects/attareq/theory-analytics.png

public/projects/prayer-times/prayer-schedule.png
public/projects/prayer-times/daily-mawiza.png
public/projects/prayer-times/admin-panel.png

public/projects/mosabaqat/live-room.png
public/projects/mosabaqat/presenter-screen.png
public/projects/mosabaqat/admin-dashboard.png

public/projects/talk2data/query-page.png
public/projects/talk2data/databases.png
public/projects/talk2data/history.png

public/projects/cinema/customer-main.png
public/projects/cinema/content-manager.png
public/projects/cinema/admin-reports.png
```

If a file is missing, the UI shows a polished placeholder card automatically. To add more screenshots, add the file to the correct folder and add another object to the project `images` array in `src/data/projects.js`.

The portfolio PDF used by the download button is stored at:

```text
public/docs/Loay_Asaad_Portfolio_Projects_Detailed.pdf
```
