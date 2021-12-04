import { useReducer } from 'react';
import AppointmentsContext from './AppointmentsContext';
import appointmentsReducer from './appointmentsReducer';
import { SET_APPOINTMENTS } from '../../types';

const AppointmentsState = ({ children }) => {

    const initialState = {
        appointmentList: null
    }
    const [state, dispatch] = useReducer(appointmentsReducer, initialState);

    const setAppointments = appointments => {
        dispatch({
            type: SET_APPOINTMENTS,
            payload: appointments
        });
    }

    return (
        <AppointmentsContext.Provider
            value={{
                appointmentList: state.appointmentList,
                setAppointments
            }}
        >
            {children}
        </AppointmentsContext.Provider>
    );
}

export default AppointmentsState;