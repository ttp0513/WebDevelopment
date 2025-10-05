// Create a function that takes an array and returns true if if the string in the first element of the array contains all of the letters of the string in the second element of the array


function mutation(arr) {
  let arrLetterList = [];

  for (let i = 0; i < arr.length; i++) {
    arrLetterList[i] = [];
    for (let char of arr[i].toLowerCase()) {
      arrLetterList[i].push(char);
    }
  }

  for (let char of arrLetterList[1]) {
    if (!arrLetterList[0].includes(char)) {
      return false;
    }
  }

  return true;
}
console.log(mutation(["hello", "Hello"]))