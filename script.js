// var dino = document.getElementById("dino");
// let block = document.getElementById("block");
// let result = document.getElementById("result");
// let score = document.getElementById("score");
// let game = document.getElementById("game");
// let count= 0;

// function jump(){
//     dino.style.top = "290px";
//     setTimeout(function (){
//      dino.style.top = "376px";
//     },500)
//     count++;
// }
// window.addEventListener('keydown' , jump);
// window.addEventListener('click', jump);

// setInterval(function gameOver(){
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("margin-left"));
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//     console.log(blockLeft);
//     // console.log(dinoTop);
//     if((blockLeft < 51) && (dinoTop > 305) ){
// result.style.display = "block";
// game.style.display = "none";
// score.innerHTML = `Score: ${count}`;
//     }
// },10)

var character = document.getElementById("character");
var result = document.getElementById("result");
var game = document.getElementById("game");
var score = document.getElementById("score");
var count = 0;
var sound = document.getElementById("sound")

function jump(){
    character.style.top = "110px";
    setTimeout(function(){
        character.style.top = "170px"
    },500);
    sound.play();
    count++
};

window.addEventListener("keydown", jump);

var block = document.getElementById("block");

setInterval(function gameOver(){
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((blockleft < 40) && (characterTop > 120)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score : ${count}`;

    }
},10);