import { useContext } from "react";
import { useHistory } from "react-router";
import PatientsContext from "../../global/patients/PatientsContext";

const Patient = ({ id, nombre, apellido, dni, celular, alergias, enfermedades, medicamentos, index, patient }) => {

    const history = useHistory();
    const { setPatientToEdit } = useContext(PatientsContext);

    const handleEdit = () => {
        setPatientToEdit(patient);
        history.push('/pacientes/formulario');
    }

    const handleDelete = () => {
        
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
                <i className="far fa-trash-alt"></i>
            </p>
        </div>
    );
}

export default Patient;
