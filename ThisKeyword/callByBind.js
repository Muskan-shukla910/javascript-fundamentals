// call apply bind
// function ko call krte wakt app set kr sakte ho ki uski this ki value kya hogi
  let obj={
    name:"Muskan",
    age:22,

  }
  function abscd(){
    console.log(this);
  }
  abscd.call(obj);

// this means calling object
