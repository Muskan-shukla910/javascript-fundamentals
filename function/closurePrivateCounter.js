function countForMe(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    };
}

// closure me hamehsa pahlibaar call kjrne se koi kaam nhu hita hai hamesha dooshri baar call krne padti  hai 
// hr baar count for me ke liye new call hogi and new memory location banega
let fnc=countForMe();
fnc();
fnc();

let fnc2=countForMe();
fnc2();
fnc2();
fnc2();

let fnc3=countForMe();
console.log("this is my function 3");
fnc3();
fnc3();
