const carousel = document.querySelector('.brands__content-animated-carousel');
const carouselSlides = carousel.querySelector('.brands__animated-carousel-slides');
const brandSlides = carouselSlides.querySelectorAll('.brands__animated-carousel-slide');
const prevButton = carousel.querySelector('.brands__animated-carousel-btn-prev');
const nextButton = carousel.querySelector('.brands__animated-carousel-btn-next');

let currentIndex = 0;

function updateCarousel() {
    carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + brandSlides.length) % brandSlides.length;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % brandSlides.length;
    updateCarousel();
});