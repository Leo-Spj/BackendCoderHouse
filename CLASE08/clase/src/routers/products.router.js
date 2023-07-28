import { Router } from "express";

const router = Router();

const products = []; //persistencia en memoria

router.get('/', (req, res) => {
    res.json({message: 'products', products});

}
);

router.post('/', (req, res) => {
    const product = req.body;

    let id = 0
    if(products.length === 0) {
        id = 1;
    } else {
        id = products[products.length - 1].id + 1;
    }

    const newProduct = {...product, id};

    products.push(newProduct);
    res.json({message: 'product added', newProduct});
}
);

export default router;