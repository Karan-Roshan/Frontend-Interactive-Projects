# JavaScript FAQs Accordion
A clean, accessible FAQ accordion component built with vanilla HTML, CSS, and JavaScript. Designed to present frequently asked questions about JavaScript in a polished, interactive card layout with smooth expand and collapse animations.

<p align="center">
  <img src="Project Preview/Preview 1.png" alt="JavaScript FAQs Accordion Preview" width="700">
</p>


<p align="center">
  <img src="Project Preview/Preview 2.png" alt="JavaScript FAQs Accordion Preview" width="700">
</p>

## Overview
This project presents a set of JavaScript-related questions and answers inside a single expandable accordion interface. Only one answer is visible at a time by default, keeping the interface tidy and easy to scan. The design uses soft gradients, rounded cards, and refined typography to create a professional, modern look.

## Features
- Fully accessible markup using semantic HTML and ARIA attributes (`aria-expanded`, `aria-controls`)
- Smooth CSS grid-based expand and collapse transitions
- Rotating icon indicator for open and closed states
- Responsive layout that adapts to smaller screen sizes
- Respects the `prefers-reduced-motion` setting for users who prefer reduced animation
- Keyboard-focus styling for improved usability
- No external JavaScript dependencies or frameworks

## Technologies Used
- HTML5
- CSS3 (Custom Properties, Grid, Media Queries)
- Vanilla JavaScript (ES6)
- Google Fonts (DM Sans, Playfair Display)

## Getting Started

### Prerequisites
No build tools or dependencies are required. Any modern web browser will run this project.

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repository-name.git
   ```
2. Navigate into the project directory:
   ```
   cd your-repository-name
   ```
3. Open `index.html` directly in your browser, or serve it using a local development server of your choice.

## Usage
Click on any question to expand its answer. Clicking another question will collapse the currently open answer and expand the selected one, keeping only a single answer visible at a time.

## Accessibility
The component uses semantic `button` elements for each question and updates the `aria-expanded` attribute dynamically to reflect the current state. This ensures compatibility with screen readers and keyboard navigation. Users with a reduced motion preference set in their operating system will see instant state changes instead of animated transitions.

## Browser Support
This project uses modern CSS features such as CSS Grid and custom properties. It is supported in all current versions of major browsers, including Chrome, Firefox, Safari, and Edge.