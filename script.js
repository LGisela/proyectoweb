const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const itemsPerView = 3; 
let currentIndex = 0; 

// Botones de navegación
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const itemWidth = carouselItems[0].clientWidth; 
    const offset = -(currentIndex * itemWidth); 
    carouselInner.style.transform = `translateX(${offset}px)`;
}

// Avanzar
btnNext.addEventListener('click', function() {
   
    if (currentIndex < totalItems - itemsPerView) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

// Retroceder
btnPrev.addEventListener('click', function() {
  
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.max(0, totalItems - itemsPerView); 
    }
    updateCarousel();
});


updateCarousel();




