import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../global/main/MainContext";
import DoctorsContext from "../../global/doctors/DoctorsContext";
import { useFetch } from "../../hooks/useFetch";
import { DOCTORS } from "../../types";
import Pager from "../independent/Pager";
import Search from "../independent/Search";
import Loading from "../independent/Loading";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Doctorlist from "./DoctorList";

const Doctors = () => {

    const { setCurrentPage } = useContext(MainContext);
    const { doctorList, setDoctors } = useContext(DoctorsContext);
    const { response, isLoading, doFetch } = useFetch("http://localhost:8090/medico", "GET");

    useEffect(() => {
        doFetch();
        setCurrentPage(DOCTORS);
        return () => {
            setDoctors(null);
        };
    }, []);

    useEffect(() => {
        if (!response) return;
        setDoctors(response);
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
                    <Link to="/medicos/registrar"><i className="fas fa-plus"></i>Registra médico</Link>
                </div>
                {isLoading
                    ? <Loading />
                    : <Doctorlist
                        doctors={doctorList}
                    />
                }
            </div>
        </div>
    );
}

export default Doctors;
