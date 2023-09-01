var dino = document.getElementById("dino");
var block = document.getElementById("block");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var count= 0;

function jump(){
    dino.style.top = "290px";
    setTimeout(function (){
     dino.style.top = "376px";
    },500)
    count++;
}
window.addEventListener('keydown' , jump);
window.addEventListener('click', jump);

setInterval(function gameOver(){
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("margin"));
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // console.log(blockLeft);
    // console.log(dinoTop);
    if((blockLeft < 52) && (dinoTop > 302) ){
result.style.display = "block";
// game.style.display = "none";
score.innerHTML = `Score: ${count}`;
    }
},10);

