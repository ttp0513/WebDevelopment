// # Random Dice Roller and Game Score Tracker

// ## Goals
// 1. Simulate rolling a dice using math.random()
// 2. Keep track of how many times each number appears
// 3. Let the user roll the dice multiple times and record the score


console.log("Welcome to Dice Roller");

// Score tracker object
const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// Function to roll the dice 1-6 and update the score tracker
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll]++;
    console.log(`You rolled a ${roll}`);
}

// Function to display score
function displayScore() {
    console.log("Dice Role Score Tracker:");
    for (const roll in scoreTracker) {
        console.log(`${roll}: ${scoreTracker[roll]} times`);
    }
}

// Simulate rolling the dice 10 times
for (let i = 0; i < 10; i++) {
    rollDice();
}   

// Display the score after rolling
displayScore();