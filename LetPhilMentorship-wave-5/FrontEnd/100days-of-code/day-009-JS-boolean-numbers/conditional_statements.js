let playerName = prompt("Enter your name:");
let hasMap = true;
let energy = 50;

let pathChoice = prompt("You reach a fork. Go 'left' or 'right'?");

// Scene 1: The Fork in the Path
if (pathChoice === "left") {
  console.log("You encounter a friendly debugger who boosts your energy.");
  energy += 20;
} else if (pathChoice === "right") {
  console.log("You fall into a trap! Lose energy.");
  energy -= 30;
} else {
  console.log("You stand still, confused. Nothing happens.");
}
// Scene 2: The Riddle Gate
let answer = prompt("Solve the riddle: What is truthy but not true?");

if (answer.toLowerCase() === "non-zero number") {
  console.log("Gate opens! You may pass.");
} else {
  console.log("Wrong answer. You lose energy.");
  energy -= 10;
}

// Final Scene: Victory or Game Over
if (energy >= 60) {
  console.log(` Congrats, ${playerName}! You escaped the forest with ${energy} energy.`);
} else {
  console.log(` Game over, ${playerName}. You ran out of energy.`);
}