// Replace the letter 'world' with universe
let phrase = "Hello, world! Welcome to the world of coding.";
let updatedPhrase = phrase.replace("world", "universe");
        // Noted that only the first 'world' is replaced
console.log(updatedPhrase);  // Output: "Hello, universe! Welcome to the world of coding."

// Replace the letter 'javascript'
let message = "JavaScript is awesome!";
let updatedMessage = message.replace("javascript", "fCC");

console.log(updatedMessage); // Output: "JavaScript is awesome!", since 'javascript' is not found

// Extract 'awesome' from the the message string and repeat it twice
let doubleAwesome = message.slice(14,-1).repeat(2);
console.log(doubleAwesome); // Output: awesomeawesome

// Change repeat of the 'awesome' to 3.89
let decimalAwesome = message.slice(14,-1).repeat(3.89);
console.log(decimalAwesome); // Output: awesomeawesomeawesome

// Change repeat of the 'awesome' to 0
let zeroAwesome = message.slice(14,-1).repeat(0);
console.log(zeroAwesome); // Output: "", or nothing

// Change repeat of the 'awesome' to -1
let negativeAwesome = message.slice(14,-1).repeat(-1);
console.log(negativeAwesome); // Output: RangeError: Invalid count value: -1

