# PhucReigns Portfolio

A modern, responsive, and visually stunning portfolio website for PhucReigns, a Software Engineer & Creative Problem Solver.

![PhucReigns Portfolio](image/avatar.png)

## Overview

This project is a personal portfolio showcasing professional skills, featured projects, and contact information. It features a futuristic dark-theme aesthetic with interactive elements and high-performance animations.

## Key Features

- **Interactive Starry Sky**: Each section features a dynamic, twinkling starry background powered by [Three.js](https://threejs.org/).
- **Interactive Creature**: A global, cursor-following "creature" powered by [Anime.js](https://animejs.com/) that adds an organic, futuristic feel.
- **Responsive Navigation**: A sleek, translucent header that remains fixed and optimized for all screen sizes.
- **Scroll Progress Indicator**: A top-bar indicator that visually tracks the user's progress through the page.
- **Dynamic Skill Bars**: Animated progress bars that trigger when the user scrolls into the skills section.
- **Project Showcases**: Hover-enabled project cards with direct links to GitHub repositories.
- **Parallax Effects**: Subtle parallax movements on the hero section for enhanced depth.
- **Typed Animations**: Intersection-observed fade-in and slide-up animations for a smooth content discovery experience.

## Technology Stack

- **HTML5**: Semantic structure for SEO and accessibility.
- **CSS3 (Vanilla)**: Advanced styling, including glassmorphism, HSL-tailored colors, and complex keyframe animations.
- **JavaScript (ES6+)**: Core logic, interactive elements, and DOM manipulation.
- **Three.js**: Used for rendering the 3D starry backgrounds across the various sections.
- **Google Fonts**: "Inter" font family for premium typography.

## File Structure

- `index.html`: The main entry point containing the page structure and Three.js initialization logic.
- `styles.css`: Comprehensive styling for layout, components, and animations.
- `script.js`: Interactive functionality including smooth scrolling, scroll observers, and animation triggers.
- `image/`: Directory containing project images and personal avatars.

## Technical Implementation Details

### Starry Background (Three.js)
The website uses a custom Three.js renderer in each section. It generates a `BufferGeometry` with 2000 points (stars) that twinkle by modulating their scale over time using a sine wave animation loop.

### Animations
CSS keyframes like `pulseGlow`, `sparkle`, and `float` are used to give the site a "living" feel. The `IntersectionObserver` API in JavaScript is heavily utilized to ensure animations only run when the elements are in view, optimizing performance.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Open `index.html` in any modern web browser.

## Author

**PhucReigns**
- [GitHub](https://github.com/phucreigns)
- [LinkedIn](https://www.linkedin.com/in/nguyenxuanphuc07/)
- Email: xuanphuc3712@gmail.com

---
Built with ❤️ and modern web technologies.
