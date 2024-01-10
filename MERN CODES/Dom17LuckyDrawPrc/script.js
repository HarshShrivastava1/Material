var btn = document.querySelector("#btn");
var num = document.querySelector("#num");
var result = document.querySelector("#result");

btn.addEventListener("click",function() {
    var x = Math.floor(Math.random()*6)
    num.innerHTML = x
    if (x===5) {
        result.innerHTML = "YOU WON! "
        result.style.color = "green"
        result.style.marginLeft = "49%"
    } else {
        result.innerHTML = "YOU LOSE! BETTER LUCK NEXT TIME"
        result.style.color = "red"
        result.style.marginLeft = "40%"
    }
})