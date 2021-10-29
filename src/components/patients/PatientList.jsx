const Patientlist = ({ patients }) => {

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
        <div key={item.id} className={`rows patient-rows ${index % 2 === 0 ? 'rows-1' : 'rows-2'}`}>
            <p>{item.id}</p>
            <p>{`${item.nombre || 'Sin '} ${item.apellido || 'nombres'}`}</p>
            <p>{item.alergias || '0 alergias'}</p>
            <p>{item.enfermedades || '0 enfermedades'}</p>
            <p>{item.medicamentos || '0 medicamentos'}</p>
        </div>
    ));

    return (
        <div className="results-table animate__animated animate__fadeIn">
            <h2 className="table-title">Lista de pacientes: <span>Todos</span></h2>
            <div className="table">
                <div className="headers patient-headers">
                    <h4>Id</h4>
                    <h4>Paciente</h4>
                    <h4>Alergias</h4>
                    <h4>Enfermedades</h4>
                    <h4>Medicamentos</h4>
                </div>
                {patientsList}
            </div>
        </div>
    );
}

export default Patientlist;
