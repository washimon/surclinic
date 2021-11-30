import { useReducer } from "react";
import { SET_PATIENTS, SET_PATIENT_TO_EDIT } from "../../types";
import PatientsContext from "./PatientsContext";
import patientsReducer from "./patientsReducer";

const PatientsState = ({ children }) => {

    const initialState = {
        patientList: null,
        patientToEdit: null
    }

    const [state, dispatch] = useReducer(patientsReducer, initialState);

    const setPatients = patients => {
        dispatch({
            type: SET_PATIENTS,
            payload: patients
        });
    }

    const setPatientToEdit = patient => {
        console.log({patientToEdit: patient})
        dispatch({
            type: SET_PATIENT_TO_EDIT,
            payload: patient
        });
    }

    return (
        <PatientsContext.Provider
            value={{
                patientList: state.patientList,
                patientToEdit: state.patientToEdit,
                setPatients,
                setPatientToEdit
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
}

export default PatientsState;