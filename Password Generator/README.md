# Modern Password Generator
A sleek, glassmorphism-style Password Generator built using **HTML, CSS, and JavaScript**.

This project allows users to generate secure, customizable passwords with adjustable length and character options including uppercase letters, lowercase letters, numbers, and symbols.


## Live Features
- Adjustable password length (8–30)
- Include Uppercase letters
- Include Lowercase letters
- Include Numbers
- Include Symbols
- One-click Copy to Clipboard
- Modern Glassmorphism UI
- Animated Gradient Background Blobs
- Instant Password Generation


## Project Preview
### Before Generating Password
<p align="center">
  <img src="Project Preview/Before Generating Password.png" alt="Password Generator Before Generate" width="800"/>
</p>

### After Generating Password
<p align="center">
  <img src="Project Preview/After Generating Password.png" alt="Password Generator After Generate" width="800"/>
</p>


## Technologies Used
- **HTML5** – Structure  
- **CSS3** – Styling & Glassmorphism UI  
- **JavaScript (ES6)** – Password Logic & DOM Manipulation  


## How It Works
1. User selects password length using the slider.
2. User chooses character types using toggle switches.
3. When "Generate Password" is clicked:
   - All selected character sets are combined.
   - A random password is generated using `Math.random()`.
4. User can copy the password using the "Copy" button.
5. Clipboard API (`navigator.clipboard.writeText()`) handles copying securely.


## Learning Outcomes
This project helped practice:
- DOM Selection & Manipulation
- Event Listeners
- Conditional Logic
- Random Value Generation
- Modern CSS UI Design


## UI Design Highlights
- Glassmorphism Container
- Animated Floating Gradient Blobs
- Smooth Hover Effects
- Modern Toggle Switches
- Gradient Buttons


## Author
**Karan Roshan**