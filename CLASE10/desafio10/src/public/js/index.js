
// const socketClient = io();

socketClient.on('productoEliminado', (id) => {
    const productRow = document.getElementById('fila-' + id);
    console.log('cliente: eliminando producto:', id);
    if (productRow) {
        productRow.remove();
        
    }
});

function agregarProducto(producto) {
    const productRowRTC = document.createElement('tr');
    productRowRTC.id = 'fila-' + producto.id;
    productRowRTC.innerHTML = `
        <td>${producto.stock}</td>
        <td><img src="${producto.thumbnail}" alt="Imagen del producto" width="50px"></td>
        <td>${producto.title}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
    `;
    if (document.getElementById('tabla-RTP')){
        document.getElementById('tabla-RTP').appendChild(productRowRTC);
    }

    const productRow = document.createElement('tr');
    productRow.id = 'fila-' + producto.id;
    productRow.innerHTML = `
        <td>${producto.stock}</td>
        <td><img src="${producto.thumbnail}" alt="Imagen del producto" width="50px"></td>
        <td>${producto.title}</td>
        <td>${producto.description}</td>
        <td>${producto.price}</td>
        <td>
            <button onclick="eliminarProducto('${this.id}')"  class="btn btn-danger">Eliminar</button>                     
        </td>
    `;
    if (document.getElementById('tabla-productos')){
        document.getElementById('tabla-productos').appendChild(productRow);
    }
}

socketClient.on('productoAgregado', (producto) => {
    console.log('productoAgregado cli');
    agregarProducto(producto);
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

    // socketClient.emit('productoAgregado', object);  

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {

        socketClient.emit('productoAgregado', object);
        this.reset();
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

                socketClient.emit('productoEliminado', id);
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Ocurrió un error al eliminar el producto.');
    });
}

