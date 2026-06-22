// this keyword is a special type of keyword , like all special keyword have same value but this keyword changes its value and nature  on the basis of where You using this keyword
// impoartant note this ki value globally and function ke andr WIndow hai and Object ki method ke andar  object hai

// global scope
console.log(this);

// inside function
// window object deta hai
function a(){
    console.log(this);
    
}
a();

// jo function objectb ke andr hota hai use hum  method khte hai 
// method
// esme hume object milta hai
let obj={
    name:"muskan",
    age:23,
    city:"Lucknow",
    sayName:function(){
        console.log(this.name);
        console.log(this.city);
        
    } 
}
obj.sayName();


// enbvent handlers
// esme hume bo milta hai jis prr event lga hai     
let h1=document.querySelector("h1");

h1.addEventListener("click",function(){
    alert();
    console.log(this);
    
});


// call by bind
// function call ke time app set kr sakte hai this ki value khya hgi
let obj={
    name:"HArsh",
}
function abcd(){
console.log(this);

}
abcd();