'use-strict';

//menu btn functionality

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".link-list");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".link-item").forEach(item =>{
    item.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
})

console.log(hamburger)


//auto type
// const type = new Typed(".tech-stack",{
// 	strings:["javascript","java","git and github"],
// 	typeSpeed:100,
// 	backspeed:200,
// 	loop:true
// })

