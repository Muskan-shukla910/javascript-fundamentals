// let inp=document.querySelector("input");
// inp.addEventListener("input",function(evt){
//     // console.log(data);
//     if(evt.data !== null){
//         console.log(evt.data);

//     }
// });


let sel=document.querySelector("select");
let h1=document.querySelector("h2");
sel.addEventListener("change" ,function(dets){
    console.log();
    h1.textContent=`${dets.target.value} device selected`;
});