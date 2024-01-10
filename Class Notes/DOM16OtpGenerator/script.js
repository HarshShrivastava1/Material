// var a = Math.random()*10
// console.log(a)

// var b = Math.floor(20.555555)
// console.log(b)


// var a = Math.floor(Math.random()*10)

// console.log(a)



// var btn = document.querySelector("button")
// var h1 = document.querySelector("h1")
// btn.addEventListener("click",function(){
//   var a = Math.floor(Math.random()*10)
//   var b = Math.floor(Math.random()*10)
//   var c = Math.floor(Math.random()*10)
//   var d = Math.floor(Math.random()*10)
//   h1.innerHTML = `${a}${b}${c}${d}`
// })


var btn = document.querySelector("button")
var box = document.querySelector("#box")

btn.addEventListener("click",function(){
  var color1 = Math.floor(Math.random()*255)
  var color2 = Math.floor(Math.random()*255)
  var color3 = Math.floor(Math.random()*255)

  box.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
  
})