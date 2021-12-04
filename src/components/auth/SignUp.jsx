import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { POST } from "../../types";
import Swal from "sweetalert2";

const initialForm = {
    email: '',
    userName: '',
    password: ''
}

const SignUp = () => {

    let history = useHistory();
    const {
        form,
        formErrors,
        isLoading,
        response,
        resError,
        handleChange,
        handleSubmitSignUpForm,
    } = useForm(initialForm, "http://localhost:8090/auth/signup", POST);

    useEffect(() => {
        if (response) {
            history.replace("/iniciar-sesion");
            Swal.fire({
                title: '¡Éxito!',
                text: `La cuenta fue creada exitosamente.`,
                icon: 'success'
            })
        };
    }, [response, history]);

    return (
        <div className="sign-in">
            <form
                onSubmit={handleSubmitSignUpForm}
            >
                <span className="clinic-branch">
                    <i className="fas fa-clinic-medical"></i> Sistema Web RCM
                </span>
                <h1>Regístrate</h1>
                <span className="link-registro">
                    ¿Ya tienes cuenta?
                    <span>
                        <Link to="/iniciar-sesion"> Inicia sesión</Link>
                    </span>
                </span>
                <label htmlFor="id-email">Email</label>
                <input
                    onChange={handleChange}
                    name="email"
                    value={form.email}
                    className={formErrors.email && "input-error"}
                    id="id-email"
                    type="text"
                />
                {formErrors.email &&
                    <span className="error">{formErrors.email}</span>
                }
                <label htmlFor="id-username">Nombre de usuario</label>
                <input
                    onChange={handleChange}
                    name="userName"
                    value={form.userName}
                    className={formErrors.userName && "input-error"}
                    id="id-username"
                    type="text"
                />
                {formErrors.userName &&
                    <span className="error">{formErrors.userName}</span>
                }
                <label htmlFor="id-password">Contraseña</label>
                <input
                    onChange={handleChange}
                    value={form.password}
                    className={formErrors.password && "input-error"}
                    name="password"
                    id="id-password"
                    type="password"
                />
                {formErrors.password &&
                    <span className="error">{formErrors.password}</span>
                }
                <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Registrar'}</button>
                <strong className="error">{resError && 'No se pudo crear la cuenta nueva.'}</strong>
            </form>
            <div className="form-banner">
                <div className="banner"></div>
            </div>
        </div>
    );
}

export default SignUp;