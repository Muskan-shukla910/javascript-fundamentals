// // let marks1=12;
// // let marks2=32;
// // let marks3=33;
// // let marks4=1;

// let marks=[100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);
//   let arr=["Muskan",122,true,9.0];
//   console.log(arr);

// //   push => Insert element at the end
// arr.push(2);
// console.log(arr);
// // pop => delete element from end 
// arr.pop();
// console.log(arr);

let arr=[10,20,30];
let arr2=arr;
arr2.push(20);
for(let num of arr){
    console.log(num);
}

// splice , slice


//             0  ,1   ,2     ,3  ,4
const arr1 = ['a', 'b', 'c', 'd', 'e'];

let arr3=arr1.slice(1, 3)     // ['b', 'c'] — doesn't modify original
console.log(arr3)
arr1.splice(1, 2)    // removes 2 items from index 1 — modifies original!

console.log(arr1);