import { useContext } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import DoctorsContext from "../../global/doctors/DoctorsContext";

const Doctor = ({ id, nombre, apellido, dni, celular, direccion, index, doctor, doFetchRemove }) => {

    const { setDoctorToEdit } = useContext(DoctorsContext);
    const history = useHistory();

    const handleEdit = () => {
        setDoctorToEdit(doctor);
        history.push('/medicos/formulario');
    }

    const handleDelete = async () => {
        const { value: accept } = await Swal.fire({
            title: '¿Estás seguro?',
            text: '¿Desea eliminar el doctor?',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true
        });
        if (accept) {
            doFetchRemove({}, `id=${id}`);
        }
    }

    return (
        <div key={id} className={`rows doctor-rows ${index % 2 === 0 ? 'rows-1' : 'rows-2'}`}>
            <p>{id}</p>
            <p>{`${nombre || 'Sin '} ${apellido || 'nombres'}`}</p>
            <p>{dni}</p>
            <p>{celular}</p>
            <p>{direccion}</p>
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

export default Doctor;
