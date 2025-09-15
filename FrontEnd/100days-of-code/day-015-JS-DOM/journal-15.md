# 📘 Day 15 Journal – JavaScript - API and DOM

## ✅ What I Did Today
Today I spent time diving deeper into how JavaScript interacts with HTML through the DOM. It’s starting to click, the DOM isn’t just a concept, it’s a living tree of nodes that I can actually manipulate. I learned how to use querySelectorAll() to grab descendant elements, and how the DOM Tree helps visualize the structure of nested tags and relationships.

Working with the DOM API felt empowering. I practiced creating new elements with createElement(), and updating content using innerText, textContent, and innerHTML. It was cool to see how each method behaves slightly differently depending on what I’m trying to change. I also explored how to add or remove nodes using appendChild() and removeChild(), and how to modify attributes with setAttribute().

It reminded me that even though I’m still building my confidence, I’m learning how to control the browser, not just read it. That’s a big shift. I’m starting to see how this connects to real-world web development, and it makes me excited to keep going.

## API
### Definition
An API (**Application Programming Interface**) is a set of rules that lets different software systems communicate. It’s like a waiter taking your order to the kitchen and bringing back your food, you don’t need to know how the kitchen works, just how to ask for what you want.

### Purpose of APIs
- Enable interaction between software components
- Allow developers to access data or services without needing to understand internal workings
- Power dynamic features in web apps (e.g., fetching weather, submitting forms, displaying maps)

### Types of APIs

#### Web APIs
- Web APIs are specifically designed for interacting with web browsers and servers
- Communicate over `HTTP`
- Example: `fetch()` to retrieve data from a server

#### Browser APIs
- Built into the browser
- Allow access to browser features
- Examples:
    - Window API – controls browser window
    - History API – manages browser history

#### DOM APIs
- Interact with and manipulate HTML elements
- Examples:
    - document.querySelector() – selects elements
    - element.style – changes CSS styles

#### Storage APIs
- Store data locally on the user's device
- Examples:
    - localStorage – persists data across sessions
    - sessionStorage – clears data when tab closes

#### Third-party APIs
- External services not built into the browser
- Require importing or connecting via HTTP
- Examples:
    - Google Maps API - embed interactive maps
    - OpenWeather API - fetch real-time weather data
    - Stripe API - handle payments securely
    - Twitter API - access tweets, profiles, and trends

## DOM API - Deep Dive

### What is the DOM?
- DOM stands for Document Object Model

- It’s a tree-like structure representing the HTML content of a webpage
```
Document
========

HTML 
-----

- Head
  - Title
- Body
  - H1
  - H2   
```
- JavaScript uses the DOM to read, modify, and respond to elements on the page

### Why the DOM Matters
- Enables dynamic interaction with web pages
- Powers features like click events, form validation, and live updates
- Forms the foundation for working with browser APIs

### Accessing DOM Elements
#### Methods
| Method                    | Description                                 |
|---------------------------|---------------------------------------------|
| `document.getElementById()` | Selects an element by its ID                |
| `document.getElementByTagName()` | Selects an element by its tag (e.g button, img, etc)               |
| `document.getElementByClassName()` | Selects an element by its class              |
| `document.querySelector()`  | Selects the first matching CSS selector     |
| `document.querySelectorAll()` | Selects all matching elements as a NodeList |
| `document.body.children` | Selects all elements within the body element |

Example"
```js
const button = document.getElementById("submitBtn");
const title = document.querySelector("h1");
```
### DOM Tree
- The DOM (Document Object Model) represents HTML as a hierarchical tree structure

- Each HTML element is a node in the tree

- Nodes are connected through parent-child and sibling relationships

#### Key Node Relationships
##### Root Node
- The <html> element is the root of the DOM tree
- All other elements are descendants of this root

##### Parent & Child Nodes
- A parent node contains other elements
- A child node is nested inside a parent

Example:
```
<body> is the parent of <p>, <p> is the child of <body> 
```

##### Sibling Nodes
Nodes that share the same parent

Example:
```
 <h1> and <p> are siblings under <body>

 <li> and <li> are siblings under <ul>
```

##### Ancestor & Descendant Nodes
Ancestor: any node higher up in the tree
Descendant: any node nested within another, directly or indirectly

Example:
``` 
<li> is a descendant of <body>;
<body> is an ancestor of <li>
```

### `querySelectorAll()` Method

#### Syntax
```js
document.querySelectorAll("selectors");
```
- Call it on the `document` object and pass a string with the CSS selectors as an argument.
- `selectors` must be a valid CSS selector string. Otherwise, a `SyntaxError` exception will be thrown.

#### Expected Output 
- `querySelectorAll()` returns a `NodeList` object, a collection of nodes that match the specified CSS selector. If no matches found, it returns an empty list
- The elements will be in the order in which they appear in the HTML document

#### Example
1. All elements with a specific class
```js
document.querySelectorAll(".class");
```
2. All elements with a specific ID
```js
document.querySelectorAll("#id");
```
3. All elements of a specific type
```js
document.querySelectorAll("div");
```
4. All elements with a specific attribute, like all links that take users to a specific URL:
```js
document.querySelectorAll("a[href='link']");
```
5. All list items within the unordered list element with the class `ingredients`
```js
document.querySelectorAll("ul.ingredients li");
```
6. `NodeList` Example

```js
// NodeList(3)
{
  0: `<li>Flour</li>`,
  1: `<li>Cheese</li>`,
  2: `<li>Water</li>`,
  length: 3,
}
```

### Create New Nodes
#### `innerHTML`
- Directly injects HTML as a string
    - This string has to have all the markup necessary to represent the nodes and the structure that you want to create. You can think of it as writing HTML within a string.
- This is risky if inserting user-generated content (can lead to XSS vulnerabilities)
    - `innerHTML` replaces all existing content inside the element

- Example
```js
// Select the element by its ID
const container = document.getElementById("container");
// Set the innerHTML of this element
container.innerHTML = "<p>Hello World</p>";
```
#### `createElement()`
- Create new element by specifying its tag name
- Returns a new `HTMLElement object`if the document is an HTMLDocument \<!DOCTYPE html\>. Else it returns an `Element` object
- This doesn't overwrite existing content. Instead once this new element is ready, it can be added to the DOM as a child of another existing element using the `appendChild()` method

- Example
```js
// Create an image by passing the 'img' tag as a string to createElement
const newPara = document.createElement("p");
newPara.textContent = "Hello World";
container.appendChild(newPara);
```

### Access, Modify, Update Content of an HTML in JavaScript
#### `innerText`
- `innerText` only returns the text that is visible at the particular moment when the string is requested. If a child element is hidden, its text won't be visible.

```html
<! HTML file>
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
  <p hidden>I'm in shadow</p>
</div>
```
```js
// JS file
const container = document.getElementByID("container");
console.log(container.innerText);
// Output:
// Hello, World!
// I'm learning JavaScript
```

#### `textContent`
- `textContent` returns the plain text content of an element, including **all the text** within its descendants (regardless of whether it's visible or hidden)

```html
<! HTML file>
<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
  <p hidden>I'm in shadow</p>
</div>
```
```js
// JS file
const container = document.getElementByID("container");
console.log(container.textContent);
// Output:
// Hello, World!
// I'm learning JavaScript
// I'm in shadow
```

### Add and Remove Nodes from the DOM
#### `appendChild()`
- The `appendChild()` method is used to add a node to the end of the list of children of a specified parent node.

```js
// 1. Access the desired ID element in the HTML
const dessertsList = document.getElementById("desserts");

// 2. Create a new Element (list item) that will be included in the ID element  
const listItem = document.createElement("li");

// 3. Add content to the new Element
listItem.textContent = "Cookies";

// 4. Add the list item to the end of the dessert section
dessertsList.appendChild(listItem);
```

#### `removeChild()`
- The `removeChild()` removes a node from the DOM

```html
<! HTML file>
<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>

```
```js
// Remove the last paragraph in the id section

// 1. Access the section element
const sectionE1 = document.getElementByID("example-section")

// 2. Access the last paragraph
const lastParagraph = document.querySelector("#example-section p:last-of-type");

// 3. Remove the last paragraph
sectionE1.removeChild(lastParagraph);
```

### Interfaces: `Navigator`, `Window`, `Document`
- `Interface` is a collection of methods and properties that define a particular object

#### `Navigator` interface
- This provides information about the browser environment, such as the user agent string, the platform, language, and the version of the browser
    - The `userAgent` is a text string that identifies the browser and operating system being used
    - The `language` property returns the language of the browser. This is used to display content in the user's preferred language

```js
console.log(navigator.userAgent) // info about the browser and operating system
console.log(navigator.language) // language code of the browser, e.g `en-US` for English USA
```

#### `Window` Interface
- This interface represents the browser window that contains the DOM document.
- It provides methods and properties for interacting with the browser window, such as resizing the window, opening new windows, and navigating to different URLs
    - `innerWidth` property returns the width of the  browser window in pixels (e.g `800` = 800 pixels wide)
    - `location` property returns the information about the current URL of the browser window
- This interface can be used without `Window` as it is automatically available in the global scope of the JS code

```js
console.log(window.innerWidth); // width of the browser
console.log(window.location); // current URL
console.log(location); // current URL
```

#### `Document` Interface
- This interface represents the DOM document that is displayed in the browser window
- It provides methods and properties for interacting with the DOM, such as selecting elements, creating new elements, and modifying the element's content

```js
console.log(document.children);
console.log(document.getElementByID);
```

### Add Attributes to HTML in JS
#### `setAttribute()`
- This is used to add a new attribute or update the value of an existing attribute on an HTML element

##### Adding a new attribute
```js
// 1. Get access to the element that will be set attributed
const para = document.getElementById('para');

// 2. User setAttribute() to add the desired attribute and its value
para.setAttribute("class","my-class")
// this is equal to class = "my-class" in HTML
```
##### Updating existing attribute
```js
// 1. Get access to the existing attribute
const divE1 = document.querySelector(".my-class");
divE1.setAttribute("class","example");
// Now the class attribute is updated to `example` from `my-class`
```

