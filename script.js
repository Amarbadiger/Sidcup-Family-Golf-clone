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
        end: "top -70",
        scrub: 4
    }
});