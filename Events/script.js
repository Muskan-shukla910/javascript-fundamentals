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

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (dets) {
    console.log(dets.key);
    h1.textContent = `${dets.key}`
});
let inp = document.querySelector("input");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    inp.click();

})
inp.addEventListener("change", function (dets) {
    // console.log(dets.target.value);
    console.log(dets.target.files[0].name);
    // console.log(dets);
    // if (dets.target.files) {
    //     btn.textContent = dets.target.files[0].name;
    // }

    // more simple and clear code 
    const file=dets.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
})