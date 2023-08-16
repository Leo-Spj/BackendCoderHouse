
import { Router } from 'express';
import ProductsManager from '../ProductManager.js';

const router = Router();

router.get('/', (req, res) => {
    res.json(ProductsManager.getProducts());
});

router.post('/', (req, res) => {
    const { name, price } = req.body;
    const product = ProductsManager.createProduct(name, price);
    res.json(product);
});

export default router;
