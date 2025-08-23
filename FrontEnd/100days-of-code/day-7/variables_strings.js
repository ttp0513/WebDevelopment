// A variable is like a labeled container that stores data. You can name it, fill it with a value, and use it later in your code.

// Declaring a variable 

let name = "Name";      // Can be updated later
const age = 25;          // Constant, can't be reassigned
var city = "Atlanta";    // Older syntax, less commonly used now

// A string is a sequence of characters: letters, numbers, symbols, wrapped in quotes. It’s used to represent text.
let greeting = "Hello, world!";
let username = 'johnphan';
let message = `Welcome, ${username}!`; // Template literal with variable

// How to get the last character of a string using bracket notation?
let hisName = 'Alex';
let lastChar = hisName[hisName.length-1];
console.log(lastChar); //output = 'x'

// String Newline
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem); 
