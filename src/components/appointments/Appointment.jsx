const Appointment = ({ id, inicioCita, finCita, motivo, observaciones, precio, sintomas, paciente, medico, index }) => {
    return (
        <div className={`rows doctor-rows ${index % 2 === 0 ? 'rows-1' : 'rows-2'}`}>
            <p>{paciente.nombre} {paciente.apellido}</p>
            <p>{medico.nombre} {medico.apellido}</p>
            <p>
                {/* <span>{new Date(inicioCita).getHours()}:{new Date(inicioCita).getMinutes()}</span> */}
                <span style={{marginLeft: '1rem'}}> {new Date(inicioCita).toLocaleDateString()}</span>
            </p>
            <p>
                {/* <span>{new Date(inicioCita).getHours()}:{new Date(inicioCita).getMinutes()}</span> */}
                <span style={{marginLeft: '1rem'}}> {new Date(finCita).toLocaleDateString()}</span>
            </p>
            <p>{motivo}</p>
            <p>{sintomas}</p>
        </div>
    );
}

export default Appointment;
