const validation = (data) =>{
    
    const errors = {};
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexNumber = /\d+/;
    
    if (!data.email) {
        errors.email = 'Se requiere un nombre';
        
    }else if (!regexEmail.test(data.email)) {
            errors.email = 'Debe ser un correo electrónico';

    }else if (data.email.length > 35){
            errors.email = "Debe de tener menos de 36 caracteres"
        
    }

    if(!regexNumber.test(data.password)){
        errors.password = "Debe tener un numero"
    }
    else if(data.password.length < 6 || data.password.length > 10){
        errors.password = "Debe entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;