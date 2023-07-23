
import express from 'express';
//importando la clase del archivo ProductManager.js 
import ProductManager from './ProductManager.js';

const app = express();

app.listen(8080, () => {
    console.log('Servidor HTTP escuchando en el puerto 8080');
});

app.get('/', (req, res) => {
    res.send('Servidor express en puerto 8080');
});


// practicando con req.query y req.params

// con req.query
app.get('/productos', (req, res) => {
    if (req.query.nombre) {
        res.send(`Producto con nombre: ${req.query.nombre}`);
    } else {
        res.send('No se especificó un producto');
    }
}
);
// se puede acceder a la ruta con http://localhost:8080/productos?nombre=mesa


// con req.params
app.get('/productos/:id', (req, res) => {
    res.send(`Producto id: ${req.params.id}`);
}
);
// se puede acceder a la ruta con http://localhost:8080/productos/1

// creamos un array de productos con nombre, precio y stock
const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45, stock: 3 },
    { id: 2, nombre: 'Calculadora', precio: 234.56, stock: 2 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67, stock: 15 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78, stock: 5 },
    { id: 5, nombre: 'Reloj', precio: 67.89, stock: 8 },
    { id: 6, nombre: 'Agenda', precio: 78.90, stock: 10 }
];

// se puede acceder a la ruta con http://localhost:8080/api/productos

// creamos un endpoint para listar un producto por id usando req.params
app.get('/api/productos/:id', (req, res) => {
    const producto = productos.find((p) => p.id == req.params.id);
    if (!producto) {
        res.status(404).send('Producto no encontrado');
    } else {
        res.send(producto);
    }
});
// se puede acceder a la ruta con http://localhost:8080/api/productos/1

// creamos un endpoint para listar un producto por nombre usando req.query
app.get('/api/productos', (req, res) => {
    const nomProducto = req.query.nombre;
    if (!nomProducto || nomProducto == '') {
        return res.send(productos);
    }

    const productosEncontrados = productos.filter((p) => p.nombre.toLowerCase() == nomProducto.toLowerCase());

    if(productosEncontrados.length == 0){
        res.send(productos);   
    } else {
        res.send(productosEncontrados);
    }

});
// se puede acceder a la ruta con http://localhost:8080/api/productos?nombre=escuadra