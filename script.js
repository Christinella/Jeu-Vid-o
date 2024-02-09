
document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("element");

  function moveLeft() {
    const currentLeft = parseInt(window.getComputedStyle(element).left);
    element.style.left = currentLeft - 40 + "px";

  }

  function moveRight() {
    const currentLeft = parseInt(window.getComputedStyle(element).left);
    element.style.left = currentLeft + 40 + "px";
  }
  

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveLeft();
      
    } else if (event.key === "ArrowRight") {
      moveRight();
    }
  });
});
const player = document.getElementById('element');
const obstacle1 = document.getElementById('obstacle1');
const score1 = document.getElementById('score');

let score =0;

function collision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleReact1 = obstacle1.getBoundingClientRect();

  if (
playerRect.top < obstacleReact1.bottom &&
playerRect.bottom > obstacleReact1.top &&
playerRect.left < obstacleReact1.right &&
playerRect.right > obstacleReact1.left 
    ){
clearInterval(scoreInterval);
alert ('Tas trop! Your score is :' + score);
    }
  }
const scoreInterval = setInterval(() => {
  score++;
  score1.textContent = score;
},1000);

setInterval(collision, 50);




