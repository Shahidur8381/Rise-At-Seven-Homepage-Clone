# Rise at Seven Clone

A pixel-perfect, high-fidelity frontend clone of the award-winning search-first content marketing agency, [Rise at Seven](https://riseatseven.com/).

**🚀 Live Demo:** [https://rise-at-seven-clone.netlify.app/](https://rise-at-seven-clone.netlify.app/)

This project was built to replicate the stunning typography, intricate GSAP scroll animations, and premium responsive layouts found on the original site, without relying on automated site builders.

## Features

- **Pixel-Perfect Typography:** Replicates the exact custom font weights, tracking, and leading of the original agency site.
- **Cinematic Animations:** Uses `GSAP` and `gsap/ScrollTrigger` for complex enter-animations, scroll-linked text distortion, and element reveals.
- **Responsive Navigation:** A fully responsive, edge-to-edge mobile navigation system with sticky headers and sleek hamburger interactions.
- **Infinite Looping Carousels:** Custom CSS keyframes and `embla-carousel-react` for smooth, uninterrupted marquee and client logo scrolling.
- **Modern Tech Stack:** Built with React, Vite, TanStack Router, and Tailwind CSS.

## Getting Started

### Prerequisites
Make sure you have Node.js installed (v18 or higher recommended).

### Installation

1. Clone this repository to your local machine.
2. Install the dependencies using npm:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) (or the port specified in your terminal) in your browser to view the application.

### Building for Production

To create a production-ready bundle:

```bash
npm run build
```

This will compile the application into the `dist/` directory, which can be deployed to any static hosting service.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Routing:** TanStack Router
- **Styling:** Tailwind CSS + Custom CSS (`styles.css`)
- **Animations:** GSAP, ScrollTrigger, SplitType
- **Icons:** FontAwesome (via CDN) & Lucide React

## Disclaimer

This is a portfolio clone created for educational and demonstration purposes only. All branding, logos, copy, and original design concepts belong to [Rise at Seven Ltd](https://riseatseven.com/).
