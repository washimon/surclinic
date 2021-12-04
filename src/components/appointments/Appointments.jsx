import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AppointmentsContext from "../../global/appointments/AppointmentsContext";
import MainContext from "../../global/main/MainContext";
import { useFetch } from "../../hooks/useFetch";
import { APPOINTMENTS } from "../../types";
import Loading from "../independent/Loading";
import Pager from "../independent/Pager";
import Search from "../independent/Search";
import AppointmentList from "./AppointmentList";

const Appointments = () => {

    const { setCurrentPage } = useContext(MainContext);
    const { appointmentList, setAppointments } = useContext(AppointmentsContext);
    const { response, isLoading, doFetch } = useFetch('http://localhost:8090/cita');

    useEffect(() => {
        doFetch();
        setCurrentPage(APPOINTMENTS);
        return () => {
            setAppointments(null);
        };
    }, []);

    useEffect(() => {
        if (!response) return;

        setAppointments(response.reverse());
        console.log({response});
    }, [response]);

    return (
        <Fragment>
            <div className="search-box-and-pager">
                <Search />
                <Pager />
            </div>
            <div className="registration-link">
                <Link to="/citas/formulario"><i className="fas fa-plus"></i>Registra nueva cita</Link>
            </div>
            {isLoading
                ? <Loading />
                : <AppointmentList
                    appointments={appointmentList}
                />
            }
        </Fragment>
    );
}

export default Appointments;
