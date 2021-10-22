import { useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { useForm } from "../../hooks/useForm";
import { PATIENT_FORM } from "../../types";

const initialForm = {
    firstName: '',
    lastName: '',
    dni: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    cellPhone: '',
    email: ''
}

const Patientform = () => {
    const url = "http://localhost:8090/paciente/";
    const { form, formErrors, response, resError, handleChange, handleSubmit } = useForm(initialForm, "POST", url);

    useEffect(() => {
        if (response) {
            Swal.fire({
                title: '¡Éxito!',
                text: `El paciente ${response.nombre} ${response.apellido} fue registrado exitosamente.`,
                icon: 'success'
            })
        }

    }, [response]);

    useEffect(() => {
        if (resError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo registrar el paciente.`,
                icon: 'error'
            })
        }

    }, [resError]);

    return (
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className="content">
                <div className="form patient-form">
                    <form
                        onSubmit={(e) => handleSubmit(e, PATIENT_FORM)}
                    >
                        <h2>Registra paciente</h2>
                        <h4>Datos del paciente</h4>
                        <input
                            value="-1"
                            // name="id"
                            type="hidden"
                        />
                        <label htmlFor="reg-first-name">Nombres</label>
                        <input
                            onChange={handleChange}
                            name="firstName"
                            value={form.firstName}
                            id="reg-first-name"
                            type="text"
                            placeholder="Nombres del paciente"
                        />
                        {formErrors.firstName &&
                            <span className="error">{formErrors.firstName}</span>
                        }
                        <label htmlFor="reg-last-name">Apellidos</label>
                        <input
                            onChange={handleChange}
                            name="lastName"
                            value={form.lastName}
                            id="reg-last-name"
                            type="text"
                            placeholder="Apellidos del paciente"
                        />
                        {formErrors.lastName &&
                            <span className="error">{formErrors.lastName}</span>
                        }
                        <label htmlFor="reg-dni">DNI</label>
                        <input
                            onChange={handleChange}
                            name="dni"
                            value={form.dni}
                            id="reg-dni"
                            type="text"
                            placeholder="Nro. Documento Nacional de Identidad"
                        />
                        {formErrors.dni &&
                            <span className="error">{formErrors.dni}</span>
                        }
                        <label htmlFor="reg-gender">Género</label>
                        <div className="form-input">
                            <input
                                onChange={handleChange}
                                name="gender"
                                value="M"
                                type="radio"
                                id="reg-masculino"
                            />
                            <label htmlFor="reg-masculino">Masculino</label>
                            <input
                                onChange={handleChange}
                                name="gender"
                                value="F"
                                type="radio"
                                id="reg-femenino"
                            />
                            <label htmlFor="reg-femenino">Femenino</label>
                        </div>
                        {formErrors.gender &&
                            <span className="error">{formErrors.gender}</span>
                        }
                        <label htmlFor="reg-date-of-birth">Fecha de nacimiento</label>
                        <input
                            onChange={handleChange}
                            name="dateOfBirth"
                            value={form.dateOfBirth}
                            type="date"
                            id="reg-date-of-birth"
                        />
                        {formErrors.dateOfBirth &&
                            <span className="error">{formErrors.dateOfBirth}</span>
                        }
                        <label htmlFor="reg-address">Dirección</label>
                        <input
                            onChange={handleChange}
                            name="address"
                            value={form.address}
                            id="reg-address"
                            type="text"
                            placeholder="Dirección de domicilio"
                        />
                        {formErrors.address &&
                            <span className="error">{formErrors.address}</span>
                        }
                        <label htmlFor="reg-cell-phone">Celular</label>
                        <input
                            onChange={handleChange}
                            name="cellPhone"
                            value={form.cellPhone}
                            id="reg-address"
                            type="text"
                            placeholder="Nro. Celular"
                        />
                        {formErrors.cellPhone &&
                            <span className="error">{formErrors.cellPhone}</span>
                        }
                        <h4>Datos del usuario</h4>
                        <label htmlFor="reg-email">Correo electrónico</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            value={form.email}
                            id="reg-email"
                            type="email"
                            placeholder="Email"
                        />
                        {formErrors.email &&
                            <span className="error">{formErrors.email}</span>
                        }
                        <button>Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Patientform;