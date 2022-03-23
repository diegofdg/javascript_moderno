const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length > 0) {
        console.log('Sí hay algo');

    } else {        
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios.');
    }

    if(e.target.type === 'email') {
        const resultado = e.target.value.indexOf('@');
        if(resultado < 0) {
            mostrarError('El email no es válido.');
        }
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}