// let arr=[0,90,70,,7];
// let newArr=arr.filter((val)=>{
//     if(val>4) return true;
// });
// console.log(newArr);

// reduce  jb hume last me output ek hi number bne 

// let arr=[0,90,70,0,7];
// let newArr=arr.reduce((accumaloter,val)=>{
//     return accumaloter+val;
// },0);
// console.log(newArr);


// let arr=[1,2,3,4,5];
// destrcturing
// let [a,b, ,c]=arr;
// console.log(arr);

// Spread Oprator
let arr=[1,2,3,4,5,6,7,8,9,0];
// esme array ka refernce gya hai na ki copy array kii
// let arr2=arr;
let arr2=[...arr];
console.log(arr);


// Bakki jagaho pr spread opartor ko rest opatorbbolte hai 

