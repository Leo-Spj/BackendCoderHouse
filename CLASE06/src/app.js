


import express from 'express';
import ProductManager from './ProductManager.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log('Servidor HTTP escuchando en el puerto 8080');
});

app.get('/', (req, res) => {
    res.send('Servidor express en puerto 8080');
});

const pm = new ProductManager('productos.json');

app.get('/products', async (req, res) => {
    try {
        const productos = await pm.getProducts();
        const limit = req.query.limit;
        if(limit){
            res.json(productos.slice(0,limit));
        } else{
            res.json(productos);
        }
    } catch (err) {
        console.log(err);
    }    
}
);


