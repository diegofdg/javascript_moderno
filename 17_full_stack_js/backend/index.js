import express from 'express';
import conectarDB from './config/db.js';

const app = express();

conectarDB();

app.use( (req, res) => {
    res.send('Hola Mundo');
});

app.listen(4000, () => {
    console.log('Servidor funcionando en en el puerto 4000');
});