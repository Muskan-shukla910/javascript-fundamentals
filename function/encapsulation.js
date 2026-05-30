function clickLimiter() {
    // this click is my private variable you cannot vhange this value beyond its scope
    let click = 0;
    return function () {

        if (click < 5) {
            click++;
            console.log(`clicked : ${click} times`);
            
        }
        else{
            console.log("limit exceeded, try after some time ");
        }
    }
}

let fnc=clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();