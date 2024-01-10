var box = document.querySelector(".box")
var love = document.querySelector("i")

box.addEventListener("dblclick", function () {
    love.style.transform = "scale(1)";
    love.style.opacity = 1;

    setTimeout(function () {
        love.style.color = "red"
    },500)
    setTimeout(function () {
        love.style.opacity = 0;
    },2000)
    setTimeout(function () {
        love.style.transform = "scale(0)";
        love.style.color = "white"
        
    },2100)
})