
const socketClient = io();

socketClient.on('biemvenida', (message) => {
    console.log(message);
    socketClient.emit('respuesta', `${socketClient.id} dice: Gracias!`);    
});

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

function eliminarProducto(id) {
    fetch(`/api/products/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {           
            const productRow = document.getElementById('fila-' + id);
            if (productRow) {
                productRow.remove();
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al eliminar el producto.');
    });
}

