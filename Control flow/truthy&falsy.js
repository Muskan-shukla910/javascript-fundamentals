// const userEmail="h@hitesh.ai";
// const userEmail="";
const userEmail=[];


if (userEmail) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user email");
    
}

// Truthy and falsy value
//falsy values :-   false ,0,-0,bigInt(0n),"",null,undefined,NaN
// truthy values [],"0",'false',"false"," ",function(){ }
if(userEmail.length===0){
    console.log("This is an empty array")
}

const emptyObhj={};
if (Object.keys(emptyObhj).length==0) {
    console.log("Object is empty");
}

// Important concepts for interview
// false==0  , true
// false=="", true
// 0=='' true

// ye tab use hota hai like jb hum database se backend me data maga rhe hote hai us time suppose ngi mil pa rha hai dta tb ya toh null ata hai ya undefined
// Nullish coaleshing Oprator (??):null  And Undefined
let val1;
// val1=null ?? undefined;
// val1=5 ?? 10;
// val1=undefined ?? 15
val1=null ?? 30 ?? 20;
console.log(val1);

// Ternary oparator 
// condition?true :false
const icePrice=100;
icePrice >=80 ? console.log("less then 80"):console.log("More then 80");

if(icePrice>10) console.log("yes this is my implicit Scope");
 