import { useContext } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../../assets/img/admin.jpg';
import MainContext from '../../global/main/MainContext';

const Navbar = () => {

    const { currentUser } = useContext(MainContext);

    return (
        <nav>
            <span className="clinic-branch">
                <i className="fas fa-clinic-medical"></i> Sistema Web RCM
            </span>
            <div className="user-dropdown">
                <img src={userImg} alt="Imagen de usuario" />
                <div className="user">
                    <strong>{currentUser?.userName}</strong>
                    <span>Admin</span>
                </div>
                <i className="fas fa-sort-down"></i>
                <ul className="dropdown-content">
                    <Link to="/iniciar-sesion">Cerrar Sesión</Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
