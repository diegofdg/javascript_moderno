document.addEventListener('DOMContentLoaded', function() {

  // Seleccionar los elementos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');

  // Asignar eventos
  inputEmail.addEventListener('blur', validar);
  inputAsunto.addEventListener('blur', validar);
  inputMensaje.addEventListener('blur', validar);

  function validar(e) {
    if(e.target.value.trim() === '') {
      mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
      return;
    }

    limpiarAlerta(e.target.parentElement);

  }

  function mostrarAlerta(mensaje, referencia) {
    // Comprueba si ya existe una alerta
    limpiarAlerta(referencia);

    // Generar una alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2');
    
    // Inyectar el error al formulario
    referencia.appendChild(error);
  }
  
  function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.bg-red-600');
    if(alerta) {
      alerta.remove();
    }
  }
});