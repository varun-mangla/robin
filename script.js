var tl=gsap.timeline()

tl.from("h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

tl.from("h1",{
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})

tl.from("h2",{
    x:500,
    rotate:180,
    opacity:0,
    duration:0.8,
    stagger:0.4,
})



tl.from("#img2",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1.2,
})
tl.from("#img3",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1.2,
})
tl.from("#img4",{
    x:100,
    rotate:45,
    opacity:0,
    duration:1.2,
})