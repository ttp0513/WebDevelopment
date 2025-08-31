# 📘 Day 7 Journal – JavaScript Kickoff - Variables & Strings

## ✅ What I Did Today
Today was a solid step forward in my JavaScript journey. I learned how it powers interactivity on websites and how it fits alongside HTML and CSS to create dynamic user experiences. I explored data types, practiced declaring variables, and experimented with string operations and <code>console.log</code>. I also compared inline vs external JavaScript and documented everything in a clean Markdown journal. It felt good to organize my thoughts and see how much I’ve absorbed. Small wins, steady progress.

## 🎨 What is JavaScript?
JavaScript is a programming language that brings interactivity and dynamic behavior to websites

## 🧩 What is the relationship between JS, HTML, and CSS?
While HTML and CSS are markup languages used to structure content and style elements on a page, Javascript is a programming language that enables interactivity, dynamic behaviors, and complex functionality, such as handling user input, animating elements.

## 🧩 What are the different data types in JavaScript?
## 🔢 Data Types in JavaScript

| Type      | Description                                      | Example                              |
|-----------|--------------------------------------------------|--------------------------------------|
| Number    | Integers and floating-point values               | `19`, `3.14`                         |
| String    | Text enclosed in quotes                          | `"Hello, World"`                     |
| Boolean   | Logical true/false values                        | `true`, `false`                      |
| Undefined | Declared but not assigned                        | `let x;`                             |
| Null      | Explicitly set to no value                       | `let y = null;`                      |
| Object    | Key-value pairs                                  | `{ title: "Gatsby", year: 1925 }`    |
| Symbol    | Unique and immutable identifiers                 | `Symbol('id')`                       |
| BigInt    | Large numbers beyond Number type limits          | `12345678901234567890n`              |

---

## 🧩 JS Variables
**Definition**: 
1. Variables are boxes that hold values
2. JS Variables are dynamic, or don't need to be specified the data type. The type is determined based on the value assigned to the variable (unlike Java or C++)

**Naming convention**:
1. Should be camelCase and begin with a letter, an underscore ('_'), or a dollar sign ($)
2. Cannot start with a number
3. Cannot use names: let, const, function, or return as they are reserved for the language itself.
4. Cannot contain space or special characters
5. Should be descriptive and meaningful, and avoid exclamation points (!) and at symbol (@) for readability
6. Variables are case-sensitive

**Defining variable**:
1. <code> let age = 25; </code> let allows users to update its value later
2. <code> const maxScore = 100 </code> const stands for constant, must include value and its value cannot be changed 
3. <code> var city ='Atlanta'</code> old syntax, similar to 'let' but has a wider scope, likely to cause problems.

## 🧩 JS Strings
**Definition**: string is a sequence of characters used to represent text data
- String in JS is immutable, or unable to be changed once created.

**Defining Strings**:
1. Use single quotes: <code>let singleQuotes = 'String'</code>
2. Use double quotes: <code>let doubleQuotes = "String"</code>

**String Index**
- Each character has its own index, or position, in a string and can be accessed using bracket notation []
- Index starts at 0, meaning the first character in the string has an index of 0

**String Newline**
- To create a newline in a string, use an escape sequence, or <code>\n</code>

**Escape String**
- To escape the inner quotes, placing a backslash (\ ) before the characters

**String Concatenation**
1. Use <code>+</code> operator, noted it can result in spacing issues
<code>let firstName = "John";
 let lastName = "Doe";
 let fullName = firstName + lastName;
  Output: "JohnDoe"</code>
<br>
2. Use <code>+=</code> operator, used when adding more text to the string
<code>let greeting = 'Hello';
greeting += ', John!';
Output: " Hello, John!"</code>
<br>
3. Use <code>concat()</code> function
<code>let str1 = 'Hello';
let str2 = 'World';
let result = str1.concat(' ', str2);
Output: "Hello, World"</code>

**String Interpolation & Template Literals**
*Template literals* is defined with backticks (`) 

*Syntax*: <code>\`A string ${variable} remaining string\`</code>

Strengths:
1. Inserting variables and expressions directly into a string
2. Much cleaner and easier to read
3. Support multiline strings (don't need to use \n)

**Substring**

*Definition*: Substring is a sequence of characters that appears in a larger string

*Locating substring*: use <code>indexOf()</code>

*Input of <code>indexOf()</code>*:
1. First argument: substring wanted
2. Second argument: starting position for the search. If not provided, starting at the start of the string.
Note: <code>indexOf()</code> is case-sensitive

*Output of <code>indexOf()</code>*:
1. Substring is found: returns index of the first occurrence of that substring
2. Substring is not found: returns -1


## 🖼️ Inline JS vs External JS
- **Inline JavaScript** is written directly inside the HTML file,  within a <code>< script></code> tag or even inside an HTML element’s attribute.
- **External JavaScript** is written in a separate .js file and linked to your HTML using a <code>< script></code> tag with a src attribute.

- **Use Case**
<table>
<th> Use Case
<th> Inline JS
<th> External JS
<tr>
<td>Quick test or prototype
<td> ✅ </td>
<td> ❌ </td>
</tr>
<tr>
<td>Large-scale web app
<td> ❌ </td>
<td> ✅ </td>
</tr>
<tr>
<td>Reusable code across pages
<td> ❌ </td>
<td> ✅ </td>
</tr>
<tr>
<td>Keeping HTML clean
<td> ❌ </td>
<td> ✅ </td>
</tr>
</table>

## 🖼️ JS Console.log 
**Definition**: <code>console.log()</code> is used to:
1. Display messages or output info to the browser's console
2. Log text or variables to the console, ensuring the code is running correctly
3. Debug and inspect code by developers
**Use**:
<code>console.log("Hello, world!");
let num = 5;
console.log(num);</code>

## JS Semicolon
**Definition**: Semicolons (";") indicate the end of a statement

**Why is it matter?**
1. Helps the compiler or interpreter parse the code correctly
2. Improve code readability, enabling more reliable and maintainable code
3. Help avoid errors related to Automatic Semicolon Insertion

## JS 'typeof' Operator
**Use**
- <code>typeof</code> allows users to see the data type of a variable or value in string
<code>let num = 42;
console.log(typeof num); // "number"</code>

**Bug**
When a variable = <code>null</code>, <code>typeof</code> returns the string "object"

