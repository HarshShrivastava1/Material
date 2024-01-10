// gsap.to("#page2 img",{
//     transform: 'translate(-50%,-50%) scale(1)',
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0",
//         end:"top -70%",
//         scrub:1,
//         pin:true
//     }
// })

gsap.to(".pg1 h1", {
  transform: "translateX(-80%)",
  scrollTrigger: {
    trigger:".pg1",
    scroller: "body",
    markers: true,
    start: "top 0",
    end:"top -250%",
    scrub:1,
    pin:true
  }

})



gsap.to(".pg2 img", {
  width:"70%",
    scrollTrigger: {
      trigger: ".pg2",
    //pin wale animation me jis element me animation lagana h uske parent me scroll trigger lagay .
        scroller: "body",
        // markers:true,
        start:"top 0",
        end: "top -270",
        scrub: 1,
        pin:true
    }
})