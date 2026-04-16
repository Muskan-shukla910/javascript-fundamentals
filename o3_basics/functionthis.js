const user={
    username:"Hitesh",
    price:999,
    welcomeMessgae:function(){
        console.log(`${this.username} ,Welocome in my website`);
        // this gives current context
        console.log(this);
    }
   
}
// user.welcomeMessgae();
// user.username="SAM";
// user.welcomeMessgae();

console.log(this);

function chai(){

    // this will not work in function 
    let username="muskan";
    console.log(this.username);
}
// chai();

hello=()=>{
    console.log("Muskan Hello")
    console.log(this);
}
hello();

