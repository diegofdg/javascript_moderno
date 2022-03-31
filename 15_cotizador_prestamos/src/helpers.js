export function calcularTotal(cantidad, plazo) {
    let totalCantidad;
    let totalPlazo = 0;

    if(cantidad <= 1000) {
        totalCantidad = cantidad * 0.25;
    } else if(cantidad > 1000 && cantidad <= 5000) {
        totalCantidad = cantidad * 0.20;
    } else if(cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * 0.15;
    } else if (cantidad > 10000){
        totalCantidad = cantidad * 0.10;
    }
    
    switch(plazo) {
        case 3:
            totalPlazo = cantidad * 0.05;
            break;
        case 6:
            totalPlazo = cantidad * 0.10;
            break;
        case 12:
            totalPlazo = cantidad * 0.15;
            break;
        case 24:
            totalPlazo = cantidad * 0.20;
            break;
        default:
            break;
    }
    
    return totalPlazo + totalCantidad + cantidad;
}