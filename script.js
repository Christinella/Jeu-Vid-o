
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
document.getElementById("start").addEventListener("click" ,function(){
  document.getElementById("start").style.display="none";
  
})
