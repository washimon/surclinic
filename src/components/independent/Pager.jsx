import { Fragment } from "react";
import { useContext } from "react";
import PatientsContext from "../../global/patients/PatientsContext";
import DoctorsContext from "../../global/doctors/DoctorsContext";
import AppointmentsContext from "../../global/appointments/AppointmentsContext";

const Pager = () => {

    const { patientList } = useContext(PatientsContext);
    const { doctorList } = useContext(DoctorsContext);
    const { appointmentList } = useContext(AppointmentsContext);

    return (
        <div className="pager">
            <div className="results">
                {(!patientList && !doctorList && !appointmentList) &&
                    <span>No hay resultados</span>
                }
                {patientList &&
                    <Fragment>
                        <span>Resultados </span>
                        <span>{patientList?.length}</span>
                        <span> de </span>
                        <span>{patientList?.length}</span>
                    </Fragment>
                }
                {doctorList &&
                    <Fragment>
                        <span>Resultados </span>
                        <span>{doctorList?.length}</span>
                        <span> de </span>
                        <span>{doctorList?.length}</span>
                    </Fragment>
                }
                {appointmentList &&
                    <Fragment>
                        <span>Resultados </span>
                        <span>{appointmentList?.length}</span>
                        <span> de </span>
                        <span>{appointmentList?.length}</span>
                    </Fragment>
                }
            </div>
            {/* <div className="pages">
                <a href="/asd"><i className="fas fa-chevron-left"></i></a>
                <a className="current-page-of-search" href="/das">1</a>
                <a href="/das">2</a>
                <a href="/das">13</a>
                <a href="/das"><i className="fas fa-chevron-right"></i></a>
            </div> */}
        </div>
    );
}

export default Pager;
