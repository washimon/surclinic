import { useContext } from 'react';
import MainContext from '../../global/main/MainContext';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

const Dashboard = () => {

    const { currentUser } = useContext(MainContext);

    return (
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className="content">
                <h3>Bienvenido {currentUser?.userName}</h3>
                <h1>Horario de citas</h1>
            </div>
        </div>
    );
}

export default Dashboard;
