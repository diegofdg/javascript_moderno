const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
    llenarSelect();
});

function mostrarAutos() {    
    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;

        const autoHtml = document.createElement('p');

        autoHtml.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: $ ${precio} - Color: ${color}
        `;

        resultado.appendChild(autoHtml);        
    });
}

function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}