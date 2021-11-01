import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import MainContext from "../../global/main/MainContext";
import { useForm } from "../../hooks/useForm";
import { DOCTORS } from "../../types";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { useHistory } from "react-router";

const initialForm = {
    firstName: '',
    lastName: '',
    dni: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    cellPhone: ''
}

const DoctorForm = () => {

    let history = useHistory();
    const { setCurrentPage } = useContext(MainContext);
    const url = "http://localhost:8090/medico";
    const { form, formErrors, response, isLoading, resError, handleChange, handleSubmitDoctorForm } = useForm(initialForm, "POST", url);

    useEffect(() => {
        if (response) {
            console.log('Response recibido');
            history.push("/pacientes");
            Swal.fire({
                title: '¡Éxito!',
                text: `El médico ${response.nombre} ${response.apellido} fue registrado exitosamente.`,
                icon: 'success'
            })
        }

    }, [response, history]);

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
                <div className="patient-form">
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
                        <div className="control-firts-name">
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
                        </div>
                        <div className="control-last-name">
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
                        </div>
                        <div className="control-dni">
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
                        </div>
                        <div className="control-gender">
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
                        </div>
                        <div className="control-address">
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
                        </div>
                        <div className="control-cell-phone">
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
                        </div>
                        <div className="control-date-of-birth">
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
                        </div>
                        <div className="form-button">
                            <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Registrar'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DoctorForm;
