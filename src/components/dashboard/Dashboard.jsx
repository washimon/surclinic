import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

const Dashboard = () => {
    return (
        <div className="main">
            <Navbar />
            <Sidebar />
            <div className="content">
                <h1>Horario de citas</h1>
            </div>
        </div>
    );
}

export default Dashboard;
