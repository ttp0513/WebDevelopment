// Create a factorial calculator that takes a number from the user and calculates the factorial of that number

let num = 13;
function factorialCalculator(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = i * result;
  }
  return result;
}

let factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);