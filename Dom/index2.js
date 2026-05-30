let h1=document.querySelector("h1");
// console.dir(h1);
// recommende tariika
// Add class

// h1.classList.add("hulu");

// remove class 
h1.classList.remove("hulu");

// hati hogi lga dega lagi hogi hta dega
h1.classList.toggle("hulu");


// practice 
// what is the DOM? How Does it represent the HTML document


// What is diffrence between text node and element node

// inspect the following html in the bworser and identify each node 

// What is difrence between getElementById and QuerySelector
// What does getElementByClassName returns ? Is it an array ? yes it is 

// Task 1 :Select the heading of page by Id and change its text to "Welcome to Sheriyans !"

let heading=document.querySelector("#heading");
heading.textContent="Welcome to Sheriyans !";

let lists=document.querySelectorAll("li");
// console.log(lists);
// lists.forEach(  function(val){
//     console.log(val.textContent);
// })

for (let index = 0; index <lists.length; index++) {
    console.log(lists[index].textContent);
}

// What is difrence between innerHtml, TextContent,InnerHTML ?
// When did you use textContent instead of innerText?
// Select a paragraph and replace it's content with:
{/* <b>Updated</b> by Javascript */}

let p=document.querySelector("p");
p.innerHTML="<b>Updated</b> by Javascript"

// How can you get src using javascript

let img=document.querySelector("img");
img.getAttribute("src");

// What does setAtribute do 

// ADD a title  attributes to a div dynmically  