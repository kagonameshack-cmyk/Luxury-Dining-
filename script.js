const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach(reveal => {

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < triggerBottom){

            reveal.classList.add("active");

        }

    });

}

revealSections();
