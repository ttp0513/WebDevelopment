//  Calculates the sum of two numbers
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));     // 7
console.log(calculateSum(10, 10));   // 20
console.log(calculateSum(5, 5));     // 10

//  Calculates the difference between two numbers
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));  // 17
console.log(calculateDifference(12, 1));  // 11
console.log(calculateDifference(17, 9));  // 8

//  Calculates the product of two numbers
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));     // 65

//  Calculates the quotient of two numbers, with division-by-zero protection
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));    // ~0.636
console.log(calculateQuotient(3, 0));     // "Error: Division by zero"

//  Calculates the square of a number
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));          // 4
console.log(calculateSquare(9));          // 81

//  Calculates the square root of a number
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));     // 5
