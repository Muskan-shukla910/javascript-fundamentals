function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    return y();
}
const a=x();
console.log(a);

// a();