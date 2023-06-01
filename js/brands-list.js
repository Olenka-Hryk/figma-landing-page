const response = await fetch("api/brands.json");
const brands = await response.json();

renderBrands(brands);
import('./brands-animated-carousel.js');

// fetch("api/brands.json")
//     .then((response) => response.json())
//     .then((brands) => renderBrands(brands));

function renderBrands(brands) {
    let html = '';
    for (const brand of brands) {
        html +=
            `<article class="brands__animated-carousel-slide">
               <img class="brands__animated-carousel-slide-img" src="${brand.image}" alt="${brand.name}">
            </article>`;
    }

    const brand = document.querySelector('.brands__animated-carousel-slides');
    brand.innerHTML = html;
}