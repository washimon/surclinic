import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

function ClinicApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/inicia-sesion" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default ClinicApp;
