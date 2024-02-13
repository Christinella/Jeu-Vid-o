
document.addEventListener("DOMContentLoaded", function () {
  const personnage = document.getElementById("personnage");

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
const obstacle1 = document.getElementById('obstacle1');
const screenHeight = window.innerHeight;
const speed = 10;

function DeplacementObstacle() {
  let currentTop = parseFloat(window.getComputedStyle(obstacle1).top);


  currentTop += speed;
  if (currentTop > screenHeight) {
    currentTop = -parseFloat(window.getComputedStyle(obstacle1).height); // Réinitialise l'objet en haut
  }
  obstacle1.style.top = `${currentTop}px`;

  requestAnimationFrame(DeplacementObstacle);
}
DeplacementObstacle()


const obstacle2 = document.getElementById('obstacle2');
const screenHeight1 = window.innerHeight;
const speed1 = 100;

function DeplacementObstacle1() {
  let currentTop = parseFloat(window.getComputedStyle(obstacle2).top);


  currentTop += speed;
  if (currentTop > screenHeight) {
    currentTop = -parseFloat(window.getComputedStyle(obstacle2).height); // Réinitialise l'objet en haut
  }
  obstacle2.style.top = `${currentTop}px`;

  requestAnimationFrame(DeplacementObstacle1);
}
DeplacementObstacle1()

const obstacle3 = document.getElementById('obstacle3');
const screenHeight3 = window.innerHeight;
const speed3 = 100;

function DeplacementObstacle2() {
  let currentTop = parseFloat(window.getComputedStyle(obstacle3).top);


  currentTop += speed;
  if (currentTop > screenHeight) {
    currentTop = -parseFloat(window.getComputedStyle(obstacle3).height); // Réinitialise l'objet en haut
  }
  obstacle3.style.top = `${currentTop}px`;

  requestAnimationFrame(DeplacementObstacle2);
}
DeplacementObstacle2()


const player = document.getElementById('element');
const obstacle = document.getElementById('obstacle1');
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
alert ('Tas trop la rage! Your score is :' + score);
    }
    function recommencerJeu() {
      
    }
    
    // Vérifier les collisions à chaque intervalle de temps
    setInterval(detecterCollision, 100); // 
    recommencerJeu();
  
  
  }
const scoreInterval = setInterval(() => {
  score++;
  score1.textContent = score;
},1000);

setInterval(collision, 50);

