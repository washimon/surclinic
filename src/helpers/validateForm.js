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
    // const regexUserName = /^([a-zA-Z\d]{3})[a-zA-Z\d]*$/gm;
    // const regexPassword = /^([a-zA-Z\d]{6})[a-zA-Z\d]*$/gm;

    if (!form.firstName?.trim()) {
        errors.firstName = 'Los nombres son requeridos.';
    }
    if (!form.lastName?.trim()) {
        errors.lastName = 'Los apellidos son requeridos.';
    }
    if (!form.dni?.trim()) {
        errors.dni = 'El Nro. DNI es requerido.';
    }
    if (!form.gender?.trim()) {
        errors.gender = 'El género es requerido.';
    }
    if (!form.dateOfBirth?.trim()) {
        errors.dateOfBirth = 'La fecha de nacimiento es requerida.';
    }
    if (!form.address?.trim()) {
        errors.address = 'La dirección es requerida.';
    }
    if (!form.cellPhone?.trim()) {
        errors.cellPhone = 'El número de celular es requerido.';
    }
    if (!form.email?.trim()) {
        errors.email = 'El email es requerido.';
    }

    return errors;
}