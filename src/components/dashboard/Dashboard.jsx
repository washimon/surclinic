import { useContext, Fragment } from 'react';
import MainContext from '../../global/main/MainContext';

const Dashboard = () => {

    const { currentUser } = useContext(MainContext);

    return (
        <Fragment>
            <h3>Bienvenido {currentUser?.userName}</h3>
        </Fragment>
    );
}

export default Dashboard;
