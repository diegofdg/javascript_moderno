import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';

const app = express();

dotenv.config({path: 'variables.env'});

conectarDB();

app.use("/api/veterinarios", veterinarioRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor funcionando en en el puerto ${PORT}`);
});