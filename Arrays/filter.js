// let arr=[0,90,70,,7];
// let newArr=arr.filter((val)=>{
//     if(val>4) return true;
// });
// console.log(newArr);

// reduce  jb hume last me output ek hi number bne 

let arr=[0,90,70,0,7];

let newArr=arr.reduce((accumaloter,val)=>{
    return accumaloter+val;
},0);
console.log(newArr);