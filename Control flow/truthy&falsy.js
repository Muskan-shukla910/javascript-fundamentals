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