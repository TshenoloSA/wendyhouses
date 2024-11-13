// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 3, // Display 3 images at a time
    spaceBetween: 10, // Add space between slides (optional)
});




