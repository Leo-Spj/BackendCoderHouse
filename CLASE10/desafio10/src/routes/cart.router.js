
import { Router } from "express";
import CartsManager from '../managers/CartsManager.js';

const router = Router();

const cartsManager = new CartsManager('./src/JSONs/carrito.json', './src/JSONs/productos.json');

router.get('/', async (req, res) => {
    try {
        const carritos = await cartsManager.getCarts();
        res.status(200).json(carritos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const carrito = await cartsManager.getOneCart(id);
        res.status(200).json(carrito);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const respuesta = await cartsManager.createCart();
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/:cid/product/:pid', async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const respuesta = await cartsManager.addProductToCart(cid, pid);
        res.status(200).json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;