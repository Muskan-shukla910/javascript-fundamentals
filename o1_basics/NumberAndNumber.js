let gsoc = new Date("2026-03-24");
let today = new Date();

if (gsoc > today) {
  console.log("Abhi time hai!");
} else {
  console.log("Deadline nikal gayi!");
}

let deadline = new Date("2026-04-08");
today = new Date();
let diff = deadline - today;
let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
console.log(daysLeft + " days bache hain!");

const score=300;
console.log(typeof score);
const balance =new Number(100);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toFixed(1));
const num=186.699;
console.log(typeof num.toFixed(2));
console.log(num.toPrecision(4));
console.log(num.toString());


// we cannot compare Objects Directly 
let a=new Number(20);
let b=new Number(20);
console.log(a==b);
// let b=20;
console.log(typeof b);
let obj1={
    name:"Rohit",

}
let obj2=obj1;

obj2={
    name:"Rohit",
}
// Why? Objects reference se compare hote hain, value se nahi!
// a aur b memory mein alag jagah store hain!


//non Primitive  always compare with refernce 
console.log(obj1==obj2);


