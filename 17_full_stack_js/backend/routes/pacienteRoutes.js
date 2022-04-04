import express from 'express';
import { agregarPaciente, obtenerPaciente } from '../controllers/pacienteController.js';

const router = express.Router();

router.route('/')
    .get(obtenerPaciente)
    .post(agregarPaciente);

export default router;