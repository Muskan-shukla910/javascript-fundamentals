// scope > functional scope ,global scope, block scope

// functional scope:- can be used inside function
// global scope:- can be used entire code anywehre
// block scope :- {} curly braces hi use ho sakte hai 

function abcd(){
    var a=12;
}

// execution content 
// it is a hypothetically container
// this done using two phase memory and execution phase first phase me memory allocation hota hai and secounf me code actually me run hota hai 


// .js lexical scoping and dynmically scoping 

// lexiacal scoping => kaha pr aap physically availble ho ye poori tarhh  depend krta hai ki aap kya acess kr paoge 
function abcd(){
    let a=12;
    function dfg(){
        console.log(a);
        
    }
}

// dynmically scoping  => kaha se call kr rhe ho uspe depend krta hai kya value milegi 

// javascript hamari lexiaclly scoped hai 

let a=12;
function abcd(){
    console.log(a);
}
function efg(){
    let a=12;
    abcd();
}

efg();

