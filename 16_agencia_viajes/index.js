import express from 'express';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    next();
});

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});