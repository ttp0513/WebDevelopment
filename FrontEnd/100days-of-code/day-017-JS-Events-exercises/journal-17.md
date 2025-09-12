# 📘 Day 17 Journal – JavaScript - Event Object (Cont + Exercises)
## ✅ What I did
Today’s was all about practicing JS Event and learn a bit more about Event bubbling and delegation, which are two cool concepts. 

## Change Event
- The Change Event is a special event which is fired when the user modifies the value of certain input elements. 
    - When a checkbox is ticked or unticked.

    - When a radio button is ticked.

    - When the user makes a selection from something like a date picker or dropdown menu.

    - When an input loses focus (the user tabs to the next field, or clicks out of the form) after the user has changed the value.

    - When the user otherwise confirms the value, such as by hitting enter after typing some text.

### Difference between change event and input event
| Event   | Fires when...                          | Works on                                      |
|---------|----------------------------------------|-----------------------------------------------|
| `input` | Every time the user types or edits     | Text fields, textareas                        |
| `change`| Only when the value is finalized       | Checkboxes, radios, selects, text inputs (on blur or Enter) |
 
**Why This Matters**
If you're building something like:

1. Live search → use input

2. Form validation after user finishes typing → use change

3. Tracking checkbox or dropdown selections → change is perfect

## Event Bubbling
When an event (like a click) occurs on a nested element, it bubbles up through its parent elements.

Example: Clicking a \<span> inside a \<p> will trigger the \<span>'s listener first, then the \<p>'s listener.

The event travels from the target element up through the DOM tree.

You can stop this bubbling using `event.stopPropagation()`.
```js
js
span.addEventListener("click", (event) => {
  console.log("Span clicked");
  event.stopPropagation(); // prevents bubbling to parent
});

p.addEventListener("click", () => {
  console.log("P clicked");
});
```

## Event Delegation
Instead of attaching listeners to many child elements, you attach one listener to a common parent.

You then use `event.target` to figure out which child was clicked.

This is efficient, especially for dynamic content (e.g., adding new \<span>s later)

```html
<p>
  <span>Click me~!</span>
  <span>Click me~!</span>
  <span>Click me~!</span>
</p>
```
```js
// Without event delegation
const p = document.querySelector("p");
const span = document.querySelector("span");
p.addEventListener("click", (event) => {});
span.addEventListener("click", (event) => {
  event.target.style.color = "red";
});

// With Event Delegation
const p = document.querySelector("p");
p.addEventListener("click", (event) => {
  event.target.style.color = "red";
});
// delegate the handling of the span clicks to the parent p element.
```