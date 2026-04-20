# Campus Life App

> A responsive, multi-page college web application built for Centenary University students — bringing campus events, dining, and live weather together in one clean, modern interface.

---

# Project Description & Purpose

Campus Life App is a front-end web application designed to serve as a digital hub for college students. Instead of hunting across multiple platforms for campus information, students can visit one place to:

- Get a warm welcome and overview of campus life
- Browse and register for upcoming campus events
- Explore on-campus dining venues and hours
- Check live weather conditions for Hackettstown, NJ

The app was built as a student project to demonstrate real-world web development skills including responsive design, JavaScript interactivity, and third-party API integration — all without a back-end server or database.

---

# Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Custom styling, animations, and layout |
| JavaScript (ES6+) | Interactivity, DOM manipulation, async/await |
| Bootstrap 5.3 | Responsive grid, navbar, carousel, and utilities |
| Open-Meteo API | Free, no-key-required live weather data |
| Google Fonts | `Playfair Display` (headings) + `DM Sans` (body) |

# Color Theme

| Name | Hex |
|---|---|
| Navy (primary) | `#0b1f3a` |
| Gold (accent) | `#ffd700` |

---

# Setup & Deployment

# Option A — Open Directly (Recommended for single-file version)

1. Download `campus-life-app.html`
2. Double-click the file to open it in any modern browser
3. No installation, no server, no dependencies needed

All CSS, JavaScript, and images are embedded directly in the HTML file.

---

# Option B — Multi-File Version (Folder Structure)

If using the expanded folder version:

```
campus-life-app/
├── index.html          ← Home page
├── events.html         ← Events page
├── dining.html         ← Dining page
├── css/
│   └── style.css       ← All custom styles
├── js/
│   └── script.js       ← All JavaScript functions
└── images/
    ├── centenary-logo.png
    ├── campus.png
    ├── events.png
    └── dining.png
```

1. Download and unzip the project folder
2. Keep all files in their original folder structure — do not move them
3. Open `index.html` in a browser

When using the multi-file version, all files must be in the correct folders or images and styles will not load. If you see a white page, use Option A instead.

---

# Option C — Deploy to the Web (Free Hosting)

To make the app publicly accessible:

GitHub Pages:
1. Push the project folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://patronomikon.github.io/WDFinal/`

Netlify (drag & drop):
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop your project folder onto the Netlify dashboard
3. Your site goes live instantly with a public URL

---

# Features & How to Use Them

# Home Page

| Feature | How to Use |
|---|---|
| Welcome Message | Click the **"Click Welcome Message"** button to reveal a personalized greeting. Click again to hide it. |
| Campus Carousel | Auto-slides through 3 campus photos every 4.5 seconds. Use the arrow buttons or dots to navigate manually. |
| Stats Strip | Displays key campus stats (students, programs, clubs, events) — always visible below the hero. |
| Weather Widget | Click **"Get Weather"** to fetch live temperature, humidity, and wind speed for Hackettstown, NJ via the Open-Meteo API. A **"Full Weather Report →"** link opens the official NWS forecast page. |
| Quick Links | Cards linking directly to the Events and Dining pages. |

---

# Events Page

| Feature | How to Use |
|---|---|
| Event Cards | Three cards display Spring Festival, Study Night, and Career Fair — each with a date, location, image, and description. |
| Register Button | Click **"Register"** on any card to see a confirmation message: *"✅ You registered for [Event Name]!"* Click again to dismiss. |

---

# Dining Page

| Feature | How to Use |
|---|---|
| Dining Hall Image | Shows a photo of the main dining hall with location and hours info below. |
| Show Dining Options | Click the button to reveal a list of 4 on-campus venues: Cafeteria, Starbucks, Subway, and Pizza Station — each with hours. Click again to hide the list. |
| Meal Plan Info | A static info card explains available meal plan types for students. |

---

# Navigation

- The navbar is present on all pages with links to Home, Events, and Dining
- On mobile, the navbar collapses into a hamburger menu (☰)
- The active page link is highlighted in gold
- Clicking the brand logo always returns to the Home page

---

# Potential Future Improvements

These features were considered stretch goals and could be added in future versions:

# Functionality
- Real event registration — connect to a back-end (e.g., Firebase or Supabase) to actually store registrations
- User login / student accounts — personalize the experience per student
- Search & filter events — filter by date, category, or keyword
- Campus map — interactive map of buildings, dining halls, and event venues
- Push notifications — remind students about registered events
- Dark / light mode toggle — user-selectable theme preference

# Content
- Real campus photography — replace placeholder images with actual campus photos
- Live dining menu — pull daily menus from a dining services API
- Academic calendar integration — show exam dates, holidays, and deadlines
- Club & organization directory — searchable list of student clubs

# Technical
- Progressive Web App (PWA) — make the app installable on mobile devices
- Accessibility audit — WCAG 2.1 AA compliance review
- Multi-language support — Spanish, French, and other languages for international students
- Unit tests — add Jest tests for JavaScript functions
- Build pipeline — Vite or Webpack for bundling and optimization

---

# Project Info

- Institution: Centenary University — Hackettstown, NJ
- Course: Web Development
- Version: 1.0.0
- License: MIT