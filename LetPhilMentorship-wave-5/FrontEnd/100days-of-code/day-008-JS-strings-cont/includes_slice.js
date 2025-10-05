let spell = "cast fireball";

console.log(spell.includes("fire")); // true
console.log(spell.includes("Fire")); // false (case-sensitive!)

let scroll = "cast fireball";

// Check if "fire" starts at index 5
console.log(scroll.includes("fire", 5)); // true

// Check if "cast" starts at index 5
console.log(scroll.includes("cast", 5)); // false

let command = "cast invisibility";

// Remove "cast " (5 characters)
spell = command.slice(5);
console.log(spell); // "invisibility"

let code = "DRAGON-X92";

// Extract "DRAGON"
let creature = code.slice(0, 6);
console.log(creature); // "DRAGON"

let artifact = "amulet-of-power";

// Get last 5 characters
let suffix = artifact.slice(-5);
console.log(suffix); // "power"