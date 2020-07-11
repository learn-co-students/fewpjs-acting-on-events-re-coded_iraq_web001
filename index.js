// Your code here
let dodger = document.getElementById('dodger');
let gameContainer= document.getElementById('game');
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 15}px`;
  }
}

function moveDodgerRight() {

  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  let gameContainerMaxWidth = gameContainer.offsetWidth-dodger.offsetWidth;

  if (left<360) {
    dodger.style.left = `${left + 15}px`;
  }
}
document.addEventListener("keydown", function(e){
if(e.key=== 'ArrowLeft'){

  moveDodgerLeft();
}
if(e.key=== 'ArrowRight'){
  moveDodgerRight();
}

});