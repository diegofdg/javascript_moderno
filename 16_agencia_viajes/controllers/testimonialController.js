const guardarTestimonial = (req, res) => {    
    let { nombre, correo, mensaje } = req.body;        

    let errores = [];

    if(nombre.trim() === '') {
        errores.push({'mensaje': 'Agrega tu Nombre'})
    }

    if(correo.trim() === '') {
        errores.push({'mensaje': 'Agrega tu Correo'})
    }

    if(mensaje.trim() === '') {
        errores.push({'mensaje': 'Agrega tu Mensaje'})
    }

    console.log(errores);
}

export {
    guardarTestimonial
}