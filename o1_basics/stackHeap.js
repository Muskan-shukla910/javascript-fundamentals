// Primitive dataTypes STores in stack.It 

// "Primitive data types are the most basic data types in JavaScript that store a single, fixed value directly in stack memory and are immutable in nature." it is call by value 
// Call by ValueCopy banti hai, original safetypeofType check kar sakte hain

let myName="Musakn Shukala";
let changeName=myName;
changeName="Om";
console.log(changeName);
console.log(myName);


/* Non primitive (call by reference)  
Non-Primitive data types are data types in JavaScript that can store multiple values together. They are mutable, meaning they can be directly modified. They are stored in Heap memory and the stack only holds their reference. When copied, the reference is copied — both variables point to the same heap object. This is called Call by Reference. JavaScript has 3 non-primitive types — Object, Array, and Function."


*/

let userOne={
    email:"user@google.com",
    name:"muskan",
    RollNo:123,
    id:1
}
let userTwo=userOne;
userTwo.email="user2@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
// console.log(userOne);
// console.log(userTwo);
