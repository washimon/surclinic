import { useContext } from "react";
import PatientsContext from "../../global/patients/PatientsContext";

const Pager = () => {

    const { patientList } = useContext(PatientsContext);

    return (
        <div className="pager">
            <div className="results">
                <span>Resultados </span><span>{patientList?.length}</span><span> de </span><span>{patientList?.length}</span>
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
