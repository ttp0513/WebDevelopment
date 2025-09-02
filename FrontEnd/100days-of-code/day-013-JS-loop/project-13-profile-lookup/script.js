// Create a function that takes a name and a property as arg
// The function should lookup the name and returns the value of the property argument

// Generate a random contact list

let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// Build a lookup function
function lookUpProfile(name, prop) {
    // first, loop each element in the array and check if the firstName matches the name argument
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
                // Note: contacts[i].prop will return undefined if the property doesnt have "prop" because 
                // contact[i].prop = contact[i]["prop"]
            } else {
                return 'No such property';
            }

        }
    }
    return 'No such contact';
}

// Checking the function
console.log(lookUpProfile("Sherlock", "likes"));