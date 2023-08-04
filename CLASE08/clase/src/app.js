
import express from 'express';
import usersRouter from './routers/users.router.js';
import productsRouter from './routers/products.router.js';
import ordersRouter from './routers/orders.router.js';
import {__dirname} from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('src/public')); // para servir archivos estáticos

const PORT = 8080;

// .use() es un método de express que permite agregar middlewares. primero es ruta, luego el middleware
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
}
);