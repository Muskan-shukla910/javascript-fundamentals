let arr=[10,30,50,70];
let arr1=["Rohit",11,true];
let arr3=[90,4,false];
// arr.push(arr1);
// console.log(arr);
// let arr3=arr.concat(arr1);
// console.log(arr3);
// const arr4=[arr,arr1,arr3];

const arr4=[...arr,...arr1,...arr3];
console.log(arr4);



