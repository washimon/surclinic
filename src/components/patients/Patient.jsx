import { useContext } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import PatientsContext from "../../global/patients/PatientsContext";

const Patient = ({ id, nombre, apellido, dni, celular, alergias, enfermedades, medicamentos, index, patient, doFetchRemove }) => {

    const history = useHistory();
    const { setPatientToEdit } = useContext(PatientsContext);

    const handleEdit = () => {
        setPatientToEdit(patient);
        history.push('/pacientes/formulario');
    }

    const handleDelete = async () => {
        const { value: accept } = await Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Desea eliminar el paciente?',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true
        });
        if (accept) {
            doFetchRemove({}, `id=${id}`);
        }
    }

    return (
        <div className={`rows patient-rows ${index % 2 === 0 ? 'rows-1' : 'rows-2'}`}>
            <p>{id}</p>
            <p>{`${nombre || 'Sin '} ${apellido || 'nombres'}`}</p>
            <p>{dni}</p>
            <p>{celular}</p>
            <p>{alergias || '-'}</p>
            <p>{enfermedades || '-'}</p>
            <p>{medicamentos || '-'}</p>
            <p>
                <i
                    onClick={handleEdit}
                    className="far fa-edit"
                ></i>
                <i
                    onClick={handleDelete}
                    className="far fa-trash-alt"
                ></i>
            </p>
        </div>
    );
}

export default Patient;
