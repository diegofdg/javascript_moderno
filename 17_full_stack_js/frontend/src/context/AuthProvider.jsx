import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] = useState({});

    useEffect(() => {
        const autenticarUsuario = async () => {
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

            try {
                const url = `/veterinarios/perfil`;
                const { data } = await clienteAxios(url, config);
                setAuth(data);
                
            } catch (error) {
                setAuth({});
                setAlerta({
                    msg: error.response.data.msg,
                    error: true 
                });                
            }

        }
        autenticarUsuario();

    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider }

export default AuthContext;