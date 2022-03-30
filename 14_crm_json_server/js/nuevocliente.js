(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)) {
            console.log('Todos los campos son obligatorios');
            return;
        }
        console.log('Sí se pasó la validación');
    }

    function validar(cliente) {
        return !Object.values(cliente).every(input => input !== '');
    }
})();