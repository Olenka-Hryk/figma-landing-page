const slides = [
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-getting-started.png" alt="Figjam getting started img"><h3 class="figjam__carousel-slide-title text-accent">Getting started</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-figma-organization.png" alt="Figjam Figma Organization img"><h3 class="figjam__carousel-slide-title text-accent">Figma Organization</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-community.png" alt="Figjam community img"><h3 class="figjam__carousel-slide-title text-accent">Community</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-administration.png" alt="Figjam administration img"><h3 class="figjam__carousel-slide-title text-accent">Administration</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-video-tutorials.png" alt="Figjam video tutorials img"><h3 class="figjam__carousel-slide-title text-accent">Video Tutorials</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-components.png" alt="Figjam components img"><h3 class="figjam__carousel-slide-title text-accent">Components</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-downloads.png" alt="Figjam downloads img"><h3 class="figjam__carousel-slide-title text-accent">Downloads</h3></div>',
    '<div class="figjam__carousel-fade"><img class="figjam__carousel-slide-img" src="image/figjam/figjam-blog.png" alt="Figjam blog img"><h3 class="figjam__carousel-slide-title text-accent">Blog</h3></div>',
];

let currentSlide = 0;
const slideContainer = document.querySelector('.figjam__carousel-slide');

const leftCarouselBullet = document.querySelector('.carousel-bullet-1');
const centerCarouselBullet = document.querySelector('.carousel-bullet-2');
const rightCarouselBullet = document.querySelector('.carousel-bullet-3');
centerCarouselBullet.style.opacity = "100%";


function setNonActiveCarouselBullet(bulletFirst, bulletSecond) {
    bulletFirst.style.opacity = "40%";
    bulletSecond.style.opacity = "40%";
}

function showCurrentSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.innerWidth > 768) {
        const secondSlideIdx = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 1024) {
            const thirdSlideIdx = secondSlideIdx === slides.length - 1 ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

showCurrentSlide();

function nextSlide() {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    showCurrentSlide();
    rightCarouselBullet.style.opacity = "100%";
    setNonActiveCarouselBullet(centerCarouselBullet, leftCarouselBullet);
}

function prevSlide() {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    showCurrentSlide();
    leftCarouselBullet.style.opacity = "100%";
    setNonActiveCarouselBullet(centerCarouselBullet, rightCarouselBullet);
}

// setInterval(nextSlide, 3000);

const nextBtn = document.querySelector('.figjam__carousel-btn-next');
const prevBtn = document.querySelector('.figjam__carousel-btn-prev');


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', showCurrentSlide);