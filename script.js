const navbtn = document.querySelector("#navbtn");
const textspan= document.querySelector("span")

navbtn.addEventListener("mouseenter",() =>{
    textspan.style.transform = 'translateX(10px) translateY(-5px) rotate(5deg)';
    textspan.style.transform = scale(1.1); 
    
});

navbtn.addEventListener("mouseleave",() =>{
    textspan.style.transform = 'translateX(0) translateY(0) rotate(0)';
    textspan.style.transform = scale(0); 
});

gsap.from("main",{
     transform:"scaleX(0.8) scaleY(0) "
});

let heading = document.querySelector(".heading");
heading.addEventListener("mousehover", () => {
    heading.h1.style.color = "yellow";
})

