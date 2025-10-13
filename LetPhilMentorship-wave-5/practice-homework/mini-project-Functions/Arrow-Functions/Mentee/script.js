// Mentee Version — Steps Only (same steps appear in Mentor)

// STEP 1 — Make a constant addArrow assigned to an arrow function that returns a+b.
const addArrow = (a,b) =>  {return a + b};

// STEP 2 — Make a constant squareArrow that returns n*n (use concise one-line form).
const squareArrow = n => n * n;

// STEP 3 — Make a constant describeArrow that takes (name, city) and returns a sentence.
const describeArrow = (name, city) => {return `${name} lives in ${city}`};

// STEP 4 — Make a constant maxArrow that returns the max of two numbers using a conditional (?:).
const maxArrow = (a, b) => (a > b ? a: b);

// STEP 5 — TEST: Log calls to each arrow function with sample values.
console.log(addArrow(1,2));
console.log(squareArrow(3));
console.log(describeArrow("John", "New York"));
console.log(maxArrow(5,10));