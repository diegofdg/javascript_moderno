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

    if(errores.length > 0 ){                
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales'
        });
    } else {
        
    }
}

export {
    guardarTestimonial
}