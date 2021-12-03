import { useContext, Fragment } from 'react';
import { Redirect } from 'react-router';
import MainContext from '../../global/main/MainContext';

const Dashboard = () => {

    const { currentUser } = useContext(MainContext);

    // if (!currentUser) {
    //     return <Redirect to="/iniciar-sesion" />
    // }

    return (
        <Fragment>
            <h3>Bienvenido {currentUser?.userName}</h3>
        </Fragment>
    );
}

export default Dashboard;
