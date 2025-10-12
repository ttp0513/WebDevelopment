// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Use setTimeout with an anonymous function to log 'Done!' after 500ms.
setTimeout(function() {console.log('Done!')}, 500);

// STEP 2 — Make an array of numbers and use forEach with an anonymous function to log each double.
arrayNumber = [1, 2, 3, 4, 5];
arrayNumber.forEach(function(num) {console.log(num * 2)});

// STEP 3 — Use map with an anonymous function to return numbers squared.
arrayNumber.map(function(num) {return num * num});

// STEP 4 — Use filter with an anonymous function to keep only strings longer than 3 letters from ['pen','book','AI','tool'].
arrayLetter = ['pen','book','AI','tool']
arrayLetter.filter(function(char) {return char.length > 3});

// STEP 5 — Use reduce with an anonymous function to sum an array; log the result.
arrayNumber.reduce(function(acc, cumValue) {return acc + cumValue}, 0);