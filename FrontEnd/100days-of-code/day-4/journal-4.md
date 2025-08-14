# 📘 Day 4 – Web Development Learning Summary

## 📝 Summary  
Today was a super rewarding day. I got to dive into **CSS typography** and **color/background styling**, and it honestly made my pages come alive and I felt like I was painting with code! I played around with different font families, sizing units, text alignment, spacing, transformations, and decorations. Importing custom fonts from Google Fonts felt like unlocking a new level of design control.

To put everything into practice, I completed the **Nutrition Label** project, which really helped me connect the dots between typography, layout, spacing, and semantic structure. I also built a mini **Hero Section** to experiment with backgrounds and layout flow.

I’m genuinely proud of how much I’ve learned today. These skills are starting to feel natural, and I can see my design instincts growing with each project.

---

## 🔤 Font Styling

### Font Properties
- `font-family`: Defines the typeface (e.g., serif, sans-serif, monospace).
- `font-size`: Controls text size using units like `px`, `em`, `rem`, `vw`.
- `font-weight`: Adjusts thickness (e.g., 300 = light, 800 = bold).
- `font-style`: Sets italic or normal style.

### Sizing Units
- `px`: Fixed size.
- `em`: Relative to parent element.
- `rem`: Relative to root (`html`) font size.
- `vw`: Relative to viewport width.

---

## 📐 Text Alignment & Spacing

### Alignment
- `text-align`: Aligns text (`left`, `center`, `right`, `justify`).

### Spacing
- `letter-spacing`: Controls space between characters.
- `word-spacing`: Controls space between words.
- `line-height`: Adjusts vertical spacing between lines.

---

## 🔠 Text Transform & Decoration

### Transform
- `text-transform`: Alters case (`uppercase`, `lowercase`, `capitalize`).

### Decoration
- `text-decoration`: Adds styling (`underline`, `line-through`, `none`).

---

## 🎨 CSS Color & Background

### Color
- color: red = Named color
- color: #3498db =  Hexadecimal color (00: lowest intensity to FF: highest intensity, #000000 -> #ffffff)
- color: rgb(255, 99, 71) = RGB: Red, Green, Blue (0–255)
- color: hsl(120, 100%, 25%) = HSL: Hue, Saturation%, Lightness%

---

### 🎨 Color Theory: Secondary & Triadic Colors

- **Secondary colors** are made by mixing two primary RGB colors:
  - Red + Green = Yellow (`#FFFF00`)
  - Green + Blue = Cyan (`#00FFFF`)
  - Blue + Red = Magenta (`#FF00FF`)

- **Triadic colors** are three evenly spaced hues on the color wheel:
  - Example: Red (`#FF0000`), Blue (`#0000FF`), Yellow (`#FFFF00`)
  - Offers strong contrast while maintaining harmony—great for UI accents and section separation.

---

### Text & Background Styling
- `color`: Sets the text color.
- `background-color`: Sets the background color of an element.
- `background-image`: Adds an image as the background.
- `background-repeat`: Controls repetition (`repeat`, `no-repeat`, `repeat-x`, `repeat-y`).
- `background-size`: Defines how the image scales (`cover`, `contain`, or specific dimensions).
- `background-position`: Aligns the image (`center`, `top left`, etc.).
- `background-attachment`: Controls scroll behavior (`scroll`, `fixed`, `local`).

---

### Gradient Backgrounds
background: linear-gradient(to right, #ff7e5f, #feb47b); 
Noted: Can add more than 2 colors and direction can be 90deg, 180deg, etc.

---
## 🌐 Google Fonts Integration

Imported custom fonts using `<link>` from [Google Fonts](https://fonts.google.com), then applied them via `font-family`. This allows for consistent branding and improved aesthetics across devices.

---
## 🧪 Mini Project: Nutrition Label
Completed the mini projects **Nutrition Label** and **Hero Section**, which applied:
- Semantic HTML structure (<section>, <header>)
- Font styling and spacing
- Box model concepts (margin, padding, border)
- Text alignment and decoration
- Responsive design principles
- Color and background styling for visual clarity
This project helped me see how typography, layout, and color work together to create clear, accessible content.

---
## 🧠 Key Takeaways
- Typography is more than aesthetics. It directly impacts usability and clarity.
- Use `em` and `rem` for scalable, responsive font sizing.
- `text-transform` and `text-decoration` are powerful tools for emphasis and hierarchy.
- Google Fonts offer design flexibility and brand consistency.
- Spacing properties (`letter-spacing`, `word-spacing`, `line-height`) enhance readability.
- Background styling adds depth and visual interest—especially with gradients and images.
- Semantic HTML combined with thoughtful typography and color creates professional, accessible interfaces.

