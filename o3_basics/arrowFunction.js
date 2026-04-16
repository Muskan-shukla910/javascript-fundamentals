// Explicit return 

// const add=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(add(3,4));

// Implicit return
// const add=(num1,num2)=>  num1+num2;
// console.log(add(3,4));

// const add=(num1,num2)=> ( num1+num2);
// console.log(add(3,4));

const addTwo=(num1,num2)=>({username:"Hitesh"});

console.log(addTwo(1,2));

// const myArray=[2,13,4,12,5,6];
// myArray.forEach(()=>{

// })


// function test() {
//   console.log(this);
// }
// test();

function outer() {
  const arrow = () => {
    console.log(this);
  };

  arrow();
}

outer();