import { useContext } from "react";
import MainContext from '../../global/main/MainContext';
import { PATIENTS, DOCTORS, APPOINTMENTS } from '../../types';

const Search = () => {

    const { currentPage } = useContext(MainContext);

    return (
        <div className="search-box">
            {/* <input type="text" placeholder="¿Qué desea buscar?" /> */}
            <h2>{currentPage === PATIENTS && 'Pacientes'}</h2>
            <h2>{currentPage === DOCTORS && 'Médicos'}</h2>
            <h2>{currentPage === APPOINTMENTS && 'Citas'}</h2>
            <button><i className="fas fa-search"></i></button>
        </div>
    );
}

export default Search;
