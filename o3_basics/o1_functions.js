// function Add(num1,nume2){
//     let sum=num1+nume2;
//     console.log(sum);
// }
function Add(num1,nume2){
    let sum=num1+nume2;
    return sum;
}

let result=Add(1,3);
console.log(result);


function loginUser(username="Tanya"){
    if(!username){
        console.log("please enter your name");
        return;
    }
    
 return `${username} just logged in`
    
   
}

// let name=loginUser("Muskan");
// console.log(name);
// console.log(loginUser("Muskan"));

// this is rest oparator
// function calculatePrice(...num1){
//     return num1;
// }
// console.log(calculatePrice(100,200,300));

function calculatePrice(val1,val2,...num1){
    return num1;
}
// console.log(calculatePrice(100,200,300,1000,2000,400));

let res=calculatePrice(100,299,300,99,200,300,200);
console.log(res);

for(let num in res){
    // console.log(num);
}


const user={
    username:"muskan",
    price:199
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.username} and price ${anyobject.price}`)
}

// handleObject(user);
handleObject({
    username:"Tanya",
    price:123
});

const myNewArray =[200,400,600 ];


// secound array 
function returnSecoundValue(getArray){
    return getArray[1];
}
const returnedArray=returnSecoundValue(myNewArray);
console.log(returnedArray);