var hand = document.getElementById("hand");
var ul =document.querySelector("nav ul");

hand.addEventListener("click",()=>{
    ul.classList.toggle("active")
})
var ld =document.getElementById('load');
document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(function(){
        ld.classList.add('active');
    },2700)
})