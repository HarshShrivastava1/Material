var tl = gsap.timeline()

tl.from("h3,#logo,.btn1,.btn2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger:0.3
})

tl.from("h1", {
    x: -400,
    opacity: 0,
    duration: 2,
    stagger:1,
})

tl.from(".img", {
    scale: 0,
    opacity: 0,
    duration: 2,
    stagger:0.2
})

tl.to("i", {
    repeat: -1,
    y: 40,
    duration: 0.5,
    yoyo:5,
})