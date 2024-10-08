
const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
const totalImages = images.length;
let currentIndex = 0;


function updateCarousel() {
    const offset = -currentIndex * (100 / 3); 
    carouselInner.style.transform = `translateX(${offset}%)`;
}


document.getElementById('next').addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, totalImages - 3); 
    updateCarousel();
});


document.getElementById('prev').addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0); 
    updateCarousel();
});

let startX;
let endX;

carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carouselContainer.addEventListener('touchend', () => {
    if (startX - endX > 50) {
        document.getElementById('next').click(); // Desplazar a la derecha
    } else if (endX - startX > 50) {
        document.getElementById('prev').click(); // Desplazar a la izquierda
    }
});
