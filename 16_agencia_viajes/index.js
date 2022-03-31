import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Inicio');
});

app.get('/nosotros', (req, res) => {
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {
    res.send('Contacto');
});

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});