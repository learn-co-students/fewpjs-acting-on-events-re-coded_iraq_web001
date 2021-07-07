// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  console.log(e)
  if (e.key === "ArrowRight") {
  moveDodgerRight() 
  }
});

function moveDodgerRight() {
 let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 console.log(leftNumbers,left)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}




