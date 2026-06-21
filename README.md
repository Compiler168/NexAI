# NexAI - Premium AI Automation Agency

Welcome to the NexAI project! This repository contains the source code for the NexAI agency website, a premium, production-ready marketing and conversion platform.

## Features

- **Premium Dark Mode UI:** Designed with deep glassmorphism gradients, hover glow effects, and modern aesthetics.
- **Fully Responsive Design:** Adapts flawlessly from mobile to ultra-wide desktop screens.
- **Modular CSS Architecture:** Clean separation of concerns with variables, resets, global styles, and component-specific stylesheets.
- **Interactive JavaScript:** Smooth reveal animations, custom dynamic booking calendar, and form handling capabilities.
- **High-Converting Landing Pages:** Strategically designed 12-page structure including Services, Solutions, Portfolio, Case Studies, Pricing, Blog, Careers, and more.
- **Custom Booking Flow:** SaaS-style interactive scheduling calendar for discovery calls.
- **Fast and Accessible:** Optimized for performance and search engine indexing.

## Tech Stack

- **HTML5:** Semantic and structured content.
- **CSS3:** Vanilla CSS leveraging modern features like CSS Variables (Custom Properties), Flexbox, CSS Grid, and CSS Animations.
- **JavaScript (Vanilla):** DOM manipulation, animation logic, and interactive components without heavy framework overhead.
- **Icons:** Phosphor Icons (loaded via CDN) for clean, consistent vector iconography.
- **Deployment:** Ready for deployment on platforms like Vercel or Netlify.

## Project Structure

```
├── index.html          # Main landing page
├── about-us.html       # About the agency
├── services.html       # Detailed services overview
├── solutions.html      # Industry-specific solutions
├── portfolio.html      # Projects showcase
├── case-studies.html   # In-depth case studies
├── pricing.html        # Transparent pricing plans
├── blog.html           # Content marketing and news
├── careers.html        # Job openings
├── contact.html        # Contact form and details
├── faq.html            # Frequently asked questions
├── book.html           # Interactive discovery call booking
├── assets/             # Static assets directory
│   ├── css/            # Stylesheets (variables.css, reset.css, global.css, components.css, animations.css)
│   └── js/             # JavaScript files (main.js, components.js, animations.js)
```

## Running Locally

To run the project locally, simply clone the repository and serve the files using any standard local web server (such as Python's `http.server`, Live Server extension in VS Code, or Node's `http-server`). 

```bash
# Clone the repository
git clone https://github.com/Compiler168/NexAI.git

# Navigate into the directory
cd NexAI

# Start a local server (example using npx)
npx serve .
```

## Deployment

This site is completely static and can be deployed easily on modern hosting platforms.

**Vercel Deployment (Example):**
```bash
npx vercel --prod
```

## License

&copy; 2026 NexAI Automation. All rights reserved.
