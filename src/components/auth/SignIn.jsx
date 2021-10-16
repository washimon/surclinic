import { useForm } from "../../hooks/useForm";

const initialForm = {
    userName: '',
    password: ''
}

const validationsForm = form => {
    const errors = {};
    const regexUserName = /^([a-zA-Z\d]{3})[a-zA-Z\d]*$/gm;
    const regexPassword = /^([a-zA-Z\d]{6})[a-zA-Z\d]*$/gm;

    if (!form.userName.trim()) {
        errors.userName = 'El usuario es requerido.';
    } else if (!regexUserName.test(form.userName)) {
        errors.userName = 'El usuario debe tener entre 3 a más caracteres y sin espacios.';
    }

    if (!form.password.trim()) {
        errors.password = 'La contraseña es requerida.';
    } else if (!regexPassword.test(form.password)) {
        errors.password = 'La contraseña debe tener entre 6 a más caracteres y sin espacios.';
    }

    return errors;
}

const SignIn = () => {

    const {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleBlur
    } = useForm(initialForm, validationsForm);

    return (
        <div className="form">
            <form
                onSubmit={handleSubmit}
            >
                <span className="clinic-branch">
                    <i className="fas fa-clinic-medical"></i> SurClinic
                </span>
                <h1>Inicia sesión</h1>
                <span>¿Todavía no tienes cuenta? <span>Crea una cuenta</span></span>
                <label htmlFor="id-username">Nombre de usuario</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="userName"
                    value={form.userName}
                    className={errors.userName && "input-error"}
                    id="id-username"
                    type="text"
                />
                {errors.userName &&
                    <span className="error">{errors.userName}</span>
                }
                <label htmlFor="id-password">Contraseña</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.password}
                    className={errors.password && "input-error"}
                    name="password"
                    id="id-password"
                    type="password"
                />
                {errors.password &&
                    <span className="error">{errors.password}</span>
                }
                <button>Iniciar sesión</button>
            </form>
            <div className="form-banner">
                <div className="banner"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5995f7" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,133.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
}

export default SignIn;