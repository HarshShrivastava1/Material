var btn = document.querySelector("button")
var lotteryBox = document.querySelector("#box")
var result = document.querySelector("h2")


btn.addEventListener("click",function(){
  var num = Math.floor(Math.random()*6)
  console.log(num)
  lotteryBox.innerHTML = num
  if(num == 5){
    result.innerHTML = "RESULT : YOU WON"
    result.style.color = "green"
  }else{
    result.innerHTML = "RESULT : YOU LOST"
    result.style.color = "red"
  }
})