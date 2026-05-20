let heading1=document.querySelector("h1");
// console.dir(heading1);
// Text content acess:  innerText,InnerContent, innerHtml
// heading1.innerHTML="Hello Muskan kaisi ho";

// Inner HTml se hum tag ke andr html likh sakte hai bakki innerText,InnerContext Text ko change krne ke liye use hote hai

heading1.innerHTML="<i>hey , This is muskan</i>"
console.dir(heading1);
heading1.hidden=false;

let a =document.querySelector("a");
// Attribute manipulation
// We can also manipulate using get and set attribute
a.href="http://google.com"