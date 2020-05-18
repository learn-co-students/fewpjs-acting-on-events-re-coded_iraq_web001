// Your code 
let dodger = document.getElementById('dodger');
let game = document.getElementById('game');



function moveDodgerLeft(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
    if (left>0) {
      dodger.style.left =`${left - 1}px`;
    }
}
function moveDodgerRight(){
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
    if (left<180) {
      dodger.style.left =`${left+1}px`;
    }
}
document.addEventListener("keydown", function(e){
  if(e.key === "ArrowRight"){
    moveDodgerRight();
  }
})

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowLeft"){
    moveDodgerLeft();
  }
})