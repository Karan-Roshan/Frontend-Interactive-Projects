# Project Technology Distribution
A sleek, animated circular progress bar UI built with **HTML**, **CSS**, and **vanilla JavaScript** — designed to visually represent skill or technology usage percentages using a neumorphic design style with animated gradient rings and count-up numbers.

<p align="center">
  <img src="Project Preview/Project Technology Distribution Preview.png" alt="Project Preview Screenshot" width="600">
</p>

---

## Features
- Circular progress rings with smooth gradient stroke animation
- Animated count-up percentage numbers synced to each ring
- Neumorphic (soft-UI) styling with inset/outset shadows
- Fully responsive flexbox layout
- Zero dependencies — pure HTML/CSS/JS

---

## Tech Stack
<table>
  <thead>
    <tr>
      <th>Technology</th>
      <th>Purpose</th>
      <th>Percentage Shown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML</td>
      <td>Markup structure</td>
      <td>31%</td>
    </tr>
    <tr>
      <td>CSS</td>
      <td>Styling, layout, gradient ring animation</td>
      <td>56%</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Count-up number animation logic</td>
      <td>13%</td>
    </tr>
  </tbody>
</table>

---

## Getting Started
1. Clone or download this repository.
2. Open `index.html` directly in your browser — no build step or server required.

```bash
git clone <your-repo-url>
cd project-technology-distribution
open index.html
```

---

## Customization
To change the displayed percentages, update **two places** so the ring animation and the counter stay in sync:

<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>File</th>
      <th>What to change</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><code>style.css</code></td>
      <td>Update the <code>stroke-dashoffset</code> end value in the relevant <code>@keyframes</code> block (e.g. <code>htmlAnim</code>)</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>script.js</code></td>
      <td>Update the target counter value (e.g. <code>HTML_counter &gt;= 31</code>)</td>
    </tr>
  </tbody>
</table>

> 💡 **Tip:** Dash offset formula: `offset = 500 - (percentage / 100 * 500)`, based on a `stroke-dasharray` of `500`.