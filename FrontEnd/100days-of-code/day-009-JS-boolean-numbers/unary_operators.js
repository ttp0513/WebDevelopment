// Lv-1: Type Conversion with '+'
let input = "42";
let converted = +input;
console.log("Level 1: Convert '42' to a number");
console.log("Result:", converted); // 42
console.log("Type:", typeof converted); // "number"

// Lv2: Negation with '-'
let health = 100;
let cursedHealth = -health;
console.log("Level 2: Apply curse to health");
console.log("Cursed Health:", cursedHealth); // -100

// Lv3: Increment with '++'
let level = 3;
console.log("Level 3: Level up!");
console.log("Before:", level);
console.log("After:", ++level); // 4

// Lv4: Decrement with '--'
let lives = 4
console.log("Level 4: Monsters killed you")
console.log("Before:", lives);
console.log("After:", --lives); // 3

// Lv 5: Logical Not with '!'
let hasKey = false;
console.log("Level 5: Check if door is locked");
console.log("Door locked?", !hasKey); // true

// Lv 6: Check type with 'typeOf'
let treasure = "gold";
console.log("Level 6: Inspect the treasure");
console.log("Type of treasure:", typeof treasure); // "string"

// Level 7: Delete a Property with 'delete'
let inventory = { sword: "steel", potion: "healing" };
console.log("Level 7: Drank the potion");
delete inventory.potion;
console.log("Inventory:", inventory); // { sword: "steel" }