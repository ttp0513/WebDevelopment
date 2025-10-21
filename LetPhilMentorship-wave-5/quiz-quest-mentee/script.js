/* 
STEP 1: SELECT HTML ELEMENTS
Use `document.getElementById()` to store these in variables:
- startScreen          → section with id="start-screen"
- questionScreen       → section with id="question-screen"
- resultScreen         → section with id="result-screen"
- startBtn             → button with id="start-btn"
- restartBtn           → button with id="restart-btn"
- questionText         → h2 with id="question-text"
- answersDiv           → div with id="answers"
- timerDisplay         → div with id="timer"
- finalScoreEl         → p with id="final-score"
- resultMsgEl          → h2 with id="result-message"
*/
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const timerDisplay = document.getElementById('timer');
const finalScoreEl = document.getElementById('final-score');
const resultMsgEl = document.getElementById('result-message');

/* 
STEP 2: CREATE QUIZ QUESTIONS ARRAY
Create a variable called `questions` that stores an array of objects.
Each object should include:
- question: a string
- answers: an array of 4 strings
- correct: the index (0–3) of the correct answer
*/
const questions = [
  {
    question: "What is the difference between `let`, `const`, and `var`?",
    answers: [
      "`var` is block-scoped, `let` is function-scoped, `const` is global",
      "`let` and `const` are block-scoped; `var` is function-scoped",
      "`const` can be reassigned, `let` cannot",
      "All three are block-scoped and interchangeable"
    ],
    correct: 1
  },
  {
    question: "What does `===` do in JavaScript?",
    answers: [
      "Compares values and types for equality",
      "Assigns a value to a variable",
      "Compares values only, ignoring types",
      "Checks if a variable is undefined"
    ],
    correct: 0
  },
  {
    question: "What is a closure in JavaScript?",
    answers: [
      "A function that returns another function",
      "A function that has access to its outer scope even after the outer function has returned",
      "A variable declared inside a loop",
      "A method used to close a browser window"
    ],
    correct: 1
  },
  {
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    answers: [
      "String",
      "Number",
      "Object",
      "Boolean"
    ],
    correct: 2
  },
  {
    question: "What is the purpose of `use strict`?",
    answers: [
      "To enable ES6 features",
      "To prevent the use of deprecated syntax",
      "To enforce stricter parsing and error handling in code",
      "To allow global variables"
    ],
    correct: 2
  },
  {
    question: "What is the result of `typeof null`?",
    answers: [
      "`null`",
      "`undefined`",
      "`object`",
      "`number`"
    ],
    correct: 2
  },
  {
    question: "Which method converts JSON string to a JavaScript object?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    correct: 1
  },
  {
    question: "What is the default value of `this` in a regular function?",
    answers: [
      "The global object",
      "The function itself",
      "`undefined`",
      "The parent object"
    ],
    correct: 0
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    answers: [
      "`object`",
      "`class`",
      "`function`",
      "`constructor`"
    ],
    correct: 1
  },
  {
    question: "What is the output of `NaN === NaN`?",
    answers: [
      "`true`",
      "`false`",
      "`undefined`",
      "`NaN`"
    ],
    correct: 1
  },
  {
    question: "Which array method creates a new array with elements that pass a test?",
    answers: [
      "map()",
      "reduce()",
      "filter()",
      "forEach()"
    ],
    correct: 2
  },
  {
    question: "What does the `bind()` method do?",
    answers: [
      "Executes a function immediately",
      "Creates a new function with a specific `this` value",
      "Returns the original function",
      "Changes the scope of a variable"
    ],
    correct: 1
  },
  {
    question: "What is event bubbling in JavaScript?",
    answers: [
      "Events are captured from the target element outward",
      "Events are handled only by the target element",
      "Events propagate from child to parent elements",
      "Events are blocked from reaching parent elements"
    ],
    correct: 2
  },
  {
    question: "Which symbol is used for optional chaining?",
    answers: [
      "`??`",
      "`?.`",
      "`::`",
      "`=>`"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the `async` keyword?",
    answers: [
      "To declare a variable asynchronously",
      "To pause execution of a function",
      "To define a function that returns a promise",
      "To handle errors in synchronous code"
    ],
    correct: 2
  },
  {
    question: "Which method is used to handle promise rejections?",
    answers: [
      "then()",
      "catch()",
      "resolve()",
      "finally()"
    ],
    correct: 1
  },
  {
    question: "What does `Array.prototype.map()` return?",
    answers: [
      "A new array with transformed elements",
      "The original array",
      "A boolean",
      "An object"
    ],
    correct: 0
  },
  {
    question: "What is the difference between `==` and `===`?",
    answers: [
      "`==` compares value and type, `===` compares value only",
      "`==` compares value only, `===` compares value and type",
      "They are interchangeable",
      "`==` is used for objects, `===` for primitives"
    ],
    correct: 1
  },
  {
    question: "Which of the following is a falsy value?",
    answers: [
      "`true`",
      "`'0'`",
      "`[]`",
      "`0`"
    ],
    correct: 3
  },
  {
    question: "What is the purpose of `Promise.all()`?",
    answers: [
      "To wait for all promises to resolve or any to reject",
      "To resolve the fastest promise",
      "To reject all promises",
      "To execute promises sequentially"
    ],
    correct: 0
  }
];

/* 
STEP 3: DEFINE STATE VARIABLES
You will need:
- currentIndex   → number to track which question we’re on (start at 0)
- score          → number of correct answers (start at 0)
- timeLeft       → number for countdown timer (start at 10)
- timerId        → to store setInterval reference
*/
let currentIndex = 0;
let score = 0;
let timeLeft = 10;
let timerId = null;
/* 
STEP 4: ADD EVENT LISTENERS
Use `.addEventListener("click", ...)` on:
- startBtn to call the `startGame()` function
- restartBtn to call the same `startGame()` function
*/
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
/* 
STEP 5: FUNCTION – startGame()
Create a function named `startGame` that:
- Sets currentIndex and score back to 0
- Switches from the start screen to the question screen
- Calls the `showQuestion()` function
*/
function startGame() {
  currentIndex = 0;
  score = 0;
  swapScreen(startScreen, questionScreen);
  showQuestion();
}
/* 
STEP 6: FUNCTION – showQuestion()
Create a function named `showQuestion` that:
- Clears previous answers from `answersDiv`
- Gets the current question from the `questions` array
- Updates `questionText` with the question
- Loops through the answers array:
    - Creates a <button>
    - Sets text and adds class "answer-btn"
    - Adds a `data-index` with the index value
    - Adds a click event to call `handleAnswer()`
    - Appends the button to `answersDiv`
- Calls `resetTimer()`
*/
function showQuestion() {
  // Clear previous answers
  answersDiv.innerHTML = '';
  // Get current question
  let currentQuestion = questions[currentIndex];
  // Update question text
  questionText.textContent = currentQuestion.question;
  // Loop through answers and create buttons
  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.classList.add('answer-btn');
    btn.dataset.index = index;
    btn.addEventListener('click', handleAnswer);
    answersDiv.appendChild(btn);
    });
  // Reset timer
    resetTimer();
};

/* 
STEP 7: FUNCTION – handleAnswer()
Create a function named `handleAnswer` that:
- Stops the timer using `clearInterval`
- Gets which button the user clicked
- Loops through all answer buttons:
    - Adds class "correct" to the right answer
    - Adds class "wrong" to the selected wrong answer
    - Disables all buttons
- If answer is correct, increase the `score`
- After a short delay (use `setTimeout`):
    - If there are more questions, call `showQuestion()`
    - If quiz is over, call `showResults()`
*/
function handleAnswer(event) {
  clearInterval(timerId); 
    const selectedBtn = event.target;
    const selectedIndex = parseInt(selectedBtn.dataset.index);
    const currentQuestion = questions[currentIndex];
    const answerButtons = answersDiv.querySelectorAll('.answer-btn');
    answerButtons.forEach((btn, index) => {
      if (index === currentQuestion.correct) {
        btn.classList.add('correct');
      } else if (index === selectedIndex) {
        btn.classList.add('wrong');
      }
        btn.disabled = true;
    });
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
    setTimeout(() => {
      currentIndex++;
        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1000);
};

/* 
STEP 8: FUNCTION – showResults()
Create a function named `showResults` that:
- Switches from question screen to result screen
- Updates `finalScoreEl` with the user’s score
- Shows a message in `resultMsgEl` depending on how well they did:
    - Full score → “✨ Supreme Wizard of JavaScript! ✨”
    - Half or more → “🧙 Apprentice Mage – Keep Practicing!”
    - Less than half → “💀 Novice – Study the ancient scrolls again!”
*/
function showResults() {
    swapScreen(questionScreen, resultScreen);
    finalScoreEl.textContent = `You scored ${score} / ${questions.length}`;
    if (score === questions.length) {
      resultMsgEl.textContent = "✨ Supreme Wizard of JavaScript! ✨";
    } else if (score >= questions.length / 2) {
      resultMsgEl.textContent = "🧙 Apprentice Mage – Keep Practicing!";
    } else {
      resultMsgEl.textContent = "💀 Novice – Study the ancient scrolls again!";
    }   
};
/* 
STEP 9: FUNCTION – resetTimer()
Create a function named `resetTimer` that:
- Sets `timeLeft` to 10
- Updates `timerDisplay` each second
- When it reaches 0:
    - Stops the timer
    - Calls `handleAnswer()` with a fake object to simulate “no answer”
      (use: { target: { dataset: { index: -1 } } })
*/
function resetTimer() {
  let timeLeft = 10;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      handleAnswer({ target: { dataset: { index: -1 } } });
    }
    }, 1000); 
};  
/* 
STEP 10: FUNCTION – swapScreen()
Create a function named `swapScreen(hideEl, showEl)` that:
- Hides all elements with the class `.screen` using `classList.add("hidden")`
- Shows the element passed as `showEl` using `classList.remove("hidden")`
*/
function swapScreen(hideEl, showEl) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.add('hidden'));
  showEl.classList.remove('hidden');
}
