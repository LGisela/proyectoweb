document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById("main__carousel-img");
  const nextBtn = document.getElementById("btn-next");
  const previousBtn = document.getElementById("btn-previous");

  if (!img || !nextBtn || !previousBtn) {
      return; 
  }

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

        const phonePattern = /^\d{4} \d{6}$/; 
        if (!phone || !phonePattern.test(phone)) {
            showError('phoneError', 'El teléfono debe tener el formato 2664 123456.');
            valid = false;
        }

        if (!message || message.length < 10) {
            showError('messageError', 'El mensaje debe tener al menos 10 caracteres.');
            valid = false;
        }

        if (valid) {
            displayResult(name, email, phone, message);
            this.reset();
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