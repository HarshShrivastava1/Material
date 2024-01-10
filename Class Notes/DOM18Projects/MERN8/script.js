// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mousemove",function(dets){
//     elem1.childNodes[3].style.left = dets.x+"px"
// })

// elem1.addEventListener("mouseenter",function(){
//     elem1.childNodes[3].style.opacity = 1
// })
// elem1.addEventListener("mouseleave",function(){
//     elem1.childNodes[3].style.opacity = 0
// })

var elemAll = document.querySelectorAll(".elem");
elemAll.forEach(function (elem) {
  elem.addEventListener("mousemove", function (dets) {
    elem.childNodes[3].style.left = dets.x + "px";
  });

  elem.addEventListener("mouseenter", function () {
    elem.childNodes[3].style.opacity = 1;
  });
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].style.opacity = 0;
  });
});
