// Object
// Key value

// const { use } = require("react");

// const { use } = require("react");

const user={
    name:"Rohit",
    age:20,
    emailId:"user@gmail.com",
    amount:3400,
    "home adress":"Lucknow"
}
// console.log(user);
console.log(user.age);

// CRUD (create,delete,update,read)

// Update
user.addhar=12345;
user.amount=9000;

console.log(user);

// delete
delete user.emailId;
console.log(user);

// Acess the element
console.log(user["name"]);
console.log(user.age);
console.log(user["home adress"]);


// Important 

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


// For in loop
for(let keys in user){
    console.log(keys,user[keys]);
}

const name=user.name;
const age=user.age;
console.log(name,age);