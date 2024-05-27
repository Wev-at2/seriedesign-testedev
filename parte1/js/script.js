$(document).ready(function () {
    $(".product-list").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var btnMobile = document.getElementById("headerTabs");
    var headerMenu = document.querySelector(".header__mobile .header__menu");
    var menuClose = document.querySelector(".header__mobile .menu__close");

    function toggleMenu(event) {
        if (event.type === "touchstart") event.preventDefault();
        headerMenu.classList.toggle("active");
        body.classList.toggle("overflow-hidden");
    }

    function closeMenu() {
        headerMenu.classList.remove("active");
        body.classList.remove("overflow-hidden");
    }

    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu);
    menuClose.addEventListener("click", closeMenu);
    menuClose.addEventListener("touchstart", closeMenu);
});
