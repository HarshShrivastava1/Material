// DOM - Document object model

// DOM ke 4 pillars

// 1. Selection of an Element  ---
// 2. Changing HTML  ----
// 3. Changing CSS  ---
// 4. Event Listener  ---

// var h1 = document.querySelector("h1")
// h1.style.color = "rgb(60, 255, 0)"
// h1.innerHTML = "Hello"
// h1.style.backgroundColor = "black"

// document.querySelector("h1").innerHTML = "HEllooooo"

// var h = document.querySelector("h1")

// h.addEventListener("mouseenter",function(){
//     h.innerHTML = "Changed"
//     h.style.color = "red"
//     h.style.backgroundColor = "black"
// })

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("Bulb Jal gya");
    flag = 1;
  } else {
    bulb.style.backgroundColor = "transparent";
    console.log("Bulb Bujh gya");
    flag = 0;
  }
});
