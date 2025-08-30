# 📘 Day 11 Journal – JavaScript - Arrays

## ✅ What I Did Today
Today was all about deepening my understanding of JavaScript arrays. I explored both 1D and 2D structures and practiced manipulating them in different ways. By working through examples and projects `lunch-picker` and `snack-list`, I’m starting to see how arrays form the backbone of so many logic-based operations. The destructuring and shallow copy techniques were especially useful for writing cleaner, safer code. 
---
## 1D Arrays
- **Array** is a single row of boxes representing an ordered collection of values, each identified by a numeric index
- Array values can be different data types
- Array use square brackets `[]` and separate values with comma `,`
- Array is `zero-indexed`
- If accessing an index that doesn't exist in the array, JS will return `undefined`

```js
let fruits = ['apple','banana','orange']
// fruits index = [0, 1, 2]
console.log(fruits[3]) // undefined

```
### Array.Length
- Check the number of elements in the array

### Array Access and Update
1. Element in an array can be updated by assigning a new value to a specific index

```js
let fruits = ['apple','banana','orange'];
// Updating fruits array index 0 with 'pineapple'
fruits[0] = 'pineapple';
console.log(fruits); // ['pineapple','banana','orange']
```
2. `indexOf(arg1, arg2)`  
- First argument: allows users to find the first index of a specific element within an array.
- Second argument: tells JS to start looking for an item after a specific index number
- If the element cannot be found, it returns `-1`

```js
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
let emptyIndex = fruits.indexOf("guava");
console.log(index); // 1
console.log(emptyIndex); //-1
```

### Array Add & Remove
#### Add Elements
1. *Index* - Assigning a value at an index that doesn't yet exist
```js
let fruits = ['apple','banana','orange'];
fruits[3] = 'guava';
console.log(fruits); // ['apple','banana','orange','guava']
```
**Note**: If you assign a value to an index that is much larger than the current length of the array, you will create undefined elements for the indices in between, which can lead to unexpected behavior.
```js
let arr = [1, 2];
arr[5] = 99;
console.log(arr); // [1, 2, <3 empty items>, 99]
console.log(arr.length); // 6
```

2. `push()` - add one or more elements to the end of an array and **returns its new length**

```js
let fruits = ['apple','banana','orange'];
let newFruit = fruits.push('strawberry');
console.log(fruits) // ['apple','banana','orange','strawberry'];
console.log(newFruit); // '3'
```

3. `upshift()` adds one more elements to the beginning of an array and **returns its new length**
```js
let numbers = [2,3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3
```
#### Remove Elements
1. `pop()` removes the last element from the array and **returns that last element**
```js
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
```

2. `shift()` removes the first element from the array and **returns that first element**
```js
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
```
#### Remove & Add At Once
1. `splice()` add or remove elements from any position in an array and **return an array of the items removed from the array**. If nothing removed, return an empty array
```js
array.splice(startIndex, itemsToRemove, item1, item2)
```
- `startIndex`: specifies the index at which to begin modifying the array
- `itemsToRemove`: optional, indicates how many elements to remove. If omitted, `splice()` will remove all elements from `startIndex` to the end
- `item1`, `item2`, so on: elements to be added to the array beginning at the `startIndex`. Other words, `item1` index =  specified `startIndex`

- `splice(0)`: remove all elements in the array
```js
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");
console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
colors.splice(0);
console.log(colors); // []
```
#### Check if array contains certain values
`includes(arg1, arg2)` allows users to check if an array contains a specific value (`arg1`), starting at an optional `arg2` index and return `true` or `false`
`includes()` is case-sensitive
`includes()` uses strict equality comparison (`===`), aka cant coerce type
```js
let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(35, 4)); // false
```

### Array Shallow copy 
**A shallow copy is not equal to the original array due to reference equality**
#### `[...arrayName]` or `spread operator`
This create a copy of the `array` without modifying it
```js
let original = [1, 2, 3, 4, 5];
let copy = [...original];
console.log(copy === original) // false

```
#### `[].concat(array)`
This create a shallow copy by merging 2 or more arrays. 
```js
let originalArray = [1, 2, 3];
let copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```
#### `array.slice()`
This returns a shallow copy of the entire array
```js
let originalArray = [1, 2, 3];
let copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

### Array Destructuring 
- Array destructuring allows you to extract values from arrays and assign them to variables

```js
let fruits = ["apple", "banana", "orange"];
// extract elements from fruits and assign them to array of variables
let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```
- Array destructuring also allows you to skip elements by using commas `,`
- Array destructuring also allows you to use `default values`. 
    - If the array has fewer elements than the variables you're trying to assign, you can provide default values:
- `...rest` is used to capture the remaining elements of an array that haven't been destructured into a new array
    - The `...rest`syntax must be the **last element** in the destructuring pattern. Otherwise, JS will throw `SyntaxError`

```js
let numbers = [1, 2, 3, 4, 5];
let [a, , b, ...rest] = numbers;
console.log(a, b, rest); // 1 3 [4,5]
// `, ,` skips 2 while ...rest captures the rest [4,5]
let [first, ...rest, last] = numbers;
console.log(first, rest, last); // SyntaxError as `...rest` is not the last element
```

### Array Reversing a String
Reversing a string is a common programming task that can be accomplished in JavaScript using a combination of string and array methods. 

Process:
1. `Split()` the string into an array of character
2. `Reverse()` the array
3. `Join()` the characters back into the string. This is used to join each element in an array into a string, e.g `array.join(", ")`
```js
let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed); // "gnidoc"
```
Common split operators:
1. `""` = empty string = split string into individual characters
2. `" "` = single space = split string wherever space occurs
3. `"-"` = split string at each dash

## 2D Array
- A two-dimensional array contains multiple rows and columns, possessing a natural grid-like structure, like chessboard, spreadsheet
- In programming, 2D array is an array of arrays

### 2D Array Access and Update
- To access/update a 2D array, need 2 indices:
    1. First indices: row
    2. Second indices: column
