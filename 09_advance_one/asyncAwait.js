
// const p=new Promise((resolve,reject)=>{
//     resolve("promise resolve  value ")
// });

// async function fnc() {
//     return "Namste "
//     // return p;   
// }
// let a=fnc();
// // console.log(a);
// a.then((res)=>{console.log(res);
// });


let p=new Promise((resolve,reject)=>{
    setTimeout(() => {
         resolve("Promise was resolved");
    }, 1000);
});

async function handlePromis() {
    p.then((res)=>{console.log(res);
    });
    console.log("Hwllo javascript");
    
}
handlePromis();
// console.log(p);


// using awaut ketowrd to resolve a promise

let printHello=new Promise((resolve,reject)=>{
    resolve("Hello printed  !! ")
})
async function Hello() {
    let print=await printHello;
    console.log(print);
    
}
Hello();
