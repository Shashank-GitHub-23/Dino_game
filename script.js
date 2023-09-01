let dino = document.getElementById("dino");

function jump(){
    dino.style.top = "290px";
    setTimeout(function (){
     dino.style.top = "376px";
    },500)
}
window.addEventListener('keydown' , jump);
window.addEventListener('click', jump);

// let jumpDino = document.getElementById("dino")

// jumpDino.addEventListener('keyup', function(){
//     dino.style.top = "290px";
//     setTimeout(function (){
//      dino.style.top = "376px";
//     },500)
// },false);
