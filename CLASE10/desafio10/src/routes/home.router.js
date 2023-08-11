import { Router } from "express";
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
    const products = JSON.parse(fs.readFileSync('./src/JSONs/productos.json', 'utf-8'));
    res.render('home', {products}  );
});

export default router;