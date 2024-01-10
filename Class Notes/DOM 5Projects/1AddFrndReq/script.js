var istatus = document.querySelector(".card h1");
var btn = document.querySelector(".btn");
var mark = 0;

btn.addEventListener("click", function () {
  if (mark === 0) {
    istatus.innerHTML = "Friends";
    btn.innerHTML = "Remove Friends";
    istatus.style.color = "green";
      mark = 1
    }
  else {
      istatus.innerHTML = "Stranger";
      btn.innerHTML = "Add Friends";
    istatus.style.color = "red";
      console.log("hi");
      mark = 0
    }
});
