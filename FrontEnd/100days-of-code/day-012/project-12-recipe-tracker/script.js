const car = {
  brand: "Toyota",
  model: "Corolla",
  year: undefined,
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
console.log(car.year !== undefined); // true

const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    addresses: [
    { type: "home", street: "123 Main St", city: "Anytown" },
    { type: "work", street: "456 Market St", city: "Workville" }
  ]
  }
  
  
};
console.log(person['contact']['addresses'][1]['city']);