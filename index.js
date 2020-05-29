// Your code here
// Your code here
let dodger = document.getElementById("dodger");
const box = document.querySelector("#game");
dodger.style.backgroundColor = "#FF69B4";

//trigger  keydown event on document
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  } else if (e.key === "ArrowDown") {
    moveDown();
  }
});

//fix left value and return it
function fixLeft() {
  //take out px from 180px it reamin 180
  let leftNumber = dodger.style.left.replace("px", "");
  //convrt string to num
  let left = parseInt(leftNumber);
  return left;
}

//move left function
function moveDodgerLeft() {
  console.log("Left Move");
  let left = fixLeft();
  if (left > 0) {
    dodger.style.left = `${left - 10}px`;
  }
}

//move right function
function moveDodgerRight() {
  console.log("Right Move");
  let left = fixLeft();
  if (left > 0) {
    dodger.style.left = `${left + 10}px`;
  }
}

//move up function
function moveUp() {
  console.log("Up Move");
  const bottom = fixBottom();
  if (bottom <= box.clientHeight - 30) {
    dodger.style.bottom = `${bottom + 10}px`;
    console.log((dodger.style.bottom = `${bottom + 10}px`));
  }
}

//move down function
function moveDown() {
  console.log("down Move");
  const bottom = fixBottom();
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 10}px`;
  }
}



//fix bottom value and return it
function fixBottom() {
  let bottomNumber = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumber);
  return bottom;
}
