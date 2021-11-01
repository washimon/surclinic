import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import PatientsContext from "../../global/patients/PatientsContext";
import Pager from "../independent/Pager";
import Search from "../independent/Search";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import { useFetch } from "../../hooks/useFetch";
import Patientlist from "./PatientList";
import MainContext from "../../global/main/MainContext";
import { PATIENTS } from "../../types";
import Loading from "../independent/Loading";

const Patients = () => {

    const { setCurrentPage } = useContext(MainContext);
    const { patientList, setPatients } = useContext(PatientsContext);
    const { response, isLoading, doFetch } = useFetch("http://localhost:8090/paciente", "GET");

    useEffect(() => {
        doFetch();
        setCurrentPage(PATIENTS);
        return () => {
            setPatients(null);
        };
    }, []);

    useEffect(() => {
        if (!response) return;
        setPatients(response);
    }, [response]);

    return (
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className="content">
                <div className="search-box-and-pager">
                    <Search />
                    <Pager />
                </div>
                <div className="registration-link">
                    <Link to="/pacientes/registrar"><i className="fas fa-plus"></i>Registra paciente</Link>
                </div>
                {isLoading
                    ? <Loading />
                    : <Patientlist
                        patients={patientList}
                    />
                }
            </div>
        </div>
    );
}

export default Patients;
