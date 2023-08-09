
import { Router } from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = Router();

const productManager = new ProductManager('./src/JSONs/productos.json');

router.get('/', async (req, res) => {
    try {
        const productos = await productManager.getProducts();
        
        const limit = req.query.limit;
        if(!limit || limit < 1){
            return res.json(productos);
        }
        res.status(200).json(productos.slice(0, limit));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:pid', async (req, res) => {
    try {
        let pid = +req.params.pid;
        const producto = await productManager.getProductById(pid);
        if(!producto){
            return res.json({error: 'producto no encontrado'});
        }
        res.status(200).json(producto);
    } catch (err) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const producto = req.body;
        const respuesta = await productManager.addProduct(producto);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:pid', async (req, res) => {
    try {
        const pid = +req.params.pid;
        const producto = req.body;
        const respuesta = await productManager.updateProductById(pid, producto);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:pid', async (req, res) => {
    try {
        const pid = +req.params.pid;
        const respuesta = await productManager.deleteProductById(pid);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
