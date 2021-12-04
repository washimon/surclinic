import { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import MainContext from "../../global/main/MainContext";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { APPOINTMENTS, GET_WITH_PARAMS } from "../../types";

const initialForm = {
    startOfAppoint: '',
    endOfAppoint: '',
    reason: '',
    observations: '',
    price: 0,
    symptoms: '',
    patient: '',
    area: '',
    specialty: '',
}

const AppointmentForm = () => {

    let history = useHistory();
    const areaRef = useRef();
    const { setCurrentPage } = useContext(MainContext);
    const {
        form,
        formErrors,
        response,
        isLoading,
        resError,
        handleChange,
        handleSubmitAppointmentForm,
        setForm
    } = useForm(initialForm, 'http://localhost:8090/cita');
    const {
        response: patients,
        doFetch: doFetchPatients
    } = useFetch('http://localhost:8090/paciente/list-activos');
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
            history.push("/citas");
            Swal.fire({
                title: '¡Éxito!',
                text: `La cita fue registrada exitosamente.`,
                icon: 'success'
            })
        }

    }, [response, history]);

    useEffect(() => {
        if (resError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo registrar el cita.`,
                icon: 'error'
            })
        }

    }, [resError]);

    useEffect(() => {
        setCurrentPage(APPOINTMENTS);
        doFetchPatients();
        doFetchAreas();
        console.log('Pacientes llamados');
    }, []);

    const handleCancel = () => history.goBack();

    return (
        <div className="patient-form">
            <form
                onSubmit={handleSubmitAppointmentForm}
            >
                <h2 className="appointment-form-title">Registra Cita</h2>
                <div className="control-patient">
                    <label htmlFor="reg-appointment-patient">Paciente</label>
                    <select
                        onChange={handleChange}
                        name="patient"
                        value={form.patient}
                        id="reg-appointment-patient"
                    >
                        <option value="">Seleccione un paciente</option>
                        {patients &&
                            patients.map(item => (
                                <option
                                    key={item.id}
                                    value={item.id}
                                >{item.nombre} {item.apellido}</option>
                            ))
                        }
                    </select>
                    {formErrors.patient &&
                        <span className="error">{formErrors.patient}</span>
                    }
                </div>
                <div className="control-reason">
                    <label htmlFor="reg-appointment-reason">Motivo</label>
                    <input
                        onChange={handleChange}
                        name="reason"
                        value={form.reason}
                        id="reg-appointment-reason"
                        type="text"
                    />
                    {formErrors.reason &&
                        <span className="error">{formErrors.reason}</span>
                    }
                </div>
                <div className="control-startOfAppoint">
                    <label htmlFor="reg-appointment-startOfAppoint">Fecha Inicio</label>
                    <input
                        onChange={handleChange}
                        name="startOfAppoint"
                        value={form.startOfAppoint}
                        id="reg-appointment-startOfAppoint"
                        type="datetime-local"
                    />
                    {formErrors.startOfAppoint &&
                        <span className="error">{formErrors.startOfAppoint}</span>
                    }
                </div>
                <div className="control-endOfAppoint">
                    <label htmlFor="reg-appointment-endOfAppoint">Fecha Fin</label>
                    <input
                        onChange={handleChange}
                        name="endOfAppoint"
                        value={form.endOfAppoint}
                        id="reg-appointment-endOfAppoint"
                        type="datetime-local"
                    />
                    {formErrors.endOfAppoint &&
                        <span className="error">{formErrors.endOfAppoint}</span>
                    }
                </div>
                <div className="control-price">
                    <label htmlFor="reg-appointment-price">Precio</label>
                    <input
                        onChange={handleChange}
                        name="price"
                        value={form.price}
                        id="reg-appointment-price"
                        type="number"
                    />
                    {formErrors.price &&
                        <span className="error">{formErrors.price}</span>
                    }
                </div>
                <div className="control-symptoms">
                    <label htmlFor="reg-appointment-symptoms">Síntomas</label>
                    <input
                        onChange={handleChange}
                        name="symptoms"
                        value={form.symptoms}
                        id="reg-appointment-symptoms"
                        type="text"
                    />
                    {formErrors.symptoms &&
                        <span className="error">{formErrors.symptoms}</span>
                    }
                </div>
                <div className="control-area">
                    <label htmlFor="reg-appointment-area">Área</label>
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
                        id="reg-appointment-area"
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
                    <label htmlFor="reg-appointment-specialty">Especialidad</label>
                    <select
                        onChange={handleChange}
                        name="specialty"
                        value={form.specialty}
                        id="reg-appointment-specialty"
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
                <div className="control-observations">
                    <label htmlFor="reg-appointment-observations">Observaciones <small>(Opcional)</small></label>
                    <input
                        onChange={handleChange}
                        name="observations"
                        value={form.observations}
                        id="reg-appointment-observations"
                        type="text"
                    />
                    {formErrors.observations &&
                        <span className="error">{formErrors.observations}</span>
                    }
                </div>
                <div className="form-button">
                    <button
                        onClick={handleCancel}
                        type="reset"
                        className="btn-cancel"
                    >Cancelar</button>
                    <button>{isLoading ? <i className="fas fa-circle-notch fa-spin"></i> : 'Registrar'}</button>
                </div>
            </form>
        </div>
    );
}

export default AppointmentForm;
