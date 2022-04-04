import express from 'express';
import { agregarPaciente, obtenerPaciente } from '../controllers/pacienteController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(obtenerPaciente)
    .post(checkAuth, agregarPaciente);

export default router;