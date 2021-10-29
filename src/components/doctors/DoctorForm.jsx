import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import MainContext from "../../global/main/MainContext";
import { useForm } from "../../hooks/useForm";
import { DOCTORS } from "../../types";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";

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

const DoctorForm = () => {

    const { setCurrentPage } = useContext(MainContext);
    const url = "http://localhost:8090/medico";
    const { form, formErrors, response, resError, handleChange, handleSubmitDoctorForm } = useForm(initialForm, "POST", url);

    useEffect(() => {
        if (response) {
            Swal.fire({
                title: '¡Éxito!',
                text: `El médico ${response.nombre} ${response.apellido} fue registrado exitosamente.`,
                icon: 'success'
            })
        }

    }, [response]);

    useEffect(() => {
        if (resError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo registrar el médico.`,
                icon: 'error'
            })
        }

    }, [resError]);

    useEffect(() => {
        setCurrentPage(DOCTORS);
    }, []);

    return (
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className="content">
                <div className="form patient-form">
                    <form
                        onSubmit={handleSubmitDoctorForm}
                    >
                        <h2>Registra médico</h2>
                        <h4>Datos del médico</h4>
                        <input
                            value="-1"
                            // name="id"
                            type="hidden"
                        />
                        <label htmlFor="reg-doctor-first-name">Nombres</label>
                        <input
                            onChange={handleChange}
                            name="firstName"
                            value={form.firstName}
                            id="reg-doctor-first-name"
                            type="text"
                            placeholder="Nombres del médico"
                        />
                        {formErrors.firstName &&
                            <span className="error">{formErrors.firstName}</span>
                        }
                        <label htmlFor="reg-doctor-last-name">Apellidos</label>
                        <input
                            onChange={handleChange}
                            name="lastName"
                            value={form.lastName}
                            id="reg-doctor-last-name"
                            type="text"
                            placeholder="Apellidos del médico"
                        />
                        {formErrors.lastName &&
                            <span className="error">{formErrors.lastName}</span>
                        }
                        <label htmlFor="reg-doctor-dni">DNI</label>
                        <input
                            onChange={handleChange}
                            name="dni"
                            value={form.dni}
                            id="reg-doctor-dni"
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
                                id="reg-doctor-masculino"
                            />
                            <label htmlFor="reg-doctor-masculino">Masculino</label>
                            <input
                                onChange={handleChange}
                                name="gender"
                                value="F"
                                type="radio"
                                id="reg-doctor-femenino"
                            />
                            <label htmlFor="reg-doctor-femenino">Femenino</label>
                        </div>
                        {formErrors.gender &&
                            <span className="error">{formErrors.gender}</span>
                        }
                        <label htmlFor="reg-doctor-date-of-birth">Fecha de nacimiento</label>
                        <input
                            onChange={handleChange}
                            name="dateOfBirth"
                            value={form.dateOfBirth}
                            type="date"
                            id="reg-doctor-date-of-birth"
                        />
                        {formErrors.dateOfBirth &&
                            <span className="error">{formErrors.dateOfBirth}</span>
                        }
                        <label htmlFor="reg-doctor-address">Dirección</label>
                        <input
                            onChange={handleChange}
                            name="address"
                            value={form.address}
                            id="reg-doctor-address"
                            type="text"
                            placeholder="Dirección de domicilio"
                        />
                        {formErrors.address &&
                            <span className="error">{formErrors.address}</span>
                        }
                        <label htmlFor="reg-doctor-cell-phone">Celular</label>
                        <input
                            onChange={handleChange}
                            name="cellPhone"
                            value={form.cellPhone}
                            id="reg-doctor-cell-phone"
                            type="text"
                            placeholder="Nro. Celular"
                        />
                        {formErrors.cellPhone &&
                            <span className="error">{formErrors.cellPhone}</span>
                        }
                        <h4>Datos del usuario</h4>
                        <label htmlFor="reg-doctor-email">Correo electrónico</label>
                        <input
                            onChange={handleChange}
                            name="email"
                            value={form.email}
                            id="reg-doctor-email"
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

export default DoctorForm;
