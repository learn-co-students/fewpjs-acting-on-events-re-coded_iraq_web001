// Your code here
function moveDodgerLeft(){
  let dodger = document.getElementById('dodger')
 let changePx = dodger.style.left.replace("px", "")
  let left = parseInt(changePx, 10)
  if(left>0){
    dodger.style.left = `${left-1}px`
  }
}



function moveDodgerRight(){
  let dodger = document.getElementById('dodger')
 let changePxR = dodger.style.left.replace("px", "")

  let left = parseInt(changePxR, 10)

  if(left>0){
             //console.log('ss')

    dodger.style.left = `${left+1}px`
  }
}

document.addEventListener("keydown",function(e){
  if(e.key ==="ArrowLeft"){
    moveDodgerLeft()
  }
  if(e.key ==="ArrowRight"){
    moveDodgerRight()
  }
})