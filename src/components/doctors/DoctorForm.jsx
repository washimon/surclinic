import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useContext, useEffect, useRef } from "react";
import MainContext from "../../global/main/MainContext";
import DoctorsContext from "../../global/doctors/DoctorsContext";
import { useForm } from "../../hooks/useForm";
import { DOCTORS, GET, GET_WITH_PARAMS } from "../../types";
import { useFetch } from "../../hooks/useFetch";

const initialForm = {
    firstName: '',
    lastName: '',
    dni: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    cellPhone: '',
    area: '',
    specialty: ''
}

const DoctorForm = () => {

    let history = useHistory();
    const areaRef = useRef();
    const { doctorToEdit, setDoctorToEdit } = useContext(DoctorsContext);
    const { setCurrentPage } = useContext(MainContext);
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
        handleSubmitDoctorForm,
        setForm
    } = useForm(initialForm, 'http://localhost:8090/medico');
    const {
        response: areas,
        doFetch: doFetchAreas
    } = useFetch('http://localhost:8090/area');
    const {
        response: especialidades,
        doFetch: doFetchEspecialidades
    } = useFetch('http://localhost:8090/especialidad/area', GET_WITH_PARAMS);

    useEffect(() => {
        if (response) {
            console.log('Response recibido');
            history.push("/medicos");
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
        if (editRes) {
            console.log('Response recibido');
            history.push("/medicos");
            Swal.fire({
                title: '¡Éxito!',
                text: `El médico ${editRes.nombre} ${editRes.apellido} fue actualizado exitosamente.`,
                icon: 'success'
            })
        }

    }, [editRes, history]);

    useEffect(() => {
        if (editResError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo actualizar el médico.`,
                icon: 'error'
            })
        }

    }, [editResError]);

    useEffect(() => {
        setCurrentPage(DOCTORS);
        doFetchAreas();
        if (doctorToEdit) {
            doFetchEspecialidades({}, `id=${doctorToEdit.area.id}`);
        }
        if (doctorToEdit) {
            setForm({
                firstName: doctorToEdit.nombre,
                lastName: doctorToEdit.apellido,
                gender: doctorToEdit.sexo,
                dni: doctorToEdit.dni,
                dateOfBirth: doctorToEdit.fecNacimiento,
                email: doctorToEdit.email,
                address: doctorToEdit.direccion,
                cellPhone: doctorToEdit.celular,
                area: doctorToEdit.area.id,
                specialty: doctorToEdit.especialidad.id
            });
        }

        return () => setDoctorToEdit(null);
    }, []);

    const handleCancel = () => history.goBack();

    return (
        <div className="patient-form">
            <form
                onSubmit={doctorToEdit ? e => handleSubmitDoctorForm(e, true) : handleSubmitDoctorForm}
            >
                <h2>{doctorToEdit ? 'Edita' : 'Registra'} Médico</h2>
                <h4>Datos del médico</h4>
                <div className="control-firts-name">
                    <label htmlFor="reg-doctor-first-name">Nombres</label>
                    <input
                        onChange={handleChange}
                        name="firstName"
                        value={form.firstName}
                        id="reg-doctor-first-name"
                        type="text"
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
                            checked={form.gender === 'M'}
                        />
                        <label htmlFor="reg-doctor-masculino">Masculino</label>
                        <input
                            onChange={handleChange}
                            name="gender"
                            value="F"
                            type="radio"
                            id="reg-doctor-femenino"
                            checked={form.gender === 'F'}
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
                <h4>Datos del Médico</h4>
                <div className="control-area">
                    <label htmlFor="reg-doctor-area">Área</label>
                    <select
                        onChange={e => {
                            handleChange(e);
                            if (areaRef.current.value !== '') {
                                doFetchEspecialidades({}, `id=${areaRef.current.value}`);
                            }
                        }}
                        name="area"
                        value={form.area}
                        ref={areaRef}
                        id="reg-doctor-area"
                    >
                        <option value="">Seleccione un área</option>
                        {areas &&
                            areas.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.area}</option>
                            ))
                        }
                    </select>
                    {formErrors.area &&
                        <span className="error">{formErrors.area}</span>
                    }
                </div>
                <div className="control-specialty">
                    <label htmlFor="reg-doctor-specialty">Especialidad</label>
                    <select
                        onChange={handleChange}
                        name="specialty"
                        value={form.specialty}
                        id="reg-doctor-specialty"
                    >
                        <option value="">Seleccione una especialidad</option>
                        {especialidades &&
                            especialidades.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.nombre}</option>
                            ))
                        }
                    </select>
                    {formErrors.specialty &&
                        <span className="error">{formErrors.specialty}</span>
                    }
                </div>
                <div className="form-button">
                    <button
                        onClick={handleCancel}
                        type="reset"
                        className="btn-cancel"
                    >Cancelar</button>
                    {!doctorToEdit &&
                        <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Registrar'}</button>
                    }
                    {doctorToEdit &&
                        <button>{editIsLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Actualizar'}</button>
                    }
                </div>
            </form>
        </div>
    );
}

export default DoctorForm;
