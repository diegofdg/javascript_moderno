import { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/axios';

const PacientesContext = createContext();

export const PacientesProvider = ({children}) => {
    const [ pacientes, setPacientes ] = useState([]);
    const [ paciente, setPaciente ] = useState({});

    useEffect(()=> {
        const obtenerPacientes = async () => {
            try {
                const token = localStorage.getItem('token');
                if(!token) {
                    return;
                }
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios.get('/pacientes', config);
                setPacientes(data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerPacientes();

    }, []);

    const guardarPaciente = async (paciente) => {
        if(paciente.id) {
            console.log('editando...');
        } else {
            console.log('nuevo registro');
        }

        return;
        
        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post('/pacientes', paciente, config);
            console.log(data.pacienteAlmacenado)

            const { createdAt, updatedAt, __v, ...pacienteAlmacenado } = data;
            console.log(pacienteAlmacenado);

            setPacientes([pacienteAlmacenado, ...pacientes]);
        } catch (error) {
            console.log(error);            
        }
    }

    const setEdicion = (paciente) => {
        setPaciente(paciente);
    }

    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente,
                setEdicion,
                paciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )

}

export default PacientesContext;