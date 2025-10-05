// AND operator

console.log(true && "go");       
// "go" → both are truthy, returns second

console.log(false && "go");      
// false → first is falsy, returns it

console.log("hello" && 123);     
// 123 → both truthy, returns second

console.log(0 && "fallback");    
// 0 → falsy, returns 0

console.log(null && "value");    


// OR operator

console.log(false || "fallback");     
// "fallback" → first is falsy, second is truthy

console.log("hello" || "world");      
// "hello" → first is truthy, so it's returned

console.log(0 || 100);                
// 100 → 0 is falsy, so fallback is used

console.log("" || "default");         
// "default" → empty string is falsy

console.log(null || undefined);       
// undefined → both are falsy, returns last one

// Nullish Coalescing

console.log(null ?? "default");       
// "default" → left is null

console.log(undefined ?? "fallback"); 
// "fallback" → left is undefined

console.log(0 ?? 100);                
// 0 → 0 is not null/undefined, so it's returned

console.log("" ?? "empty");           
// "" → empty string is not null/undefined

console.log(false ?? true);           
// false → boolean false is not null/undefined