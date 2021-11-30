import Patient from "./Patient";
import { useFetch } from '../../hooks/useFetch';
import { DELETE } from "../../types";
import { useEffect } from "react";
import Swal from "sweetalert2";

const Patientlist = ({ patients, doFetchAllPatients }) => {

    const {
        response: doctorRemoved,
        resError: removeResError,
        doFetch: doFetchRemove
    } = useFetch('http://localhost:8090/paciente', DELETE);

    useEffect(() => {
        if (doctorRemoved) {
            console.log('Response recibido');
            doFetchAllPatients();
            Swal.fire({
                title: '¡Éxito!',
                text: `El paciente fue eliminado exitosamente.`,
                icon: 'success'
            })
        }

    }, [doctorRemoved]);

    useEffect(() => {
        if (removeResError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo eliminar el paciente.`,
                icon: 'error'
            })
        }

    }, [removeResError]);

    if (!patients) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-danger">
                <h3>Error de servidor</h3>
                No se puede obtener los pacientes.
            </div>
        </div>
    );
    if (patients.length === 0) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-info">
                <h3>No hay pacientes</h3>
                Comienza registrando un nuevo paciente.
            </div>
        </div>
    );

    const patientsList = patients.map((item, index) => (
        <Patient
            key={item.id}
            {...item}
            index={index}
            patient={item}
            doFetchRemove={doFetchRemove}
        />
    ));

    return (
        <div className="results-table animate__animated animate__fadeIn">
            <h2 className="table-title">Lista de pacientes: <span>Todos</span></h2>
            <div className="table">
                <div className="headers patient-headers">
                    <h4>Id</h4>
                    <h4>Paciente</h4>
                    <h4>DNI</h4>
                    <h4>Celular</h4>
                    <h4>Alergias</h4>
                    <h4>Enfermedades</h4>
                    <h4>Medicamentos</h4>
                    <h4>Acciones</h4>
                </div>
                {patientsList}
            </div>
        </div>
    );
}

export default Patientlist;
