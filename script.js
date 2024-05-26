

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


var moving_images_div = document.querySelectorAll(".pg2d")
var moving_images = document.querySelectorAll(".pg2d img")
var arr = [0,1,2]

moving_images_div[0].addEventListener("mouseover", function(){
    moving_images[0].style.opacity = "1"
})
moving_images_div[0].addEventListener("mousemove", function(det){
    moving_images[0].style.left = det.clientX + "px"
    moving_images[0].style.transform = "translate(-75%,0%)"
})
moving_images_div[0].addEventListener("mouseout", function(){
    moving_images[0].style.opacity = "0"
})


moving_images_div[1].addEventListener("mouseover", function(){
    moving_images[1].style.opacity = "1"
})
moving_images_div[1].addEventListener("mousemove", function(det){
    moving_images[1].style.left = det.clientX + "px"
    moving_images[1].style.transform = "translate(-75%,0%)"
})
moving_images_div[1].addEventListener("mouseout", function(){
    moving_images[1].style.opacity = "0"
})


moving_images_div[2].addEventListener("mouseover", function(){
    moving_images[2].style.opacity = "1"
})
moving_images_div[2].addEventListener("mousemove", function(det){
    moving_images[2].style.left = det.clientX + "px"
    moving_images[2].style.transform = "translate(-75%,0%)"
})
moving_images_div[2].addEventListener("mouseout", function(){
    moving_images[2].style.opacity = "0"
})