
const socketClient = io();

const formmulario = document.getElementById('form-agregar-producto');
formmulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Esto previene el comportamiento por defecto del envío del formulario.
    let formData = new FormData(this);
    fetch('/api/products', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Formulario enviado exitosamente!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al enviar el formulario.');
    });
});

const btnPress = document.getElementById('btn-press');
btnPress.addEventListener('click', function() {
    alert('Boton presionado!');
});
