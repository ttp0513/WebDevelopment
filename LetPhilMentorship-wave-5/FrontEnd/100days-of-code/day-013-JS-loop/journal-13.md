# 📘 Day 13 Journal – JavaScript - Loops & Iteration

## ✅ What I Did Today
Today was a mental workout. I spent hours wrestling with loops (for,for...of, forEach, even nested ones) and trying to make sense of how they control flow and iterate through data. It wasn’t easy. I kept getting tripped up by off-by-one errors, misplaced brackets, and logic that looked fine until I ran it. But I stuck with it.

I completed four projects that really pushed me: a sentence analyzer, the chunky monkey algorithm, a factorial calculator, and a longest word length finder. Each one forced me to think differently about how loops interact with arrays, strings, and conditions. There were moments I felt stuck, but when the logic finally clicked and the output matched what I expected—it was incredibly satisfying.

Today reminded me that struggling is part of learning. And every bug I squashed taught me something I’ll carry into the next challenge. I’m proud of the progress, even if it came with a few headaches.

## Loop
Loops in programming are used to repeat a block of code multiple times.

### When to use loop
- Design a game: move characters across the screen
- Design a program: print out each one of the items in the list.

### `for` loop
#### Syntax
```js
for (initialization; condition; increment or decrement) {
    //code block to be executed
}
```
- `initialization`: executed before the loop starts, this initializes a counter variable, e.g `let i = 0`
- `condition`: evaluated before each iteration of the loop, this tells:
    - If the condition is `true`, the code block is executed
    - If the condition is `false`, the loop stops 
- `increment/decrement statement`: this is executed after each iteration of the loop, used to increment or decrement the counter variable. Example `i++`

```js

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Starting with i = 0, the loop runs as long as i is less than 5. (shown in let i = 0; i < 5)
// It prints the current value of i, then increases i by 1 each time (shown in i++)
// The loop stops once i reaches 5, so the last printed value is 4.
```

### `for...of`loop for Array
#### Definition
A `for...of` loop is used when you need to loop over values from an iterable
#### Syntax
```js
for (const/let variable of iterable) {
  // code block to be executed
}
```
- `variable`: the current value of the iterable:
    - If the iterable is `array of numbers`, the variable would be the current number in the array
    - If the iterable is a `string`, the variable would be the current character in the string

```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
// num will represent the current number in the array. For iteration 1, num will be 1, iteration 2, num will be 2 and so on
```
#### Limitation
- If `variable` is `const`, make sure that the value of the variable does not change inside the loop. Otherwise, it will throw an error.
- Use `let` if you want to change the variable inside the loop
```js
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // This will cause an error
}
```

### `for...in` loop for Object
#### Definition
- A `for...in` loop is best used when you need to loop over the properties of an object. 
- This loop will iterate over all enumerable properties of an object, including inherited properties and non-numeric properties.
    - **An inherited property** is a property that is inherited from the object's prototype chain. 
    - **A non-numeric property** is a property that is not a number or a string that can be converted to a number.

#### Syntax
```js
for (variable in object) {
  // code block to be executed
}
```
- `variable` represents the current property of the object being looped

```js
const fruit = {
    name: 'apple',
    color: 'red',
    price: '0.99',
    supplier: {
        street: '123 Main St',
        city: 'High Town',
        state: 'GA'
    }
};

for (const property in fruit) {
    console.log(fruit[property]);
}
// apple
//  red
//  0.99
// {street: '123 Main St', city: 'High Town', state: 'GA'}
```

#### Nested `loop...in` 
If an object has an object inside it and we want to address the properties of it, we can nest another `for...in` loop inside the first one

```js
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

// function to check if the value is an object
function isObject(obj) {
    return typeof obj === 'object' && // Check if the value is an object
    !Array.isArray(obj) && // remove arrays as array can return as `object`
    obj !== null; } // remove null value as null can return as `object`

// Nested loop to address the properties inside the `address` property
for (const prop in person) {
    // Check if each property of the person is an object
    if (isObject(person[prop])) {
        // If the property of the person object is true, then log the properties of that property
        for (const nestedProp in person[prop]) {
            console.log(person[prop][nestedProp]);
        }
    } else {
        console.log(person[prop]);
    }
}

// Output:
// "John"
// 30
// "123 Main St"
// "Anytown"
// "CA"
```

### `forEach` loop
#### Definition:
- `.forEach()` is designed for side effects, not for producing a new value. It loops through the array and runs the callback function on each item, but it doesn't return anything useful. Its return value is always `undefined`
- It’s great for performing actions like logging, modifying, or interacting with each item, **without returning a new array.**

#### Syntax
```js
array.forEach(function(element, index, array) {
  // code block here
});

//arrow function
array.forEach((element, index) => {
  // your code here
});
```
Example 
```js
let fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
  console.log(`Fruit #${index + 1}: ${fruit}`);
});
```
### `while` loop
#### Definition
A `while` loop will run a block of code as long as the condition is true.
#### Syntax
```js
while (condition) {
  // code block to be executed
}
```

```js 
let count = 0;
while (count < 3) {
  console.log("while loop:", count);
  count++;
}
// while loop: 0
// while loop: 1
// while loop: 2
```

### `do...while` loop
#### Definition
`do...while` loop will execute the block of code **at least once** before checking the condition.
#### Syntax
```js
do {
  // code block to be executed
} while (condition);
```
- If the condition is true, the block of code will continue to execute. If the condition is false, the block of code will stop executing.
```js
let count = 0;

do {
  console.log("do...while loop:", count);
  count++;
} while (count < 3);
// do...while loop: 0
// do...while loop: 1
// do...while loop: 2
```
#### Difference between `do...while` and `while`
A `do...while` loop executes the code block at least once, whereas a while loop does not.
```js
let num = 5;

while (num < 5) {
  console.log("while:", num); // won't run
}
// Wont run 
do {
  console.log("do...while:", num); // runs once
} while (num < 5);
// Output: do...while: 5
```

### `break` statement
#### Definition
- A `break` statement is used to exit a loop early based on a certain condition.
```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop the loop once i hits 5
  }
  console.log(i);
} // Output: 0, 1, 2, 3, 4
```
### `continue` statement
#### Definition
- A `continue` statement is used to skip the current iteration of a loop and move to the next one
```js

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip generating output for i = 5
  }
  console.log(i);
} // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
```

### `label` in loop
`label` is useful when you have nested loops and you want to control the flow of the outer loop from within the inner loop.

```js
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```