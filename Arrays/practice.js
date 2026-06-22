// cReate array of three fruits and print secound fruit
let fruits=["Papaya","Banna","Orange"];
// console.log(fruits[1]);
// fruits.push("pineapple");

// fruits.unshift("Mango")
// console.log(fruits);    

// Replace banna with kiwi
fruits.pop();
fruits.push("Kiwi");
console.log(fruits);

// Insert red and blue at index 1 in this array
let colors=["Green","yellow"];
colors.splice(1,0,"Red ","Blue");
console.log(colors);


// Extract only the middle 3 elements from this array

// let items=[1,2,3,4,5,6];
// let newArr=items.slice(1,4);
// console.log(newArr);

//  sort this array alphabaticalyy and reverse it

let names=["Zara","Arjun","Mira","Bhavya"];
let newArr=names.reverse();
newArr.sort();
console.log(newArr);


// squares of each number
let arr1=[1,2,3,4];
let newArr1=arr1.map((arr)=>{
   return arr*arr;
})
console.log(newArr1);

let arr2=[5,12,6,20,3];
let newArr2=arr2.filter((val)=>{
    if(val>10){
        return true;
    }
});
console.log(newArr2);

// use reduce to find the sum of this array
// let arr=[10,20,30];
// let newa=arr.reduce((acc,val)=>{
//    return acc+val;
// },0);
// console.log(newa);


// destructure this on the basisof first and last name
let fullName=["Harsh","Sharms"];
[firstName,LastName]=fullName;

// merge two arrays using spread oprator

let a=[1,2];
let b=[5,6];
let c=[...a,...b];
console.log(c);

// Add india to the start of this array using spread
let countries=["USA","Japan"];
countries=["india",...countries];
console.log(countries);

