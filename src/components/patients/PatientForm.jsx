import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import MainContext from "../../global/main/MainContext";
import { PATIENTS } from "../../types";
import { useHistory } from "react-router";
import PatientsContext from "../../global/patients/PatientsContext";

const initialForm = {
    firstName: '',
    lastName: '',
    dni: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    cellPhone: '',
    email: '',
    allergies: '',
    deseases: '',
    medicines: '',
}

const PatientForm = () => {

    let history = useHistory();
    const { setCurrentPage } = useContext(MainContext);
    const { patientToEdit, setPatientToEdit } = useContext(PatientsContext);
    const url = "http://localhost:8090/paciente";
    const {
        form,
        formErrors,
        response,
        isLoading,
        resError,
        editRes,
        editIsLoading,
        editResError,
        handleChange,
        handleSubmitPatientForm,
        setForm
    } = useForm(initialForm, url);

    useEffect(() => {
        if (response) {
            console.log('Response recibido');
            history.push("/pacientes");
            Swal.fire({
                title: '¡Éxito!',
                text: `El paciente ${response.nombre} ${response.apellido} fue registrado exitosamente.`,
                icon: 'success'
            })
        }

    }, [response, history]);

    useEffect(() => {
        if (resError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo registrar el paciente.`,
                icon: 'error'
            })
        }

    }, [resError]);

    useEffect(() => {
        if (editRes) {
            console.log('Response recibido');
            history.push("/pacientes");
            Swal.fire({
                title: 'Actualizado',
                text: `El paciente ${editRes.nombre} ${editRes.apellido} fue actualizado exitosamente.`,
                icon: 'success'
            })
        }

    }, [editRes, history]);

    useEffect(() => {
        if (editResError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo actualizar el paciente.`,
                icon: 'error'
            })
        }

    }, [editResError]);

    useEffect(() => {
        if (patientToEdit) {
            setForm({
                firstName: patientToEdit.nombre,
                lastName: patientToEdit.apellido,
                gender: patientToEdit.sexo,
                dni: patientToEdit.dni,
                dateOfBirth: patientToEdit.fecNacimiento,
                address: patientToEdit.direccion,
                cellPhone: patientToEdit.celular,
                allergies: patientToEdit.alergias,
                deseases: patientToEdit.enfermedades,
                medicines: patientToEdit.medicamentos
            });
            console.log('estableciendo valores al form');
        }
    }, [patientToEdit]);

    useEffect(() => {
        setCurrentPage(PATIENTS);

        return () => setPatientToEdit(null);
    }, []);

    const handleCancel = () => history.goBack();

    return (
        <div className="patient-form">
            <form
                onSubmit={patientToEdit ? e => handleSubmitPatientForm(e, true) : handleSubmitPatientForm}
            >
                <h2>{patientToEdit ? 'Edita Paciente' : 'Registra Paciente'}</h2>
                <h4>Datos personales</h4>
                <input
                    value="-1"
                    // name="id"
                    type="hidden"
                />
                <div className="control-first-name">
                    <label htmlFor="reg-first-name">Nombres</label>
                    <input
                        onChange={handleChange}
                        name="firstName"
                        value={form.firstName}
                        className={formErrors.firstName && "input-error"}
                        id="reg-first-name"
                        type="text"
                        autoComplete="off"
                    />
                    {formErrors.firstName &&
                        <span className="error">{formErrors.firstName}</span>
                    }
                </div>
                <div className="control-last-name">
                    <label htmlFor="reg-last-name">Apellidos</label>
                    <input
                        onChange={handleChange}
                        name="lastName"
                        value={form.lastName}
                        className={formErrors.lastName && "input-error"}
                        id="reg-last-name"
                        type="text"
                        autoComplete="off"
                    />
                    {formErrors.lastName &&
                        <span className="error">{formErrors.lastName}</span>
                    }
                </div>
                <div className="control-dni">
                    <label htmlFor="reg-dni">DNI</label>
                    <input
                        onChange={handleChange}
                        name="dni"
                        value={form.dni}
                        className={formErrors.dni && "input-error"}
                        id="reg-dni"
                        type="text"
                        autoComplete="off"
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
                            id="reg-masculino"
                            checked={form.gender === 'M'}
                            />
                        <label htmlFor="reg-masculino">Masculino</label>
                        <input
                            onChange={handleChange}
                            name="gender"
                            value="F"
                            type="radio"
                            id="reg-femenino"
                            checked={form.gender === 'F'}
                        />
                        <label htmlFor="reg-femenino">Femenino</label>
                    </div>
                    {formErrors.gender &&
                        <span className="error">{formErrors.gender}</span>
                    }
                </div>
                <div className="control-address">
                    <label htmlFor="reg-address">Dirección</label>
                    <input
                        onChange={handleChange}
                        name="address"
                        value={form.address}
                        className={formErrors.address && "input-error"}
                        id="reg-address"
                        type="text"
                        autoComplete="off"
                    />
                    {formErrors.address &&
                        <span className="error">{formErrors.address}</span>
                    }
                </div>
                <div className="control-cell-phone">
                    <label htmlFor="reg-cell-phone">Celular</label>
                    <input
                        onChange={handleChange}
                        name="cellPhone"
                        value={form.cellPhone}
                        className={formErrors.cellPhone && "input-error"}
                        id="reg-cell-phone"
                        type="text"
                        autoComplete="off"
                    />
                    {formErrors.cellPhone &&
                        <span className="error">{formErrors.cellPhone}</span>
                    }
                </div>
                <div className="control-date-of-birth">
                    <label htmlFor="reg-date-of-birth">Fecha de nacimiento</label>
                    <input
                        onChange={handleChange}
                        name="dateOfBirth"
                        value={form.dateOfBirth}
                        className={formErrors.dateOfBirth && "input-error"}
                        type="date"
                        id="reg-date-of-birth"
                    />
                    {formErrors.dateOfBirth &&
                        <span className="error">{formErrors.dateOfBirth}</span>
                    }
                </div>
                <h4>Datos del paciente</h4>
                <div className="control-allergies">
                    <label htmlFor="reg-allergies">Alergias <small>(opcional)</small></label>
                    <textarea
                        onChange={handleChange}
                        name="allergies"
                        value={form.allergies}
                        id="reg-allergies"
                        placeholder="Alergias que tiene el paciente"
                    />
                </div>
                <div className="control-deseases">
                    <label htmlFor="reg-deseases">Enfermedades <small>(opcional)</small></label>
                    <textarea
                        onChange={handleChange}
                        name="deseases"
                        value={form.deseases}
                        id="reg-deseases"
                        placeholder="Enfermedades que tiene el paciente"
                    />
                </div>
                <div className="control-medicines">
                    <label htmlFor="reg-medicines">Medicamentos <small>(opcional)</small></label>
                    <textarea
                        onChange={handleChange}
                        name="medicines"
                        value={form.medicines}
                        id="reg-medicines"
                        placeholder="Medicamentos que toma el paciente"
                    />
                </div>
                <div className="form-button">
                    <button
                        onClick={handleCancel}
                        type="reset"
                        className="btn-cancel"
                    >Cancelar</button>
                    {!patientToEdit &&
                        <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Registrar'}</button>
                    }
                    {patientToEdit &&
                        <button>{editIsLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Actualizar'}</button>
                    }
                </div>
            </form>
        </div>
    );
}

export default PatientForm;