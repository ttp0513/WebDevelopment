// Addition (+)
let sum = 10 + 5; // Adds 10 and 5 => sum = 15
console.log("Addition:", sum);

// Subtraction (-)
let difference = 20 - 7; // Subtracts 7 from 20 => difference = 13
console.log("Subtraction:", difference);

// Multiplication (*)
let product = 4 * 6; // Multiplies 4 by 6 => product = 24
console.log("Multiplication:", product);

// Division (/)
let quotient = 30 / 5; // Divides 30 by 5 => quotient = 6
console.log("Division:", quotient); 
let infinityQuotient = 30 / 0; // Divides 30 by 5 => quotient = Infinity
console.log("Division:", infinityQuotient);

// Modulus (%)
let remainder = 17 % 3; // Remainder when 17 is divided by 3 => remainder = 2
console.log("Modulus:", remainder);

// Exponentiation (**)
let power = 2 ** 4; // 2 raised to the power of 4 => power = 16
console.log("Exponentiation:", power);

// Increment (++)
let count = 10;
count++; // Increments count by 1 => count = 11
console.log("Increment:", count);

// Decrement (--)
let score = 5;
score--; // Decrements score by 1 => score = 4
console.log("Decrement:", score);

// Mixing Numbers and Strings
console.log(5 + "3");           // "53" → string concatenation
console.log(5 - "3");           // 2 → Numeric Coercion
console.log("Hello" + true);    // "Hellotrue" → boolean becomes string

// Mixing Numbers and Booleans
console.log(true + 1);          // 2 → true becomes 1
console.log(false + 1);         // 1 → false becomes 0

// Mixing Strings and Booleans with math operators
console.log("10" - true);       // 9 → "10" becomes 10, true becomes 1
console.log("10" - false);      // 10 → false becomes 0
console.log("hello" - true);    // NaN → "hello" can't be converted

// Multiplication with strings and booleans only
console.log("6" * "3");         // 18 → both strings are numeric
console.log("5" * true);        // 5 → true becomes 1
console.log("5" * false);       // 0 → false becomes 0
console.log("hello" * true);    // NaN → "hello" can't be converted

// Division with strings and booleans only
console.log("20" / true);       // 20 → true becomes 1
console.log("20" / false);      // Infinity → false becomes 0
console.log("abc" / true);      // NaN → "abc" can't be converted

// Mixed chaining

// Example 1: All numbers
console.log(10 + 5 + 2); // 17 → pure addition

// Example 2: Number + String + Number
console.log(10 + "5" + 2); // "1052"
// Step-by-step:
// 10 + "5" → "105" (number coerced to string)
// "105" + 2 → "1052" (number coerced to string again)

// Example 3: String + Number + Number
console.log("Result: " + 10 + 5); // "Result: 105"
// "Result: " + 10 → "Result: 10"
// "Result: 10" + 5 → "Result: 105"

// Example 4: String + (Number + Number)
console.log("Result: " + (10 + 5)); // "Result: 15"
// Parentheses force numeric addition first

// Example 5: Boolean + Number + String
console.log(true + 1 + "px"); // "2px"
// true → 1
// 1 + 1 → 2
// 2 + "px" → "2px"

// Example 6: String + Boolean + Number
console.log("Value: " + false + 10); // "Value: false10"
// "Value: " + false → "Value: false"
// "Value: false" + 10 → "Value: false10"