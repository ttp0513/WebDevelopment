console.log(10 > 5);         
// true, 10 is greater than 5

console.log(3 <= 2);         
// false, 3 is not less than or equal to 2

console.log("apple" < "banana"); 
// true, string comparison is based on Unicode values; "apple" comes before "banana" alphabetically

console.log("5" == 5);       
// true, loose equality (`==`) allows type coercion, so "5" (string) is converted to 5 (number)

console.log("5" === 5);      
// false, strict equality (`===`) checks both value and type; string !== number

console.log(null == undefined);  
// true, loose equality considers null and undefined equal in value

console.log(null === undefined); 
// false, strict equality sees null and undefined as different types