let dino = document.getElementById("character");
let block = document.getElementById("block");
let result = document.getElementById("result");
let score = document.getElementById("score");
let game = document.getElementById("game");
let count= 0;
let sound = document.getElementById("sound");

function jump(){
    dino.style.top = "290px";
    setTimeout(function (){
     dino.style.top = "376px";
    },400)
    count++;
    sound.play();
}
window.addEventListener('keydown' , jump);
window.addEventListener('click', jump);

setInterval(function gameOver(){
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    if((blockLeft < 52) && (dinoTop > 302) ){
    result.style.display = "block";
    block.style.animationPlayState = "paused";
    score.innerHTML = `Score: ${count}`;
    }
},10);

