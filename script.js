var cursor = document.querySelector("#cursor");
var cBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cBlur.style.left = dets.x - 200 + "px";
    cBlur.style.top = dets.y - 200 + "px";
})

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=2
        cursor.style.border="1px solid white"
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border="0px solid white"
        cursor.style.backgroundColor="#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "black",
    height: "110",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11",
        scrub: 2
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 4
    }
});

gsap.from("#about-us,#about-us-in",{
    y:35,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 57%",
        scrub:3
    }
})
gsap.from(".card",{
    y:35,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub:3
    }
})
gsap.from("#pic,#content",{
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: "#pic",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub:3
    }
})
gsap.from("#left",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger: {
        trigger: "#left",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
})
gsap.to("#right",{
    y:-50,
    x:-50,
    duration:1,
    scrollTrigger: {
        trigger: "#right",
        scroller: "body",
        start: "top 90%",
        end: "top 100%",
        scrub:4
    }
})