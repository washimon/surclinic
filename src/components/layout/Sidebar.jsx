import { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../global/main/MainContext";
import { DASHBOARD, DOCTORS, PATIENTS } from "../../types";

const Sidebar = () => {

    const { currentPage, setCurrentPage } = useContext(MainContext);

    const handleClick = page => {
        setCurrentPage(page);
    }

    return (
        <aside>
            <ul>
                <Link onClick={() => handleClick(DASHBOARD)} to="/">
                    <li className={`${currentPage === DASHBOARD && 'current-page'}`}><i className="fas fa-clipboard-list"></i>Dashboard</li>
                </Link>
                <Link onClick={() => handleClick(DOCTORS)} to="/medicos">
                    <li className={`${currentPage === DOCTORS && 'current-page'}`}><i className="fas fa-user-md"></i>Médicos</li>
                </Link>
                <Link onClick={() => handleClick(PATIENTS)} to="/pacientes">
                    <li className={`${currentPage === PATIENTS && 'current-page'}`}><i className="fas fa-users"></i>Pacientes</li>
                </Link>
                {/* <li><i className="fas fa-calendar-check"></i>Citas</li>
                <li><i className="fas fa-pills"></i>Medicina</li> */}
                <li><i className="fas fa-cogs"></i>Ajustes</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
