
document.addEventListener("DOMContentLoaded", function() {
    
    const img = document.getElementById("main__carousel-img");
    const nextBtn = document.getElementById("btn-next");
    const previousBtn = document.getElementById("btn-previous");

    if (img && nextBtn && previousBtn) {
        const imagenes = [
            'imagenes/carrucel (3).jpeg',
            'imagenes/desayuno (2).jpeg',
            'imagenes/1carrucel3.jpeg',
            'imagenes/carrucel (5).jpeg',
            'imagenes/carrucel (4).jpeg',
            'imagenes/corazondechoco (2).jpeg'
        ];

        let i = 0;
        img.src = imagenes[i];

        function next() {
            i++;
            if (i >= imagenes.length) {
                i = 0;
            }
            img.src = imagenes[i];
        }

        function previous() {
            i--;
            if (i < 0) {
                i = imagenes.length - 1;
            }
            img.src = imagenes[i];
        }

        nextBtn.addEventListener("click", next);
        previousBtn.addEventListener("click", previous);

        setInterval(next, 6000);
    }

    








    const form = document.getElementById('contactForm');
    if (form) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        
        console.log("DOM cargado, ejecutando script del formulario");

        
        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        phoneInput.addEventListener('input', validatePhone);
        messageInput.addEventListener('input', validateMessage);

      
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 

            
            if (validateForm()) {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const phone = phoneInput.value.trim();
                const message = messageInput.value.trim();

                displayResult(name, email, phone, message);
                form.reset(); 
            } else {
                console.log('Formulario con errores, no se envió');
            }
        });

        
        function validateForm() {
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPhoneValid = validatePhone();
            const isMessageValid = validateMessage();
            
            return isNameValid && isEmailValid && isPhoneValid && isMessageValid;
        }

        
        function validateName() {
            const name = nameInput.value.trim();
            if (!name || name.length < 3) {
                showError('nameError', 'El nombre debe tener al menos 3 caracteres.');
                return false;
            } else {
                hideError('nameError');
                return true;
            }
        }

        
        function validateEmail() {
            const email = emailInput.value.trim();
            const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
            if (!email || !emailPattern.test(email)) {
                showError('emailError', 'El correo electrónico no es válido.');
                return false;
            } else {
                hideError('emailError');
                return true;
            }
        }

        
        function validatePhone() {
            const phone = phoneInput.value.trim();
            const phonePattern = /^\d{4}-\d{6}$/;
            if (!phone || !phonePattern.test(phone)) {
                showError('phoneError', 'El teléfono debe tener el formato 2664-672345.');
                return false;
            } else {
                hideError('phoneError');
                return true;
            }
        }

        
        function validateMessage() {
            const message = messageInput.value.trim();
            if (!message || message.length < 10) {
                showError('messageError', 'El mensaje debe tener al menos 10 caracteres.');
                return false;
            } else {
                hideError('messageError');
                return true;
            }
        }

        
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = message;
        }

        
        function hideError(elementId) {
            const errorElement = document.getElementById(elementId);
            errorElement.textContent = '';
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
    } else {
        console.log("Formulario no encontrado en esta página.");
    }
});





