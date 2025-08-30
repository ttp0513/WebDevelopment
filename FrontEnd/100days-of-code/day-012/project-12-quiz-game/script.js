const questions = [
  {category: "Array",
  question: "Which method is used to add an element to the end of a JavaScript array?",
  choices: ["unshift()","pop()","push()"],
  answer: "push()" 
  },
  {category: "Object",
  question: "How do you access the value of the 'name' property in the following object: const person = { name:'Alice', age: 30 }?",
  choices: ["person.name","person(name)","person->name"],
  answer: "person.name" 
  },
  {category: "Array",
  question: "Which method can be used to replicate an array?",
  choices: ["forEach()","slice()","push()"],
  answer: "slice()" 
  },
  {category: "Object",
  question: "What will the following code output? const person = { name: 'Bob' }; console.log(typeof person);?",
  choices: ["undefined","string","object"],
  answer: "object" 
  },
  {category: "Object",
  question: "Which method can be used to convert a JavaScript object into a JSON string?",
  choices: ["JSON.stringtify()","JSON.string()","JSON.parse()"],
  answer: "JSON.stringtify()" 
  },
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random()*questions.length)]
}


function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random()*choices.length)]
}

function getResults(objectQuestion, computerAnswer) {
  console.log('The question is, ', objectQuestion);
  console.log('The computer selected: ', computerChoice);
  if (computerAnswer === objectQuestion.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${objectQuestion.answer}`
  }
}

let question = getRandomQuestion(questions);
let computerChoice = getRandomComputerChoice(question.choices);
console.log(getResults(question, computerChoice))