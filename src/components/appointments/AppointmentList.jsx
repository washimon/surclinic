import Appointment from "./Appointment";

const AppointmentList = ({ appointments }) => {

    if (!appointments) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-danger">
                <h3>Error de servidor</h3>
                No se puede obtener las citas.
            </div>
        </div>
    );


    if (appointments.length === 0) return (
        <div className="results-table animate__animated animate__fadeIn">
            <div className="alert alert-info">
                <h3>No hay citas</h3>
                Comienza registrando una nueva cita.
            </div>
        </div>
    );

    const appointmentList = appointments.map((item, index) => (
        <Appointment
            key={item.id}
            {...item}
            index={index}
        />
    ));

    return (
        <div className="results-table animate__animated animate__fadeIn">
        <h2 className="table-title">Lista de Citas: <span>Hoy</span></h2>
        <div className="table">
            <div className="headers doctor-headers">
                <h4>Paciente</h4>
                <h4>Médico</h4>
                <h4>Inicio</h4>
                <h4>Fin</h4>
                <h4>Motivos</h4>
                <h4>Síntomas</h4>
            </div>
            {appointmentList}
        </div>
    </div>
    );
}

export default AppointmentList;
