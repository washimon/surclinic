export const validateForm = form => {
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