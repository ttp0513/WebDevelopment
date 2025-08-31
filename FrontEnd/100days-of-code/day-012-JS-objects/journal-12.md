# 📘 Day 12 Journal – JavaScript - Objects

## ✅ What I Did Today
Day 12 felt like a real turning point in my web development journey. I dove deep into JavaScript objects—not just learning what they are, but how they shape the way we build and think about data in real-world applications. Through FreeCodeCamp’s object challenges and projects like the quiz game, record collection, and recipe tracker, I got hands-on with defining objects, accessing properties using both dot and bracket notation, checking for property existence, deleting keys, and even converting objects to and from JSON. I especially enjoyed working with nested objects and destructuring—those patterns made my code cleaner and more expressive. It’s exciting to see how these concepts will carry forward into more advanced topics like APIs and state management. Today reminded me that every line of code is a small step toward building something meaningful, and I’m genuinely proud of how far I’ve come.

## Object Facts
- Objects are incredibly versatile and form the backbone of JavaScript. 
- In fact, almost everything in JavaScript is an object or can be treated as one, these includes: array, objects, numbers, string, functions, etc...

### Structure of the Object
Definition: An object is a data structure that is made up of properties. A property consists of a `key` and `a value`

```js
const exampleObject = {
  propertyKey1: value1;
  propertyKey2: value2;
  ...
}
```
### Object Access
#### Dot Notation 
- Dot notation is used to access a property when you know its exact name and it’s a valid JavaScript identifier.
- `properties.Name` needs to be *valid JS identified*, aka cannot start with a number, contain spaces, or include special characters (like -, @, etc.).
##### Single Object `objectName.property.Name`
##### Nested Object `objectName.propertyA.propertyB(inA).propertyC(inB)`
You can chain dot notation to access properties inside nested objects.
```js
const company = {
  department: { manager: { name: "John"}}};
console.log(company.department.manager.name); // "John"
```

#### Bracket Notation
- Bracket notation allows you to access object properties using a string inside square brackets. 
- Bracket notation is more flexible than dot notation because:
    - ["propertiesName"] can be *invalid JS identifiers*, aka can start with a number, or contains space
    - Can use variables to access properties dynamically

##### Single Object `objectName["propertiesName"]`

```js
const person = {
name: "Alice",
age: 30,
1stcity: "Wonderland"
};
let propertyName = "1stcity";
console.log(person[propertyName]); // Wonderland
```

- Use Case:
    - When you don't know the exact property name at the time of writing the code
    - When you are working with property names that come from user input or dynamic source

##### Nested Object `objectName["propertyA"]["propertyB(inA)]`
```js
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
  } 
};
console.log(person['contact']['addresses'][1]['city']); //Workville
```
### Object Destructuring
#### Benefit
- Allows user to extract values from objects and assign them to variables
- Allows user to assign the extracted values to variables with different names
- Allows user to set default values, even when the property doesn't exist in the object when destructuring
- **Shorthand notation** When you're creating objects, especially when the property names match variable names, you can takes the properties with the same name as our variables and assigns them the values of those variables.

```js
// Create an object
const user = {
  name: "The Phan",
  role: "Analyst",
  location: "Georgia"
};

//  1. Extract values and assign to variables
const { name, role } = user;
console.log(name); // "The Phan"
console.log(role); // "Analyst"

//  2. Assign to variables with different names
const { location: userLocation } = user;
console.log(userLocation); // "Georgia"

//  3. Set default values for missing properties
const { department = "Strategy", level = "Mid" } = user;
console.log(department); // "Strategy" (default used)
console.log(level);      // "Mid" (default used)

// 4. Shorthand notation
let name = 'Bob';
let role = 'SWE';
let user2 = {name, role};
console.log(user2); // {name: 'Bob, role: 'SWE'}
```
#### Use Case
- Working with objects that have property that might conflict with existing variables
- Want to use a different name for property in the object
- Shorthand notation is particularly useful when you are returning objects from functions or creating objects with 

### Object Deletion
#### `delete`
`delete objectName.propertyName`: removes the selected property from the object
```js
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};
delete person.job;
console.log(person.job); // undefined
```
#### Object Destructuring with `...rest`
2. Use object destructuring assignment with rest parameters `...`: this does not remove the selected property but create a new object without the selected property
```js
const person = {
  name: "Bob",
  age: 28,
  job: "AI Engineer"
};
const {job, ...rest} = personID;
console.log(rest); // { name: "Bob", age: 28 }
```
### Object Checking Property
#### `hasOwnProperty()`
- `hasOwnProperty()` returns a boolean that shows whether the object has the specified property
```js
console.log(objectName.hasOwnProperty('propertyName'));
```

#### `in` operator
`in` also returns true if the property exists on the object and vice versa
```js
console.log('propertyName' in objectName);
```
#### `!== undefined`
This method involves checking if a property is not `undefined`on the object.
- `true` => the property is included on the object
- `false` => the property is not on the object
- Limitation: this can give false negative (the property exists but JS indicates it doesn't ) if a property has the value `undefined`

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: undefined,
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
console.log(car.year !== undefined); // false
```
### Object Duplication
When you create a non-primitive value, what's stored in the variable is a reference to the location in memory where the object is stored, not the object itself. This results in when creating a copy of the object `copiedObject`, it is copying the reference to the object `originalObject`. This is known as shallow copying by reference. As a result, any changes made to the object through one reference are reflected in all references to that object

```js
const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;
originalPerson.age = 31;
console.log(copiedPerson.age); // 31
```

### Object Methods
#### Definition:
 Object methods are functions that are associated with an object. They are defined as properties of an object and can access and manipulate the object's data. The this keyword inside the method refers to the object itself, enabling access to its properties.

#### Difference between functions vs object methods:
1. Functions are called by their name, while methods are called using dot notation on the object they belong to.
```js
// Function
greet("Alice")
// Object Method
person.sayHello()
```
2. Functions are reusable blocks of code that perform a specific task, while Object Methods are functions that are associated with an object.

3.  Regular functions have their own scope, but they don't have a built-in reference to any particular object. Methods, however, are bound to their object and can access its properties and other methods using the `this` keyword.
    - `this` allows the specified object method to access the properties of the object

```js
const person = {
    name: "Bob",
    age: 30,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};
console.log(person.sayHello()); // "Hello, my name is Bob"
```

### Object Constructor `Object()`
#### Structure
- `Object()` is a built-in constructor used to create generic objects.
- It can be invoked with or without the `new` keyword:
  ```js
  const obj1 = new Object(); // creates an empty object, similar to {}
  const obj2 = Object();     // also creates an empty object
  ```
- `typeof obj1` returns `"object"`.

- Constructor functions must be capitalized by convention (e.g., Person, Car, User)
```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.greet(); // Hi, I'm Alice and I'm 30 years old.
person2.greet(); // Hi, I'm Bob and I'm 25 years old.
```
#### Passing `null`, `undefined` to `Object()`
- The result will be an empty object
```js
const newObj = new Object(undefined);
console.log(newObj); // {}
```

### Object Optional Chaining Opetaor `?.`

#### Definition:
- The optional chaining operator (`?.`) lets you safely access object properties or call methods without worrying whether they exist.

- By using the optional chaining operator, we are telling JavaScript to only continue with the operation if the object (or the value before the `?.`) exists and is not null or undefined.

- If the value before the `?.` is `null` or `undefined`, JavaScript returns `undefined` rather than attempting to proceed with the operation and throwing an error.
```js
let car = {
    brand: "Toyota",
    model: "Corolla"
};
console.log(car.color.year) // Uncaught TypeError
console.log(car?.color?.year); // undefined
```
### Object Notation (JSON)
#### Definition
**JSON stands for JavaScript Object Notation**. It is a lightweight, text-based data format that is commonly used to exchange data between a server and a web application. Example:
```js
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```

- JSON is **language-independent**: can easily send JSON data between Java app and Python app
- JSON supports many data types (objects, arrays, strings, numbers, boolean)
#### Access JSON
- To access JSON, users can either use dot or bracket notation
```js

import data from "./example.json" with { type: "json" };

console.log(data.age);
console.log(data["list of courses"]) // use bracket notation because the key contains space.
```
#### JSON Methods: 
##### `JSON.parse()`
`JSON.parse()` converts a JSON string back into a JavaScript object.
```js
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);
// {
//   name: "John",
//   age: 30,
//   isAdmin: true
// }
```

##### `JSON.stringtify()`
`JSON.stringify()` is used to convert a JavaScript object into a JSON string.

**Syntax:** `JSON.stringtify(objectName, ["key1","key2"], space)` 
  - `["key1"]`, `["key2"]` are optional, used when specifying which properties we want stringtified
  - Replace `["key1"]` with `null` = don’t filter any properties — include everything.
  - `space`: Adds X spaces of indentation for each level of nesting, making the output easier to read. 
```js
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

console.log(JSON.stringify(user));
// {"name":"John","age":30,"isAdmin":true}
console.log(JSON.stringify(user, ["name","age"]));
// {"name":"John","age":30}
console.log(JSON.stringify(user, null, 2));
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": true
// }
```

