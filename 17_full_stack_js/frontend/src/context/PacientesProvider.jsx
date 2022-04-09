import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const PacientesContext = createContext();

export const PacientesProvider = ({children}) => {
    const [ pacientes, setPacientes ] = useState([]);

    const guardarPaciente = async (paciente) => {
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`                }
            }
            const { data } = await clienteAxios.post('/pacientes', paciente, config);
            console.log(data.pacienteAlmacenado)

            const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
            console.log(pacienteAlmacenado);

            setPacientes([pacienteAlmacenado, ...pacientes]);
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )

}

export default PacientesContext;