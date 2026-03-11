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