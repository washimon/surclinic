import Pager from "../independent/Pager";
import Search from "../independent/Search";
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import PatientList from "./PatientList";

const Patients = () => {
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
                    <a href="./create-update-product.html"><i className="fas fa-plus"></i>Registra paciente</a>
                </div>
                <PatientList />
            </div>
        </div>
    );
}

export default Patients;
