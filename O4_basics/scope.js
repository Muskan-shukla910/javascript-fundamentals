function a(){
//    var b=10;
    function c(){
        console.log(b);
        function d(){
            
            console.log(b);
        }
        d();
    }
     c();
}
            // console.log(b);

a();

