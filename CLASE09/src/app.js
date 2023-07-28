
import express from 'express';
import { __dirname } from './utils.js';
import {engine} from 'express-handlebars';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views`);


app.get('/', (req, res) => {
    res.send('HANDLEBARS');
});

app.get('/view1', (req, res) => {
    res.render('view1', {nombre: 'Leo'});
});

app.get('/view2', (req, res) => {
    res.render('view2', {nombre: 'Leo'});
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});