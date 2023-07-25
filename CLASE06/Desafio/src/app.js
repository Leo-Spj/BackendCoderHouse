


import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Servidor express en puerto 8080');
});

const pm = new ProductManager('src/productos.json');

app.get('/products', async (req, res) => {
    try {
        const productos = await pm.getProducts();

        const limit = req.query.limit;
        if(!limit || limit < 1){
            return res.json(productos);
        }
        res.json(productos.slice(0, limit));
        
    } catch (err) {
        console.log(err);
    }    
}
);

app.get('/products/:pid', async (req, res) => {
    try {
        let pid = +req.params.pid;
        const producto = await pm.getProductById(pid);

        if(!producto){
            return res.json({error: 'producto no encontrado'});
        }
        res.json(producto);

    } catch (err) {
        console.log(err);
    }
});

app.listen(8080, () => {
    console.log('Servidor HTTP escuchando en el puerto 8080');
});


