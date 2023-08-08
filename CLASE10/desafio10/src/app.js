import express from 'express';
import realTimeProductsRoutes from './routes/realtimeproducts.routes.js';
import homeRoutes from './routes/home.routes.js';
import { __dirname } from './utils.js';
import { engine } from 'express-handlebars';

const app = express();

// configuracion de express:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + 'src/public'));

// configuracion de handlebars:
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

// configuracion de rutas:
app.use('/realtimeproducts', realTimeProductsRoutes);
app.use('/', homeRoutes);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});