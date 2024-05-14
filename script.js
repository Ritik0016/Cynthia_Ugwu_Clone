

var a = document.querySelector("#mincirc");


window.addEventListener("mousemove",function hello(hi){
    a.style.transform = `translate(${hi.clientX}px, ${hi.clientY}px)`;
})

gsap.from("#product_a",{
    y:110,
    duration:.7,
    delay:.2
}) 

gsap.from("#product_b",{
    y:110,
    duration:.7,
    delay:.9
}) 

gsap.from("#product_c",{
    y:-25,
    duration:.2,
    delay:1.6
}) 

gsap.from("#product_d",{
    y:-20,
    duration:.2,
    delay:1.8
}) 

gsap.from("#product_e",{
    y:-20,
    duration:.2,
    delay:2
}) 

gsap.from("#chotiheadings2_left",{
    y:-25,
    duration:.2,
    delay:2.2,
    opacity:0
})

gsap.from("#chotiheadings2_right",{
    y:-25,
    duration:.2,
    delay:2.2,
    opacity:0
})

gsap.from(".pg2d",{
    y:130,
    x:-100,
    duration:.5,
    delay:2.4,
    opacity:0
})
