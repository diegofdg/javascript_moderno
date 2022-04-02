import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res) => {    
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
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });   
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);            
        }        
    }
}

export {
    guardarTestimonial
}