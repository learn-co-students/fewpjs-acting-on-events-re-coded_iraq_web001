let dodger = document.querySelector('#dodger')
document.addEventListener("DOMContentLoaded", function() {
  console.log(dodger.style.left);
});
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(rightNumbers, 10);
  
  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
});
