gsap.to(".pg1 img", {
  width: "100%",
  scrollTrigger: {
    trigger: ".pg1 ",
    scroller: "body",
    start:"top 0",
    end: "top -240%",
    scrub: 1,
    pin:true
     
 }
})

gsap.to(".pg2 h1", {
    transform: "translateX(-500%)",
    scrollTrigger: {
      trigger:".pg2",
      scroller: "body",
      // markers: true,
      start: "top 0",
      end:"top -350%",
      scrub:1,
      pin:true
    }
  
})
  
gsap.to(".pg3 .container", {
  rotate:"720 deg",
  scrollTrigger: {
    trigger: ".pg3",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: " top -770%",
    scrub: 3,
    pin: true
  }
})