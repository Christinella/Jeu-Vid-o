document.addEventListener('DOMContentLoaded', function () {
const car = document.getElementById('car');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let carLeft = 175; 
let score = 0;
let isGameOver = false;

function updateCar() {
  car.style.left = carLeft + 'px';
}

function createObstacle() {
  const obstacle = document.createElement('div');
  obstacle.classList.add('obstacle');
  obstacle.style.left = Math.random() * (gameArea.offsetWidth - 50) + 'px';
  gameArea.appendChild(obstacle);

  let obstacleInterval = setInterval(function () {
      if (!isGameOver) {
          obstacle.style.top = obstacle.offsetTop + 10 + 'px';

                  
      if (checkCollision(obstacle)) {
          gameOver();
          clearInterval(obstacleInterval);
          }

      if (obstacle.offsetTop > gameArea.offsetHeight) {
          obstacle.remove();
          score++;
          scoreDisplay.innerText = "Score: " + score;
          }
      }
        }, 20);
        }
function checkCollision(obstacle) {
  let carRect = car.getBoundingClientRect();
  let obstacleRect = obstacle.getBoundingClientRect();
    return !(
      carRect.right < obstacleRect.left ||
      carRect.left > obstacleRect.right ||
      carRect.bottom < obstacleRect.top ||
      carRect.top > obstacleRect.bottom
            );
        }

function gameOver() {
  isGameOver = true;
  alert("Game Over! Your score: " + score);
  location.reload(); 
        }

document.addEventListener('keydown', function (event) {
  if (!isGameOver) {
    if (event.key === 'ArrowLeft' && carLeft > 0) {
        carLeft -= 20;
        }
    if (event.key === 'ArrowRight' && carLeft < gameArea.offsetWidth - car.offsetWidth) {
        carLeft += 20;
        }
      updateCar();
            }
        });

setInterval(function () {
  if (!isGameOver) {
        createObstacle();
            }
        }, 2000);

       
updateCar();
    });