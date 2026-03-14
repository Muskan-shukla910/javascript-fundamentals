// const { use } = require("react");

// const { use } = require("react");

// Object destructing


// destrucring


// const {name,age,course}=user;
// console.log(name,age,course);

// without destrucring
// const name=user.name;
// const age=user.age;
// console.log(name,age);

// Array destrucring
const arr=[21,3,43,56,78,90];
const [first,secound,third]=arr;
console.log(first,secound,third);

// update using destrucring
// const {name:userName,age:userAge,course}=user;
// console.log(userName,userAge,course);

// For of loop 

// for(let keys of Object.values(user)){
    // console.log(keys);
// }

// for(let keyVaues of Object.entries(user)){
//     console.log(keyVaues);
// }


// Symbol

const mySym=Symbol("key1");

const user={
    name:"Muskan",
    age:22,
     [mySym]:"myKey1",
    course:"BCA",
    id:123
   
}


console.log(typeof user[mySym]);

user.greeting=function(){
    console.log("Hello JS User");
}
console.log(user.greeting());


user.greetingTwo=function(){
    console.log(`Hello JS User ,${this.name}`);
}

console.log(user.greetingTwo());