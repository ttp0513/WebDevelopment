// Project: Build a program that helps in managing lunch options

const lunches = [];

// Add lunch items
function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  
  if (arr.length > 0) {
    let lastItemRemoved = arr.pop();
    console.log(`${lastItemRemoved} removed from the end of the lunch menu.`);
    } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

// Remove Lunch Items
function removeFirstLunch(arr) {
 
  if (arr.length > 0) {
    let firstItemRemoved = arr.shift();
    console.log(`${firstItemRemoved} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

// Get random Lunch Items
function getRandomLunch(arr) {
  if (arr.length > 0) {
  let randomNum = Math.floor((Math.random()*arr.length));
  let randomItem = arr[randomNum];
  return `Randomly selected lunch: ${randomItem}`;
  } else {
  return "No lunches available.";
}
}

// Check Lunch items
function showLunchMenu(arr) {
  if (arr.length > 0) {
   return `Menu items: ${arr.join(", ")}`;
  } else {
   return "The menu is empty.";
  }
}

// Examples:
console.log(addLunchToEnd(lunches,'apple'));
console.log(addLunchToStart(lunches,'banana'));
console.log(addLunchToEnd(lunches,'roasted chicken'));
console.log(addLunchToStart(lunches,'brownies'));
console.log(removeFirstLunch(lunches));
console.log(removeLastLunch(lunches));
console.log(getRandomLunch(lunches));
console.log(showLunchMenu(lunches));
