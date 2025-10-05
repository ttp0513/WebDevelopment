# 📘 Day 18 Journal – JavaScript - Asynchronous Programming
## ✅ What I Did Today


## Asynchronous Programming JS
### Definition
- Asynchronous events occur at different times, independently from each other

- In software, asynchronous are tasks that run in the background, independently from the main flow of the program.

### Advantages of asynchronous programming
- Asynchronous don't block the execution of the main program
- Helpful for tasks that may take a long time to run, such as fetching data from a remote server or processing large files.

### Differences between synchronous vs asynchronous
Synchronous code executes **sequentially**, while asynchronous code executes **concurrently**.

- Synchronous programming executes tasks one after another, blocking the execution of subsequent code until the current task finishes. It's straightforward and predictable, but not ideal for operations that take time = like fetching data from a remote server, because it can freeze the UI or delay responsiveness

- Asynchronous programming allows tasks to run independently of the main thread. It uses mechanisms like callbacks, promises, event listeners, and `async/await` to handle operations that take time without blocking the rest of the code.

To illustrate this more clearly, if we are fetching data from a remote server, it is recommended to use fetch() with async/await to wait for the response without freezing the UI. This keeps the app responsive and improves user experience

### `async` vs `defer` attributes in the `script` element

#### Why use it?
When you include a script in your HTML file,
```html
<script src="example.js"></script>
```
When the browser finds this script tag, it stops parsing the HTML, downloads the script, executes it, and then continues parsing the HTML. This can slow down the loading of your web page, especially if you have large scripts. This is where the `async` and `defer` attributes come in. 

Both attributes can **significantly improve page load times** by allowing the browser to continue parsing HTML while scripts are being downloaded in the background.

#### `async`
- Adding the async attribute to a script tag, the browser will:
1. Continue parsing the HTML while the script is being downloaded. 
2. Once the script is fully downloaded, the browser will pause HTML parsing
3. The browser will execute the script
4. After the script is executed fully, the browser resume parsing the HTML. 

##### Limitation:
- The `async` script is executed as soon as it's downloaded, so it may not run in the correct order which we desire

#### `defer`
- Adding the defer attribute to a script tag, the browser will:
1. Continue parsing the HTML while the script is being downloaded
2. Once the script is downloaded, it waits until the HTML parsing is complete
3. The browser will then execute the script

Note: defer script is executed in the order they appear in the HTML code

## Promises
### Definition
- Promise is an object that represents the eventual completion (or failure) of an asynchronous process and its value. 
- Instead of returning a value immediately, it returns a promise to deliver that value later.
- The value of `Promise` is not known when it is created. It's only known when the asynchronous process is completed

```Example
1. You place your order (start an async task).

2. You get a receipt (the promise).

3. Later, your food arrives (the promise is fulfilled), or the kitchen messes up (the promise is rejected).
```

### States of Promises
A promise can be in one of 3 states:
1. **Pending**: The operation is still in progress
2. **Fulfilled**: The operation completed successfully
3. **Rejected**: The operation failed

### How it works
#### `setTimeout()`
```js
// Create a promise that simulates an asynchronous operation
const aPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;

    if (success) {
      resolve('Operation successful');
    } else {
      reject('Operation failed');
    }
  }, 1000);
});

aPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
- `resolve(value)` signals that the asynchronous operation completed successfully
It passes a result (value) to the `.then() handler`.
- `reject(error)` signals the operation failed
It passes an error to the `.catch() handler`
- Only one of them (`resolve` vs `reject`) should be called per execution 

#### `.then()`
The .then() method is used in a promise to specify what should happen when the promise is fulfilled

#### `.catch()`
.catch() is used to handle any errors that occur. 
- In a Promise Chain, .catch() method should be at the end of the chain

### Promise Chaining
One of the powerful features of promises is that we can chain multiple asynchronous operations together.
Each `.then()` can return a new promise, allowing you to perform a sequence of asynchronous operations one after the other

## Fetch API
The Fetch API allows web apps to make network requests, typically to retrieve or send data to the server. 

### Common types of resources that are fetched from the network
- Weather data
- Professions List data
- Country list
- Images (fetched statically or dynamically based on user actions)
- Text files, configuration files, log files, entire documents
- Audio and Video files

### What type of data is commonly received from a fetch request to an API?
- JSON

### How Does the Fetch API Work with Common HTTP Methods and res.json()?
#### GET: retrieve data
- This is used to retrieve data from a server
- `fetch()` default is GET
- Cannot use the data retrieved from GET directly. The data needs to convert to a JSON format

```js
fetch('https://api.example.com/data')
.then(response => response.json()) // Parse the response as JSON
.then(data => console.log(data))
```
- response: a promise

#### POST: send data
- This is used to send data to a server to create a resource

```js
// Sending a POST request to create a new user
fetch('https://api.example.com/users', {
    method: 'POST',
    // Set headers
    headers: {
        'Content-Type': 'application/json',
    },
    // Include body with data we want to send
    // body needs to be a string
    body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com'
    })
})
```

#### PUT: update
- This is used to update existing resources of a server
```js
// Update resource ('name') with PUT request
fetch('https://api.example.com/users/45', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    // Change existing name to John Smith
    body: JSON.stringify({
        name: 'John Smith',
        email: 'john@example.com'
    })
})
```
#### DELETE: delete
- This is used to delete a resource from the server
```js
// Delete user 45 from the server
fetch('https://api.example.com/users/45', {
    method: 'DELETE',
})
```

## Async/Await

- `async` and `await` are built on top of **Promises**.
- They simplify writing and reading asynchronous code.
- An `async` function always returns a **Promise**.
- Inside an `async` function, you can use `await` to pause execution until a Promise resolves.

### Example: Delayed Greeting
```js
async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  // The `await` pauses execution inside the `async function`.
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
// this console runs first
console.log("First Printed Message!");
```

### Error Handling with Async/Await
Instead of using `.catch()` like with Promises, use `try/catch blocks`:
```js
async function fetchUserData() {
  try {
    // 1st await is for fetching data
    let response = await fetch(`https://api.example.com/users`);
    // 2nd await is used for JSON parsing
    let userData = await response.json();
    console.log(userData);
  } // errors during either await step are caught in catch()
  catch (error) {
    console.log("Error fetching user data:", error);
  }
}
```
## JavaScript Engine
- A **JavaScript engine** reads, understands, and executes your code.
- It acts as a **converter**, turning human-readable JavaScript into instructions the computer can execute.
- The most well-known engine is **V8**, developed by Google and used in Chrome and Node.js.

### How It Works
1. **Parsing**: Reads the code line by line, checking for syntax errors.
2. **Compiling**: Converts code into **bytecode** or **machine code** for faster execution.
3. **Execution**: Runs the compiled code and performs the instructions.

## JavaScript Runtime
A JavaScript runtime is the environment where your code runs.
The runtime extends JavaScript beyond basic syntax, enabling interaction with the outside world.

It includes:
- The JavaScript engine (e.g., V8, SpiderMonkey)
- Additional tools provided by the host (e.g., browser or Node.js)

### Runtime Features
- DOM manipulation (in browsers)
- Fetch API for network requests
- Timers (setTimeout, setInterval)
- File system access (in Node.js)

## Geolocation API
- A browser-provided API that allows websites to **request the user's geographic location**.
- Requires **explicit user permission** for privacy and security reasons.
- Commonly used in apps for maps, weather, local services, and personalized content.

### `getCurrentPosition`
- This method is used to collect the geographic location of the device

Takes two arguments:

- First Argument `position`: A success callback that receives a position object. Common properties:
    - **`latitude`**: The north-south position of the device on Earth, measured in degrees.
    - **`longitude`**: The east-west position of the device, also measured in degrees.
    - **`altitude`**: The device’s elevation above sea level, typically in meters (may be `null` if unavailable).
    - **`accuracy`**: The estimated precision of the location data, in meters.
    - **`speed`**: The current velocity of the device, in meters per second (useful for tracking movement).
    - **`heading`**: The direction the device is moving in, measured in degrees from true north.
    - Second Argument `error`: An error callback that handles failures (e.g., permission denied, timeout).

- Uses GPS, Wi-Fi, or IP address to determine location. Once the location is found, the success callback function is called with a position object.

```js
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  (error) => {
    console.log("Error:", error.message);
  }
);
```
#### Privacy Considerations
- Always inform users why location data is needed.

- Be transparent about how the data will be used.

- Respect user consent and avoid unnecessary tracking.

