import Citas from './classes/Citas.js';
import UI from './classes/UI.js';
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from './selectores.js';

const administrarCitas = new Citas();
const ui = new UI(administrarCitas);

let editando = false;
let DB;

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;    
}

export function nuevaCita(e) {
    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios',  'error');
        return;
    }

    if(editando) {
        ui.imprimirAlerta('Editado Correctamente');
        administrarCitas.editarCita( {...citaObj} );
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        editando = false;
    } else {        
        citaObj.id = Date.now();        
        administrarCitas.agregarCita({...citaObj});
        
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        
        objectStore.add(citaObj);
        transaction.oncomplete = function() {
            console.log('Cita agregada');
            ui.imprimirAlerta('Se agregó correctamente');
        }
    }

    reiniciarObjeto();

    formulario.reset();

    ui.imprimirCitas(administrarCitas);
}

export function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

export function eliminarCita(id) {
    administrarCitas.eliminarCita(id);
    
    ui.imprimirAlerta('La cita se eliminó correctamente');

    ui.imprimirCitas(administrarCitas);
}

export function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
    
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;
    
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;
}

export function crearDB() {    
    const crearDB = window.indexedDB.open('citas', 1);

    crearDB.onerror = function() {
        console.log('Hubo un error');
    }

    crearDB.onsuccess = function() {        
        DB = crearDB.result;            
    }

    crearDB.onupgradeneeded = function(e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('mascota', 'mascota', { unique: false });
        objectStore.createIndex('propietario', 'propietario', { unique: false });
        objectStore.createIndex('telefono', 'telefono', { unique: false });
        objectStore.createIndex('fecha', 'fecha', { unique: false });
        objectStore.createIndex('hora', 'hora', { unique: false });
        objectStore.createIndex('sintomas', 'sintomas', { unique: false });
        objectStore.createIndex('id', 'id', { unique: true });

        console.log('DB creada y lista');
    }
}