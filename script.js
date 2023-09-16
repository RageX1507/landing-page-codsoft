var tl=gsap.timeline()
tl.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2,
})
tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.3,
})
tl.from("#main #img1",{
    x:-100,
    opacity:0,
    duration:1,
}
)
tl.from(" #main #img2",{
    x:100,
    opacity:0,
    duration:1,
})
tl.from("#page2 #sun",{
    scale:0,
    rotate:360,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #sun",
        scroller:"body",
        
        start:"top 100%",
        end:"top 50%",
        scrub:3,
    }
})