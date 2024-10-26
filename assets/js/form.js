document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var status = document.createElement('div');
      status.classList.add('contact-form__status');
      this.appendChild(status);
  
      fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "¡Gracias por tu mensaje! Te contactaremos pronto.";
          form.reset();
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
            } else {
              status.innerHTML = "Oops! Hubo un problema al enviar tu formulario";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Hubo un problema al enviar tu formulario";
      });
    });
  });