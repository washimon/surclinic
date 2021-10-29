import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Patientform from './components/patients/PatientForm';
import Patients from './components/patients/Patients';
import Doctors from './components/doctors/Doctors';
import PatientsState from './global/patients/PatientsState';
import DoctorsState from './global/doctors/DoctorsState';
import MainState from './global/main/MainState';
import DoctorForm from './components/doctors/DoctorForm';

function ClinicApp() {
  return (
    <MainState>
      <DoctorsState>
        <PatientsState>
          <Router>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/iniciar-sesion" component={SignIn} />
              <Route exact path="/pacientes" component={Patients} />
              <Route exact path="/pacientes/registrar" component={Patientform} />
              <Route exact path="/medicos" component={Doctors} />
              <Route exact path="/medicos/registrar" component={DoctorForm} />
            </Switch>
          </Router>
        </PatientsState>
      </DoctorsState>
    </MainState>
  );
}

export default ClinicApp;
