/* 
Primitive Data Types
let num    = 42;           // Number
let str    = "Hello";      // String
let bool   = true;         // Boolean
let x;                     // Undefined
let empty  = null;         // Null
let sym    = Symbol("id"); // Symbol
let big    = 9999999999n;  // BigInt


 --------------------------------------------Non primitive-------------------------------------------

let obj  = { name: "Rahul" }; // Object
let arr  = [1, 2, 3];         // Array
let func = function() {};      // Function

typeof 42          // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object"  ⚠️ JS bug
typeof Symbol()    // "symbol"
typeof 42n         // "bigint"
typeof {}          // "object"
typeof []          // "object"  ⚠️
typeof function(){} // "function"

// Array sahi check karne ka tarika
Array.isArray([]) // true ✅
*/
let person1 = { name: "Rahul", age: 25 };
let person2 = person1;  // reference copy hua

person2.name = "Amit";  // person2 se change kiya

console.log(person1.name); // "Amit" ⚠️ person1 bhi badal gaya!
console.log(person2.name); // "Amit"
```

---

// ### Memory mein kya hua
// ```
// let person1 = { name: "Rahul" }

// Stack:                    Heap:
// person1 → [address 001]  →  { name: "Rahul" }
//                                     ↑
// person2 → [address 001]  ———————————  (same jagah point kar raha hai!)

// person2.name = "Amit"

// Stack:                    Heap:
// person1 → [address 001]  →  { name: "Amit" }  ← dono yahan point karte hain
// person2 → [address 001]  ↗