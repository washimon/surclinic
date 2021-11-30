import { useEffect } from "react";
import Swal from "sweetalert2";
import { useFetch } from "../../hooks/useFetch";
import { DELETE } from "../../types";
import Doctor from "./Doctor";

const Doctorlist = ({ doctors, doFetchAllDoctors }) => {

    const {
        response: doctorRemoved,
        resError: removeResError,
        doFetch: doFetchRemove
    } = useFetch('http://localhost:8090/medico', DELETE);

    useEffect(() => {
        if (doctorRemoved) {
            console.log('Response recibido');
            doFetchAllDoctors();
            Swal.fire({
                title: '¡Éxito!',
                text: `El médico fue eliminado exitosamente.`,
                icon: 'success'
            })
        }

    }, [doctorRemoved]);

    useEffect(() => {
        if (removeResError) {
            Swal.fire({
                title: 'Ooops',
                text: `Error: no se pudo eliminar el médico.`,
                icon: 'error'
            })
        }

    }, [removeResError]);

    if (!doctors) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-danger">
                <h3>Error de servidor</h3>
                No se puede obtener los médicos.
            </div>
        </div>
    );
    if (doctors.length === 0) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-info">
                <h3>No hay médicos</h3>
                Comienza registrando un nuevo médico.
            </div>
        </div>
    );

    const doctorList = doctors.map((item, index) => (
        <Doctor
            key={item.id}
            {...item}
            index={index}
            doctor={item}
            doFetchRemove={doFetchRemove}
        />
    ));

    return (
        <div className="results-table animate__animated animate__fadeIn">
            <h2 className="table-title">Lista de médicos: <span>Todos</span></h2>
            <div className="table">
                <div className="headers doctor-headers">
                    <h4>Id</h4>
                    <h4>Médico</h4>
                    <h4>DNI</h4>
                    <h4>Celular</h4>
                    <h4>Dirección</h4>
                    <h4>Acciones</h4>
                </div>
                {doctorList}
            </div>
        </div>
    );
}

export default Doctorlist;
