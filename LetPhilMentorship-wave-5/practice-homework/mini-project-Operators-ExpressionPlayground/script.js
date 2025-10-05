/*
Mini Project — Expression Playground 

Goal
  Given two numbers, compute arithmetic, comparisons, logical results, and precedence examples; render lines in order.

Exact element ids required
  aInput, bInput, runBtn, resultList

STEP 1 — Selection
  Select the elements by id and store them with the exact names above.
*/ 
const aInput = document.getElementById('aInput');
const bInput = document.getElementById('bInput');
const runBtn = document.getElementById('runBtn');
const resultList = document.getElementById('resultList');
/*
STEP 2 — Parser
  Create a function named readNumber that converts a text input’s value to a number and returns the number.
*/
function readNumber(input) {
  const num = Number(input);
  if (isNaN(num)) {
    alert('Please enter numeric value');
    return null; // or return 'Invalid input'
  }
  return num;
}

/*
STEP 3 — Compute
  Create a function named computeAll that takes numbers a and b and returns an object with keys in this exact list and order:
    sum, diff, prod, quot, mod,
    eqLoose, eqStrict, greater,
    bothEven, anyOver10, notEqual,
    precOne, precTwo

  Rules:
    sum is a + b
    diff is a - b
    prod is a * b
    quot is a / b
    mod is a % b
    eqLoose is a == b
    eqStrict is a === b
    greater is a > b
    bothEven is (a is even) and (b is even)
    anyOver10 is a > 10 or b > 10
    notEqual is not (a === b)
    precOne is a + b * 2
    precTwo is (a + b) * 2
*/
function computeAll(a, b) {
  return {
    sum : a + b,
    diff : a - b,
    prod : a * b,
    quot : a / b,
    mod : a % b,
    eqLoose : a == b,
    eqStrict : a === b,
    greater : a > b,
    bothEven : (a % 2 === 0) && (b % 2 === 0),
    anyOver10 : a > 10 || b > 10,
    notEqual : !(a === b),
    precOne : a + b * 2,
    precTwo : (a + b) * 2,
  }
}

/*

STEP 4 — Render
  Create a function named renderResults that erases resultList, then appends list items in the key order listed above with the format Key: space Value.
*/
function renderResults(obj) {
  resultList.innerHTML = '';

  for (const key in obj) { 
  let listItem = document.createElement('li');
  listItem.textContent = `${key}: ${obj[key]}`;
  resultList.appendChild(listItem);
}
}

  /*
STEP 5 — Handler
  When runBtn is clicked, read a and b, compute, and render.
*/

runBtn.addEventListener('click', () => {
  let a = readNumber(aInput.value);
  let b = readNumber(bInput.value);
  return renderResults(computeAll(a, b));
})