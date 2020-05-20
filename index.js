// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left < 400-40) {
    dodger.style.left = `${left + 1}px`;
  }
}



document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    dodger.style.bottom = `${bottom + 1}px`;
  }
  if (e.key === "ArrowDown") {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);

    dodger.style.bottom = `${bottom - 1}px`;
  }
});
