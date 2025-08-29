// Start the program with a simple greeting
console.log("Hi there!");

// Define the bot's name and introduce it
const botName = "teacherBot";
const greeting = `My name is ${botName}.`;
console.log(greeting);

// Set the subject and topic for today's lesson
const subject = "JavaScript";
const topic = "strings";

// Announce the topic being taught
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

// Introduce the concept of string length
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

// Display the number of characters in the word "JavaScript"
console.log(subject.length);

// Display the number of characters in the word "strings"
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

// Show how to access individual characters in a string
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]); // First character

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]); // Second character

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);
const lastCharacter = subject[subject.length - 1]; // Last character using length - 1
console.log(lastCharacter);

// Define a sentence for substring search examples
const learningIsFunSentence = "Learning is fun.";

// Demonstrate how to find the position of substrings using indexOf()
console.log("Here are examples of finding the positions of substrings in the sentence.");
console.log(learningIsFunSentence.indexOf("Learning")); // Returns 0
console.log(learningIsFunSentence.indexOf("fun"));      // Returns position of "fun"
console.log(learningIsFunSentence.indexOf("learning")); // Case-sensitive: returns -1
