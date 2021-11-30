export const validateSignForm = form => {
    const errors = {};
    const regexUserName = /^([a-zA-Z\d]{3})[a-zA-Z\d]*$/gm;
    const regexPassword = /^([a-zA-Z\d]{6})[a-zA-Z\d]*$/gm;
    
    if (!form.userName?.trim()) {
        errors.userName = 'El usuario es requerido.';
    } else if (!regexUserName.test(form.userName)) {
        errors.userName = 'El usuario debe tener entre 3 a más caracteres y sin espacios.';
    }
    
    if (!form.password?.trim()) {
        errors.password = 'La contraseña es requerida.';
    } else if (!regexPassword.test(form.password)) {
        errors.password = 'La contraseña debe tener entre 6 a más caracteres y sin espacios.';
    }
    
    return errors;
}

export const validatePatientForm = form => {
    const errors = {};
    
    const regexDni = /^(\d{8})$/gm;
    const regexGender = /^(M|F)$/gm;
    // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
    
    if (!form.firstName?.trim()) {
        errors.firstName = 'Los nombres son requeridos.';
    } else if (form.firstName?.trim().length > 50) {
        errors.firstName = 'Máximo 50 caracteres permitidos para los nombres.';
    }
    if (!form.lastName?.trim()) {
        errors.lastName = 'Los apellidos son requeridos.';
    } else if (form.lastName?.trim().length > 50) {
        errors.lastName = 'Máximo 50 caracteres permitidos para los apellidos.';
    }
    if (!form.dni?.trim()) {
        errors.dni = 'El Nro. DNI es requerido.';
    } else if (!regexDni.test(form.dni)) {
        errors.dni = 'Sólo 8 caracteres permitidos (números).';
    }
    if (!form.gender?.trim()) {
        errors.gender = 'El género es requerido.';
    } else if (!regexGender.test(form.gender)) {
        errors.gender = '"F" o "M" son los valores permitidos.';
    }
    if (!form.dateOfBirth?.trim()) {
        errors.dateOfBirth = 'La fecha de nacimiento es requerida.';
    }
    if (!form.address?.trim()) {
        errors.address = 'La dirección es requerida.';
    } else if (form.address?.trim().length > 100) {
        errors.address = 'Máximo 100 caracteres permitidos para la dirección.';
    }
    if (!form.cellPhone?.trim()) {
        errors.cellPhone = 'El número de celular es requerido.';
    } else if (form.cellPhone?.trim().length > 12) {
        errors.cellPhone = 'Máximo 12 dígitos para el número de celular.';
    }

    return errors;
}

export const validateDoctorForm = form => {
    const errors = {};
    
    const regexDni = /^(\d{8})$/gm;
    const regexGender = /^(M|F)$/gm;
    // const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gm;
    
    if (!form.firstName?.trim()) {
        errors.firstName = 'Los nombres son requeridos.';
    } else if (form.firstName?.trim().length > 50) {
        errors.firstName = 'Máximo 50 caracteres permitidos para los nombres.';
    }
    if (!form.lastName?.trim()) {
        errors.lastName = 'Los apellidos son requeridos.';
    } else if (form.lastName?.trim().length > 50) {
        errors.lastName = 'Máximo 50 caracteres permitidos para los apellidos.';
    }
    if (!form.dni?.trim()) {
        errors.dni = 'El Nro. DNI es requerido.';
    } else if (!regexDni.test(form.dni)) {
        errors.dni = 'Sólo 8 caracteres permitidos (números).';
    }
    if (!form.gender?.trim()) {
        errors.gender = 'El género es requerido.';
    } else if (!regexGender.test(form.gender)) {
        errors.gender = '"F" o "M" son los valores permitidos.';
    }
    if (!form.dateOfBirth?.trim()) {
        errors.dateOfBirth = 'La fecha de nacimiento es requerida.';
    }
    if (!form.address?.trim()) {
        errors.address = 'La dirección es requerida.';
    } else if (form.address?.trim().length > 100) {
        errors.address = 'Máximo 100 caracteres permitidos para la dirección.';
    }
    if (!form.cellPhone?.trim()) {
        errors.cellPhone = 'El número de celular es requerido.';
    } else if (form.cellPhone?.trim().length > 12) {
        errors.cellPhone = 'Máximo 12 dígitos para el número de celular.';
    }

    if (!form.area) {
        errors.area = 'El área es requerido.';
    }
    if (!form.specialty) {
        errors.specialty = 'La especialidad es requerida.';
    }

    return errors;
}