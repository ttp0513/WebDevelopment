// Objective: Create a function that take 2 parameters (str1 and str2)
// The function should check if the first string ends with the second string

function confirmEnding(str1, str2) {
  return str1.slice(-str2.length) === str2;
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))

console.log(confirmEnding("Open sesame", "same"))