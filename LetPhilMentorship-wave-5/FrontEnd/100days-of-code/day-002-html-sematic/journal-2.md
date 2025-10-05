# Day 2 – Web Development Learning Summary

## 📝 Summary
- Today, I deepened my understanding of CSS by exploring layout techniques and advanced selectors. I learned how to use **Flexbox** to create responsive designs, mastered various **selectors and combinators** for precise targeting, and discovered the power of **pseudo-classes** and **pseudo-elements** for dynamic styling. 

- Completing **Styled Card**,  **Cafe Menu**, and playing **CSS Diner** helped reinforce these concepts through interactive practice. This knowledge significantly improved my ability to style web pages with flexibility and control.

---

## 🧱 Layout: Flexbox
**Purpose**: Enables flexible, responsive layouts.

**Key Properties**:
- `display: flex`
- `flex-direction`: `row` | `column`
- `justify-content`: `flex-start` | `center` | `space-between` | `space-around`
- `align-items`: `stretch` | `center` | `flex-start` | `flex-end`
- `flex-wrap`: `nowrap` | `wrap`

## 📦 Box Model
**Purpose**: Defines how elements are sized and spaced.

**Components**:
- `content`: The actual text or image inside the element.
- `padding`: Space between the content and the border.
- `border`: The edge around the padding.
- `margin`: Space outside the border, separating the element from others.

### Additional Styling
- `box-sizing: border-box`: Includes padding and border in the element’s total width and height.
- `box-shadow`: Adds depth and elevation to elements.
  - Example: `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);`
- `border`: Defines the edge style, width, and color.
  - Example: `border: 1px solid #ccc;`
- `margin`: Controls spacing outside the element.
  - Example: `margin: 16px;`

**Tip**: Use `box-sizing: border-box` to include padding and border in the element’s total width and height.

---
---

## 🎯 Selectors

### Basic Selectors
- Universal: `*`
- Type: `div`, `p`, `h1`, etc.
- Class: `.className`
- ID: `#idName`

### Combinators
- Descendant: `div p`
- Child: `div > p`
- Adjacent sibling: `div + p`
- General sibling: `div ~ p`

---

## ✨ Pseudo-Classes
Used to style elements based on state or position:
- `:hover` – when user hovers over an element
- `:focus` – when an element is focused
- `:nth-child(n)` – targets the nth child of a parent
- `:first-child`, `:last-child`, `:not()`, etc.

---

## 🧩 Pseudo-Elements
Used to style parts of an element:
- `::before` – inserts content before the element
- `::after` – inserts content after the element
- `::first-letter`, `::first-line` – stylize specific parts of text

---

## 🎮 Practice Resources
- [CSS Diner](https://flukeout.github.io) – Interactive game to test my learnings of CSS selectors and combinators
- [FreeCodeCamp Learn Basic CSS By Building a Cafe Menu](https://www.freecodecamp.org/learn/2022/responsive-web-design#learn-html-by-building-a-cat-photo-app) - Practice CSS and HTML to build a beautiful menu (my 3rd project!)