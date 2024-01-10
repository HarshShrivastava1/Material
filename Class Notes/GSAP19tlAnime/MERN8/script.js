 // gsap.to("#box",{
//   x:1000,
//   duration:2,
//   delay:1,
//   backgroundColor:"blue",
//   rotate:360
// })


// gsap.from("#box",{
//   x:1000,
//   duration:2,
//   delay:1,
//   backgroundColor:"blue",
//   rotate:360
// })


var tl = gsap.timeline()


tl.from("h3",{
  y:-30,
  opacity:0,
  duration:0.8,
  delay:0.3,
  stagger:0.3
})


tl.from("h1",{
  x:-300,
  opacity:0,
  duration:0.9,
  stagger:0.4
})

tl.from("img",{
  rotate:100,
  duration:1,
  stagger:0.8,
  x:400,
  opacity:0
})

tl.from("")