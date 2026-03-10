// "String in JavaScript is a primitive data type that stores a sequence of characters. Strings are immutable — they cannot be modified directly, any operation creates a new string. JavaScript provides many built-in methods like slice, replace, split, includes etc. to manipulate strings. Strings can be created using single quotes, double quotes, or template literals — template literals being the most powerful as they support expressions and multiline strings."


let str="Muskan";
console.log(str);
let rollNo=13;
console.log(`My name is ${str} And my roll number is ${rollNo}`);

const str2=new String ("Muskan");
let str4 = "Hello";
str4[0] = "Y";           // change karne ki koshish
console.log(str4);       // "Hello" change nahi hua!

// Nayi value assign karni padti hai
str4 = str4.replace("H", "Y");
console.log(str4);       // "Yello"
// Number to String
// let num = 42;
// let str5= String(num);       // "42"
// let str4 = num.toString();   // "42"
// let str3 = num + "";         // "42"

// // String to Number
// let str4 = "42";
// let num2 = Number(str4);     // 42
// let num3 = parseInt(str4);   // 42
// let num4 = +str4;            // 42