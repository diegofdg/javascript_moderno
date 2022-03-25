const formulario = document.getElementById('agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI {
    insertarPresupuesto( cantidad ) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {        
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        
        if(tipo === 'error') {
             divMensaje.classList.add('alert-danger');
        } else {
             divMensaje.classList.add('alert-success');
        }
        
        divMensaje.textContent = mensaje;
        
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        
        setTimeout( () => {
             divMensaje.remove();
        }, 3000);
    }
}

const ui = new UI();
let presupuesto;

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    console.log(Number(presupuestoUsuario));

    if( presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0 ) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();
     
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number( document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === '') {          
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad )) {
        ui.imprimirAlerta('Cantidad no válida', 'error')
        return;
    }

    const gasto = { nombre, cantidad, id: Date.now() };
    presupuesto.nuevoGasto(gasto);
    
    ui.imprimirAlerta('Gasto agregado Correctamente');
    
    formulario.reset();
}