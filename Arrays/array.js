let arr=[2,3,4,5];
// map hum tb use krte ha jb aapko ek new array  banana hai pichle ARRay ke basis prr

// Map dikhte hii mun me ek blank arrray bna lo 
// eske andr ka function jo jo return kre bo dalte rho empty array me


// let newArr=arr.map(function(val){
//     return 12;
// });


// agar kuchnbhi milega undefined aayega 
let newArr=arr.map((val)=>{
    if(val>10) return val;
})
console.log(newArr);

// kaise pqhchqne map use krnsa hai 
// JAb bhi aapko aisa dikhe ek array se new array bange and bo new array kcuh values ko rakhega
