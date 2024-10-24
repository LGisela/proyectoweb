//Formulario, validaciones
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes de error previos
    clearErrors();

    // Validar los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let valid = true;
    
    // Validación del nombre (requerido y mínimo 3 caracteres)
    if (!name) {
        showError('nameError', 'El nombre es obligatorio.');
        valid = false;
    } else if (name.length < 3) {
        showError('nameError', 'El nombre debe tener al menos 3 caracteres.');
        valid = false;
    }

    // Validación del correo (expresión regular)
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email) {
        showError('emailError', 'El correo electrónico es obligatorio.');
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'El correo electrónico no es válido.');
        valid = false;
    }

    // Validación del teléfono (formato 123-456-7890)
    const phonePattern = /^\d{6,10}$/
    if (!phone) {
        showError('phoneError', 'El teléfono es obligatorio.');
        valid = false;
    } else if (!phonePattern.test(phone)) {
        showError('phoneError', 'El teléfono debe tener el formato 123-456-7890.');
        valid = false;
    }

    // Validación del mensaje (requerido y mínimo 10 caracteres)
    if (!message) {
        showError('messageError', 'El mensaje es obligatorio.');
        valid = false;
    } else if (message.length < 10) {
        showError('messageError', 'El mensaje debe tener al menos 10 caracteres.');
        valid = false;
    }

    // Si todo es válido, mostrar los datos en la página
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
    resultDiv.innerHTML = ''; // Limpiar resultados previos

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






