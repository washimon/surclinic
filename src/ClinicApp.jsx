import PatientsState from './global/patients/PatientsState';
import DoctorsState from './global/doctors/DoctorsState';
import MainState from './global/main/MainState';
import AppointmentsState from './global/appointments/AppointmentsState';
import AppRouter from './routers/AppRouter';

function ClinicApp() {
  return (
    <MainState>
      <DoctorsState>
        <PatientsState>
          <AppointmentsState>
            <AppRouter />
          </AppointmentsState>
        </PatientsState>
      </DoctorsState>
    </MainState>
  );
}

export default ClinicApp;
