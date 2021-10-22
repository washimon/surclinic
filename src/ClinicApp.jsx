import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Patientform from './components/patients/PatientForm';
import Patients from './components/patients/Patients';
import PatientsState from './global/patients/PatientsState';
import MainState from './global/main/MainState';

function ClinicApp() {
  return (
    <MainState>
      <PatientsState>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/iniciar-sesion" component={SignIn} />
            <Route exact path="/pacientes" component={Patients} />
            <Route exact path="/pacientes/registrar" component={Patientform} />
          </Switch>
        </Router>
      </PatientsState>
    </MainState>
  );
}

export default ClinicApp;
