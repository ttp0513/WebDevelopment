// Road Trip Snack Prep Begins
console.log("Road Trip Snack Prep Begins!");

const snackList = []; // Initialize empty snack list

// Add hydration essentials
console.log("First things first, hydration is key.");
snackList.push("Water Bottles");

// Function to display current snack list
function getSnackListMsg(arr) {
  return `Current Snack List: ${arr.join(", ")}`;
}

console.log(getSnackListMsg(snackList));

// Add healthy options
console.log("Your friend insists on something healthy.");
snackList.push("Bananas", "Trail Mix");

console.log(getSnackListMsg(snackList));

// Add salty snacks to the front of the list
console.log("You remember they love salty snacks.");
snackList.unshift("Pretzels");

console.log(getSnackListMsg(snackList));

// Sneak in a sweet treat
console.log("You sneak in some chocolate... they’ll thank you later.");
snackList.push("Dark Chocolate");

console.log(getSnackListMsg(snackList));

// Remove unwanted item (bananas)
console.log("Wait, they hate chocolate. Time to fix that.");
snackList.pop();
console.log(getSnackListMsg(snackList));

// Preview top 3 snacks using array destructuring
console.log("Let’s preview the top 3 snacks:");
const [first, second, third] = snackList;
console.log(`Top Picks: 1. ${first}, 2. ${second}, 3. ${third}`);
