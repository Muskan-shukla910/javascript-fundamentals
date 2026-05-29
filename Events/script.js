// let inp=document.querySelector("input");
// inp.addEventListener("input",function(evt){
//     // console.log(data);
//     if(evt.data !== null){
//         console.log(evt.data);

//     }
// });


// let sel=document.querySelector("select");
// let h1=document.querySelector("h2");
// sel.addEventListener("change" ,function(dets){
//     console.log();
//     h1.textContent=`${dets.target.value} device selected`;
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (dets) {
//     console.log(dets.key);
//     h1.textContent = `${dets.key}`
// });
// let inp = document.querySelector("input");
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//     inp.click();

// })
// inp.addEventListener("change", function (dets) {
//     // console.log(dets.target.value);
//     console.log(dets.target.files[0].name);
    // console.log(dets);
    // if (dets.target.files) {
    //     btn.textContent = dets.target.files[0].name;
    // }

    // more simple and clear code 
//     const file=dets.target.files[0];
//     if(file){
//         btn.textContent=file.name;
//     }
// });



// Input validation
// form validation
// let inputs=document.querySelectorAll("input");
// let form=document.querySelector("form");
// let main=document.querySelector("#main");
// form.addEventListener("submit",function(dets){
//     // console.log(dets);
    
//     dets.preventDefault();
//   let card= document.createElement("div");
//   card.classList.add("card");
//   let profile=document.createElement("div");
//   profile.classList.add("profile");
// //   added profile in card 

// let img=document.createElement("img");
// img.setAttribute("src","SSOC.jpeg");
  

// let h3=document.createElement("h3");
// h3.textContent=inputs[1].value;
// let h5=document.createElement("h5");
// h5.textContent=inputs[2].value;
// let p=document.createElement("p");
// p.textContent=inputs[3].value;


// profile.appendChild(img);
// card.appendChild(profile);

// card.appendChild(h3)
// card.appendChild(h5)
// card.appendChild(p);

// main.appendChild(card);

// inputs.forEach((inp)=>{
//     if(inp.type !== "submit"){
//         inp.value=" ";
//     }
//     // inp.value=" ";
// })
// });



// mouseOver and Mousemove

let a=document.querySelector("#a");
// a.addEventListener("mouseover",function(){
// abc.style.backgroundColor="yellow"
// });

window.addEventListener("mousemove",function(dets){
    a.style.top=dets.clienty+"px";
    a.style.left=dets.clientX+"px";
});

window.addEventListener("mousemove",function(dets){
    console.log(dets);
    
})




