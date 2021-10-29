const Doctorlist = ({ doctors }) => {
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
        <div key={item.id} className={`rows doctor-rows ${index % 2 === 0 ? 'rows-1' : 'rows-2'}`}>
            <p>{item.id}</p>
            <p>{`${item.nombre || 'Sin '} ${item.apellido || 'nombres'}`}</p>
            <p>{item.dni}</p>
            <p>{item.celular}</p>
            <p>{item.email}</p>
            <p>{item.direccion}</p>
        </div>
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
                    <h4>Email</h4>
                    <h4>Dirección</h4>
                </div>
                {doctorList}
            </div>
        </div>
    );
}

export default Doctorlist;
