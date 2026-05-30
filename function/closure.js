// closure hote hai functions jo ki parant fnc ke ander ho aur wala function return ho rha ho,and returning function use kre , parent function ka koi variable use kree 

// this is very intresting topic 
// this is true after function end variables and function also will be end
// but whenever it becoms closure then function ka backlick bnta hai that name is [[environment]]

function a(){
    let a=12;
    return function(){
        console.log(a);
    };  
}

let abc=a();
abc();

// pros and cons
// you can make private variables
// global pollution 



// how variables are preserved