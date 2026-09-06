# TLC STUDIO LTD — Luxury Hair Studio & Premium Education Ecosystem

![TLC Studio LTD](https://img.shields.io/badge/Brand-TLC%20STUDIO%20LTD-090909?style=for-the-badge&logoColor=white)
![Platform](https://img.shields.io/badge/Architecture-Frontend%20Only-D53A74?style=for-the-badge)
![Academy](https://img.shields.io/badge/Education-VTCT%20Accredited-153D32?style=for-the-badge)
![License](https://img.shields.io/badge/License-Proprietary-gold?style=for-the-badge)

A production-ready, ultra-polished, responsive frontend web platform engineered for **TLC STUDIO LTD**. The ecosystem seamlessly connects two distinct yet cohesive luxury brand experiences:

1. **TLC STUDIO** — Exclusive Luxury Hair Salon, Bespoke Consultations & Hair Artistry (Mayfair, London & Manchester).
2. **TLC ACADEMY** — World-Class Hair Education, VTCT Level 2 & 3 Qualifications, Hybrid Learning & EduTech AI Assistant.

---

## ✨ Brand Personality & Design Aesthetics

| Brand Pillar | Visual Aesthetics & Core Palette | Typography & Feel |
| :--- | :--- | :--- |
| **TLC STUDIO** | Soft Luxury • `#090909` Off-Black • `#F7F5F2` Warm Off-White • `#D53A74` Luxury Pink | *Cormorant Garamond* Headings • High-Fashion Editorial • Sophisticated & Intimate |
| **TLC ACADEMY** | Bold Authority • `#153D32` Dark Forest Green • `#0D2B24` Deep Green • `#FFFFFF` Pure White | *Manrope* UI Control • Future-Facing EduTech • Credible & Aspirational |

---

## 🏛️ Website Architecture & Key Pages

The repository contains 17 fully designed, responsive HTML5 pages powered by Vanilla CSS3 and JavaScript:

```
d:/TLC-STUDIO/
├── index.html                # TLC Ecosystem Gateway (Studio & Academy Dual Introduction)
├── studio.html               # TLC Studio Homepage (Luxury Salon Experience)
├── academy.html              # TLC Academy Homepage (Accredited Hair Education Platform)
├── services.html             # Studio Services Catalogue & Interactive Category Filter
├── service-detail.html       # Individual Service Breakdown (Luxury Silk Press Experience)
├── consultation.html         # Interactive Diagnostic Consultation Questionnaire & AI Prescription
├── booking.html              # Multi-Step Appointment Booking Stepper Flow
├── gallery.html              # Before/After Transformations & Editorial Portfolio Gallery
├── academy-courses.html      # Course Catalogue & VTCT Qualification Filter
├── course-detail.html        # Course Curriculum Detail & Interactive Accordion
├── apply.html                # Multi-Step Student Enrolment Application Stepper Flow
├── funding.html              # Finance Guidance, Advanced Learner Loans & Repayment Prototype
├── student-login.html        # Split-Screen Student Portal Login Experience
├── student-dashboard.html    # EduTech Student Portal Prototype (Lessons, Quizzes, Progress, Certificates)
├── ai-assistant.html         # Interactive TLC AI Learning & Consultation Assistant Chat Simulator
├── about.html                # TLC Brand Heritage, Ecosystem Philosophy & Faculty Showcase
├── contact.html              # Mayfair & Manchester Campuses, Contact Form, Hours & Directions
│
├── css/
│   ├── style.css             # Luxury Design System, Variables, Typography & UI Components
│   ├── responsive.css        # Multi-breakpoint rules (360px up to 1920px+)
│   └── animations.css        # Scroll reveals, Keyframes, Custom Cursor & Glassmorphism
│
└── js/
    ├── main.js               # Global Header Blur, Brand Switcher, Drawer, Modals, Steppers & Toast
    ├── animations.js         # IntersectionObserver Reveals, Before/After Slider & Custom Cursor
    └── dashboard.js          # Student Portal Engine, Interactive Quiz Evaluator & AI Chat Simulator
```

---

## 🚀 Key Features & Interactive Prototypes

- **Dual-Brand Switcher Pill**: Top-level header switcher (`TLC STUDIO` | `TLC ACADEMY`) that dynamically toggles brand color accents and navigation paths.
- **Multi-Step Stepper Workflows**:
  - *Booking Flow* (`booking.html`): Service Selection → Specialist Choice → Date/Time Picker → Client Details → Instant Confirmation.
  - *Student Application Flow* (`apply.html`): Personal Info → Educational History → Course Selection → Funding Method → Application Summary.
- **Interactive Before/After Slider**: Touch and mouse-draggable comparison slider showing raw hair texture versus silk press & color transformation.
- **Student EduTech Portal (`student-dashboard.html`)**:
  - Curriculum progress metrics (67% complete, 18/24 video lessons, 94% distinction grade).
  - Video lesson player simulation with completion toggles.
  - **Interactive Quiz Assessment Engine**: Evaluates answers live with instant score popups.
- **TLC AI Assistant Simulator (`ai-assistant.html`)**:
  - Interactive chat window with dynamic typing indicators, quick prompt triggers, context-aware trichology responses, and disclaimer banners.

---

## 💻 Tech Stack & Zero-Dependency Policy

- **HTML5**: Semantic markup, ARIA accessibility attributes, custom data attributes.
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, Fluid `clamp()` typography, glassmorphism, responsive breakpoints down to 360px.
- **Vanilla JavaScript (ES6+)**: IntersectionObserver API, local state management, custom stepper controls, DOM event delegation, zero external framework bloat.
- **Icons & Web Fonts**: Google Fonts (*Cormorant Garamond* & *Manrope*), FontAwesome 6 Icons CDN.

---

## 🛠️ How to Run Locally

Since this repository is **FRONTEND ONLY**, no backend, database, Node.js, or server setup is required.

### Method 1: Direct File Opening
1. Clone or download this repository.
2. Double-click `index.html` to open directly in any modern web browser (Chrome, Edge, Safari, Firefox).

### Method 2: Live Server (VS Code / Python)
- **VS Code**: Install the *Live Server* extension, right-click `index.html`, and select **Open with Live Server**.
- **Python**: Run the following command inside the root folder:
  ```bash
  python -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

---

## 🎨 Color Tokens Reference

```css
:root {
  --black: #090909;
  --off-black: #111111;
  --white: #FFFFFF;
  --off-white: #F7F5F2;
  --soft-neutral: #EBE7E2;

  --pink: #D53A74;          /* Luxury Studio Accent */
  --pink-dark: #A61751;
  --green: #153D32;         /* Dark Forest Academy Accent */
  --green-dark: #0D2B24;

  --gray-muted: #8A8A8A;
  --gray-text: #525252;
}
```

---

## 📄 License & Credits

© 2026 **TLC STUDIO LTD**. All rights reserved. Registered in England & Wales.  
*Designed & Developed by [Muhammad Ahmed](https://github.com/Muhammad-Ahmed-Developerr).*
