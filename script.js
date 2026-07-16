// Mobile menu

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});





// Smooth appearance animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});





// Booking button message

const form = document.querySelector("form");


form.addEventListener("submit", (e)=>{

    e.preventDefault();

    alert("Thank you for booking with Elite Cuts! We will contact you shortly.");

});