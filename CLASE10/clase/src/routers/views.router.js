import { Router } from 'express';

const router = Router(); // convencion: se llama router

router.get('/', (req, res) => {
    res.send('GET a /api/orders');
}
);

export default router;