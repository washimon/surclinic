import { useReducer } from "react";
import { SET_PATIENTS } from "../../types";
import PatientsContext from "./PatientsContext";
import patientsReducer from "./patientsReducer";

const PatientsState = ({ children }) => {

    const initialState = {
        patientList: null
    }

    const [state, dispatch] = useReducer(patientsReducer, initialState);

    const setPatients = patients => {
        dispatch({
            type: SET_PATIENTS,
            payload: patients
        });
    }

    return (
        <PatientsContext.Provider
            value={{
                patientList: state.patientList,
                setPatients
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
}

export default PatientsState;