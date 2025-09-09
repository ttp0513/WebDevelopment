# 📘 Day 16 Journal – JavaScript - Event Object

## Event Object
#### Definition
The Event Object is a special object automatically passed to event handler functions.

It contains information about the event that occurred and methods to control its behavior.

It’s triggered when a user interacts with the web page (e.g., clicks, types, scrolls).

### Always-Have Properties
#### `type`
- Describes the kind of event that occurred.
- These values will correspond to the same values you might pass to `addEventListener()`
    - `"keydown"`
    - `"click:`
    - `"submit"`
#### `target`
- Refers to the DOM element that triggered the event.
    - `document`
    - `window` 
    - `event.target` => often used to access the clicked or typed element

### Common Methods
#### `preventDefault()`
Cancels the default action (e.g., form submission, link navigation)

#### `stopPropagation()`
Prevents the event from bubbling up to parent elements

#### `addEventListener()`
Listen for event and respond to them
It takes two arguments:
- First argument: the event listened for
- Second argument: the function that will be called when the event occurs (this can be **null** or object that use `EventListener` interface)
```js
element.addEventListener("click", ()=> {
  // code to run when the click event occurs
})
// or 
function handleClick {
  //code run when the click event occurs
};
element.addEventListener("event", handleClick);
```

#### `removeEventListener()`
Used to remove an event listener that was previously added to an element using the `addEventListener()` method.
This takes 2 arguments, with a 3rd as optional:
- First argument: the event to remove
- Second argument: function that was previously added
- Third argument: either `options` or `useCapture`
  - `options`: an object that specifies the options for the event listener, such as whether the event listener should be passive or once
  - `useCapture`: a boolean value that specifies whether the event should be captured during the event propagation phase

##### Real-world usage:
- Removing event listeners when a modal is closed in a web application or when a user logs out of an application

#### Special Case: `FetchEvent`
- Used in **Service Workers** (not typical in basic DOM events).
- Contains a request property representing the network request that triggered the event.

```js
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Stops form from submitting
  console.log("Form submitted:", event.target);
});
```

## Event Handlers
### `event.target.value`
event: The object automatically passed to an event listener.

target: The HTML element that triggered the event.

value: The current value of that element (usually from an \<input>, \<textarea>, or \<select>)

```js
element.addEventListener("eventType", function(event) {
  const inputValue = event.target.value;
});
```
#### Common Use Cases
1. Capturing user input in real time (input, change)
2. Form validation
3. Search bars
4. Live filtering or updating UI

### Inline Event Handlers
- Inline event handlers (`onclick`) are special attributes on an HTML element that are used to execute JavaScript code when an event occurs.

- Inline event handlers can only be used to attach one event listener to an element

```js
<button onclick="alert('Hello World!')">Show alert</button>
// When the user clicks on the button, the alert function is called and an alert dialog is displayed with the message Hello World!.
```