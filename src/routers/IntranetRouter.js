import { Switch, Route, Redirect } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import DoctorForm from '../components/doctors/DoctorForm';
import Doctors from '../components/doctors/Doctors';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import PatientForm from '../components/patients/PatientForm';
import Patients from '../components/patients/Patients';
import Appointments from '../components/appointments/Appointments';
import MainContext from '../global/main/MainContext';
import AppointmentForm from '../components/appointments/AppointmentForm';

const IntranetRouter = () => {

    const { currentUser } = useContext(MainContext);

    /* if (!currentUser) {
        return <Redirect to="/iniciar-sesion" />
    } */

    return (
        <Fragment>
            <div className="main">
                <Navbar />
                <Sidebar />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/pacientes" component={Patients} />
                        <Route exact path="/pacientes/formulario" component={PatientForm} />
                        <Route exact path="/medicos" component={Doctors} />
                        <Route exact path="/medicos/formulario" component={DoctorForm} />
                        <Route exact path="/citas" component={Appointments} />
                        <Route exact path="/citas/formulario" component={AppointmentForm} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
            {/* <Murphybot /> */}
        </Fragment>
    );
}

export default IntranetRouter;
