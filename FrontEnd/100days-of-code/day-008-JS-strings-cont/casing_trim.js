
let userInput = "   Welcome to the arena!   ";

// Task 1: Trim both ends
let cleaned = userInput.trim();
console.log(cleaned); 

let command = "aTtaCk";
// Task 2: Convert to lowercase for consistent command parsing
if (command.toLowerCase() === "attack") {
  console.log(" You strike the enemy!");
}

let rawName = "  tHOR  ";
// Task 3: Convert to Thor
let trimmed = rawName.trim();
let capitalized = trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();

console.log(capitalized); // "Thor"