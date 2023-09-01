var dino = document.getElementById("dino");
let block = document.getElementById("block");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = document.getElementById("game");
let count= 0;

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
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("margin-left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // console.log(blockLeft);
    // console.log(dinoTop);
    if((blockLeft < 51) && (dinoTop > 305) ){
result.style.display = "block";
game.style.display = "none";
score.innerHTML = `Score: ${count}`;
    }
},10)

