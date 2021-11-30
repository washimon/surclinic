import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import DoctorForm from "../components/doctors/DoctorForm";
import Doctors from "../components/doctors/Doctors";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import PatientForm from "../components/patients/PatientForm";
import Patients from "../components/patients/Patients";

const IntranetRouter = () => {
    return (
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
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    );
}

export default IntranetRouter;
