
const socketClient = io();

const formmulario = document.getElementById('form-agregar-producto');
formmulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);
    let object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    let json = JSON.stringify(object);

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
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