/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper(".home_swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: "auto"
        },
        1152: {
            centeredSlides: "auto",
            spaceBetween: -64
        }
    }
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const bgHeader = document.getElementById("header");

    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
