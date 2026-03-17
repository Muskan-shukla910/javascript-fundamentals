// constructor

// const { use } = require("react");

// Singalton Object
// const tinder=new Object();


const tinderUser={};
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
console.log(Object.keys(tinderUser));

let keys=Object.keys(tinderUser);
for(let key of keys){
    console.log(key);
}

let value=Object.values(tinderUser);
console.log(value);

for(let values of value){
    console.log(values);
}

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// console.log(tinderUser);

let student={
    name:"Rohan",
    course:"BCA",
}


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            firstNAme:"Musakn",
            lastName:"Shukla"
        }

    }
}
// console.log(regularUser.fullname.userFullName.firstNAme);
const obj1={
    1:"a",
    2:"b",
    3:"c"
}

const obj2={
    4:"a",
    5:"b"
}
// spread oprator
const obj3={...obj1,...obj2};

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);


// when data comes from databse
const users=[
    {
        id:1,
        email:"h@gmail.com",

    },
    {
        id:2,
        email:"h@gmail.com",

    },
    {
        id:3,
        email:"h@gmail.com",

    },

]

// console.log(users[1].email);
// console.log(tinderUser);

