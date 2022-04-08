import { Outlet } from "react-router-dom";

const RutaProtegida = () => {
    return (
        <>
            <h1>RutaProtegida</h1>
            <Outlet></Outlet>
        </>
    );
}

export default RutaProtegida;