# 📘 Day 7 Journal – JavaScript Kickoff - Variables & Strings

## ✅ What I Did Today
- Da

## 🎨 What is JavaScript?
JavaScript is a programming language that brings interactivity and dynamic behavior to websites

## 🧩 What is the relationship between JS, HTML, and CSS?
While HTML and CSS are markup languages used to structure content and style elements on a page, Javascript is a programming language that enables interactivity, dynamic behaviors, and complex functionality, such as handling user input, animating elements.

## 🧩 What are the different data types in JavaScript?
1. ***Number**: represents both integer (e.g 19) and floating-point values (e.g 3.14)

2. **String**: sequence of characters, or text, enclosed in quotes (e.g "Hello, World")

3. **Boolean**: True/False 
4. **Undefined**: Variable has been declared but hasn't been given a value yet
5. **Null**: Variable is set to nothing and does not hold any value
6. **Object**: Hold collections of key-value pairs (or property-value).
<code> let book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
}; </code>

7. **Symbol**: Unique and cannot be changed
8. **BigInt**: Large numbers that exceed the limit of the **Number** Type

## 🧩 JS Variables
**Definition**: Variables are boxes that hold values

**Naming convention**:
1. Begin with a letter, an underscore ('_'), or a dollar sign ($)
2. Cannot start with a number
3. Cannot use names: let, const, function, or return as they are reserved for the language itself
4. Avoid exclamation points (!) and at symbol (@) for readability

**Defining variable**:
1. <code> let age = 25; </code> let allows users to update its value later
2. <code> const maxScore = 100 </code> const stands for constant, must include value and its value cannot be changed 
3. <code> var city ='Atlanta'</code> old syntax, similar to 'let' but has a wider scope, likely to cause problems.

## 🧩 JS Strings
**Definition**: string is a sequence of characters used to represent text data

**Defining Strings**:
1. Use single quotes: <code>let singleQuotes = 'String'</code>
2. Use double quotes: <code>let doubleQuotes = "String"</code>

**Note**:
- String in JS is immutable, or unable to be changed once created.

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

