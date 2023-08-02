import express from 'express';
import{__dirname} from './utils.js';
import {Server} from 'socket.io';

import viewsRouter from './routers/views.router.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'public'));

app.use('/api/views', viewsRouter);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


const PORT = 8080;

const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${PORT}`);
});

const socketServer = new Server(httpServer);

socketServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!, socket id: ' + socket.id);

    socket.on('disconect', () => {
        console.log('Cliente desconectado!, socket id: ' + socket.id);
    });
});