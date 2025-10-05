# 📘 Day 16 Journal – JavaScript - Event Object
## ✅ What I did
Today’s learning was tough—wrapping my head around event objects, animation loops, and the Canvas API definitely stretched me. But once I got the cat to walk across the screen using animate() and requestAnimationFrame(), it felt like magic. Seeing code come to life reminded me why this journey is worth it. It’s challenging, yes—but also incredibly exciting when things finally move.

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

### Style Manipulation
Once an event (like a click or keypress) is captured by an event handler, you can use the Event Object to identify the target and then manipulate its appearance using:

#### `element.style`
- Directly modifies inline styles of the element
- Can override CSS rules and become hard to maintain 

```js
element.style.backgroundColor = 'blue'
element.style.display ='none'
```
#### `element.classList`
- A read-only property that can be used to add, remove, or toggle classes on an element.
- Can be used to add multiple classes by passing them as arguments to the `classList.add()` method
- Remove a class from element with `classList.remove()`
- To toggle a class on an element, use `classList.toggle()`

```js
// add the `highlight` class to the paragraph element using `classList.add()`
const paraE1 = document.getElementById('para');
paraE1.classList.add("highlight");

// add multiple classes to the paragraph element
paraE1.classList.add('class1', 'class2', 'class3');

// remove class from the paragraph elemet
paraE1.classList.remove('class1');
```

### `DOMContentLoadedEvent` vs `load`

The `DOMContentLoaded` event is fired when everything in the HTML document has been loaded and parsed.
  - If you have external stylesheets, or images, the DOMContentLoaded event will not wait for those to be loaded. It will only wait for the HTML to be loaded.
  - Unlike `load` event which waits for everything to be loaded

### Delay - Repeat Manipulation
#### `setTimeout` - `clearTimeOut`
- `setTimeout` delays an action for a specified time
- `clearTimeout()` stops a timeout by taking the timeout ID

```js
setTimeout(function, delay (in milliseconds))
```

```js
const timeOut = setTimeout(() => {
  console.log("This runs after 3 seconds");
}, 3000);

clearTimeout(timeOut)
```

#### `setInterval`- `clearInterval`
- `setInterval` keeps repeating a function at a set interval
- Best for creating an animation that moves continuously or refreshing stock data.
- Stop the repeat with `clearInterval()`by passing the interval ID as argument into the method

```js
setInterval(function, delay (in milliseconds));
```
```js
setInterval(() = {
  console.log("This runs every 2 seconds")
}, 2000);
// This runs every 2 seconds
// This runs every 2 seconds
// This runs every 2 seconds
```

```js
const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000;)

setTimeOut(() => {
  clearInterval(intervalID);
}, 5000); // stop the repeat after 5 seconds
```
### Animation Loop - `requestAnimationFrame()`
- A browser API that schedules a function to run before the **next screen repaint**, aka the moment when the browser refreshes the visual display of the web page, usually around 60 times per second (60fps)
- Ideal for smooth, efficient animations (typically ~60 frames per second).
- Replaces older timing methods like setInterval() for better performance.

#### How it works
1. Define an `update()` function to change styles or positions.
2. Define an `animate()` function that:
- Calls update()
- Recursively calls requestAnimationFrame(animate)
3. Kick off the loop with `requestAnimationFrame(animate)`

### Web Animation API (WAAPI) - `animate()`
- WAAPI allows user to create and control animations directly within JS using `animate()` method.
- It provides more flexibility than CSS animations, especially for dynamic, interactive, or programmatically controlled effects.

```js
element.animate(keyframes, options);
```
- `keyframes`: an array or object defining the animation steps (e.g., { opacity: [0, 1] })

- `options`: timing settings like duration, iterations, easing
#### CSS animations vs WAAPI
| Feature                  | CSS Animations                          | WAAPI (`animate()`)                            |
|--------------------------|------------------------------------------|------------------------------------------------|
| Syntax                   | Declarative (in CSS)                     | Imperative (in JS)                             |
| Ideal for                | Simple, automatic effects                | Interactive, controllable animations           |
| Control (pause, reverse) | Limited                                  | Full programmatic control                      |
| Use cases                | Hover effects, transitions               | Click-based effects, scroll triggers, sliders  | 

#### Animation constructor
- The instance methods of the Animation constructor include:

| Method        | Description                                                                 | Use Case Example                              |
|---------------|-----------------------------------------------------------------------------|-----------------------------------------------|
| `play()`      | Starts or resumes the animation                                             | Resume after pause                            |
| `pause()`     | Pauses the animation                                                        | Stop animation on hover out                   |
| `reverse()`   | Reverses the direction of the animation                                     | Toggle open/close animation                   |
| `finish()`    | Jumps to the end of the animation and applies final styles                  | Instantly complete animation                  |
| `cancel()`    | Stops the animation and removes its effects from the element                | Reset animation state                         |

- The instance properties includes:

| Property        | Description                                                                 | Use Case Example                              |
|------------------|-----------------------------------------------------------------------------|-----------------------------------------------|
| `playbackRate`   | Speed multiplier (e.g., `2` = twice as fast)                               | Speed up or slow down animation               |
| `currentTime`    | Current time (in ms) of the animation’s progress                           | Sync with external timer                      |
| `startTime`      | Timestamp when the animation started                                       | Debugging or syncing multiple animations      |
| `effect`         | The KeyframeEffect object controlling the animation                        | Modify keyframes dynamically                  |
| `timeline`       | The timeline the animation is linked to (usually `document.timeline`)      | Advanced control over timing                  |
| `playState`      | Current state: `"idle"`, `"running"`, `"paused"`, `"finished"`             | Conditional logic based on animation status   |
| `finished`       | A Promise that resolves when the animation finishes                        | Trigger next action after animation ends      |
| `onfinish`       | Callback function when animation completes                                 | Show message or trigger next animation        |
| `oncancel`       | Callback function when animation is canceled                               | Reset UI or log cancellation                  |

### Canvas API
The Canvas API lets you draw graphics directly in JavaScript using the \<canvas> HTML element.

It’s ideal for creating shapes, text, animations, games, and visualizations.

The canvas is a blank drawing surface that you manipulate using JavaScript.

### Dialog Element
- `dialog` let users display important info or actions to users.
  - A **modal dialog**: a type of dialog that forces the user to interact with it before they can access the rest of the application or webpage
  - A **non-modal dialog**: allows the user to continue interacting with other parts of the page or application even when the dialog is open

