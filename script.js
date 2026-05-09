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


const mobileLinks =
document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        menuToggle.classList.remove("active");

    });

});


const reservationModal =
document.getElementById("reservationModal");

const openReservationBtns =
document.querySelectorAll(".openReservation");

const closeModal =
document.getElementById("closeModal");

openReservationBtns.forEach(button => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        reservationModal.classList.add("active");

    });

});

closeModal.addEventListener("click", () => {

    reservationModal.classList.remove("active");

});

reservationModal.addEventListener("click", (e) => {

    if(e.target === reservationModal){

        reservationModal.classList.remove("active");

    }

});
