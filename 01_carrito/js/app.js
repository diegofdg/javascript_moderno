const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log(e.target);
    }    
}