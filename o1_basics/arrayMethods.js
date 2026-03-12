// map 

// Creates a new array by transforming each element.

let nums=[1,2,3];
let doubled=nums.map(n=>n*2);
console.log(doubled);

// filter
// Returns elements that match a condition.
// Used to remove unwanted items.
let nums2 = [1,2,3,4,5];

let even = nums2.filter(n => n % 2 === 0);

console.log(even);
// [2,4]
// includes
let fruites=["banana","Mango","Papaya"];
let fruites1=fruites.includes("banana");
console.log(fruites1);

const arr=[10,40,2,0,30];
// ascending order
arr.sort((a,b)=> a-b);
console.log(arr);