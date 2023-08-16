import mongoose from 'mongoose';

const URI = 'mongodb+srv://leonardocesarespejo:CoderHouse@cluster0.dtluphu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));
