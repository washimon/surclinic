import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import Patients from './components/patients/Patients';

function ClinicApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/inicia-sesion" component={SignIn} />
        <Route exact path="/pacientes" component={Patients} />
      </Switch>
    </Router>
  );
}

export default ClinicApp;
