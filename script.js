

document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const imagenes = [
        'imagenes/carrucel (3).jpeg',
        'imagenes/desayuno (2).jpeg',
        'imagenes/1carrucel3.jpeg',
        'imagenes/carrucel (5).jpeg',
        'imagenes/carrucel (4).jpeg',
        'imagenes/1carrucel2.jpeg'
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const nextBtn = document.getElementById("next");
    const previousBtn = document.getElementById("prev");

    
    imagenes.forEach((src) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.alt = 'Imagen';
        imgElement.classList.add('carousel-image');
        carouselInner.appendChild(imgElement);
    });

    let currentIndex = 0;
    const imagesPerView = 3; 
    const totalImages = imagenes.length;

    function mostrarImagenes() {
        
        const offset = -(currentIndex * (100 / imagesPerView));
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        
        if (currentIndex >= Math.ceil(totalImages / imagesPerView)) {
            currentIndex = 0; 
        }
        mostrarImagenes();
    });

    previousBtn.addEventListener("click", () => {
        currentIndex--;
        
        if (currentIndex < 0) {
            currentIndex = Math.ceil(totalImages / imagesPerView) - 1; 
        }
        mostrarImagenes();
    });

    mostrarImagenes();
});










// Validación del formulario
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        clearErrors(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let valid = true;
        
        // Validaciones
        if (!name || name.length < 3) {
            showError('nameError', 'El nombre debe tener al menos 3 caracteres.');
            valid = false;
        }

        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!email || !emailPattern.test(email)) {
            showError('emailError', 'El correo electrónico no es válido.');
            valid = false;
        }

        const phonePattern = /^\d{4}-\d{6}$/; 
        if (!phone || !phonePattern.test(phone)) {
            showError('phoneError', 'El teléfono debe tener el formato 2664-672345.');
            valid = false;
        }

        if (!message || message.length < 10) {
            showError('messageError', 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        }

        if (valid) {
            displayResult(name, email, phone, message);
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;  
    }

    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('phoneError').textContent = '';
        document.getElementById('messageError').textContent = '';
    }

    function displayResult(name, email, phone, message) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''; 

        const resultContent = document.createElement('div');
        resultContent.innerHTML = `
            <h3>Datos enviados:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
        `;

        resultDiv.appendChild(resultContent);
    }
}