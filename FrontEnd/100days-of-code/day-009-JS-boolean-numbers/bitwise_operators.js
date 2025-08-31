// QUEST: You’re given a number that represents a combination of flags 
    // (like user permissions or feature toggles). 
// Your job is to decode which flags are active using bitwise operations

// Define flag constants
const READ    = 1 << 0; // 0001, decimal 1
const WRITE   = 1 << 1; // 0010, decimal 2
const EXECUTE = 1 << 2; // 0100, decimal 4
const DELETE  = 1 << 3; // 1000, decimal 8

// Simulate a user permission value
let userPermissions = 5 // or 0101 

console.log("Can Read:", (userPermissions & READ) !== 0);     
    // true, because 0101 & 0001 => 0001 = decimal 1 != 0

console.log("Can Write:", (userPermissions & WRITE) !== 0);  
    // false, because 0101 & 0010 => 0000 === 0
console.log("Can Execute:", (userPermissions & EXECUTE) !== 0); 
    // true, because 0101 & 0100 => 0100 = 4 !==0
console.log("Can Delete:", (userPermissions & DELETE) !== 0); 
    //false, because 0101 & 1000 => 0000 === 0