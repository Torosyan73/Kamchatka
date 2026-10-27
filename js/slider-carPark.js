const swiperCars = new Swiper(".mySwiperCars", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        500: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});