import PatientsState from './global/patients/PatientsState';
import DoctorsState from './global/doctors/DoctorsState';
import MainState from './global/main/MainState';
import AppRouter from './routers/AppRouter';

function ClinicApp() {
  return (
    <MainState>
      <DoctorsState>
        <PatientsState>
          <AppRouter />
        </PatientsState>
      </DoctorsState>
    </MainState>
  );
}

export default ClinicApp;
