import { useReducer } from "react";
import { GET_PATIENTS } from "../../types";
import PatientsContext from "./PatientsContext";
import patientsReducer from "./patientsReducer";

const PatientsState = ({ children }) => {

    const initialState = {
        patientList: null
    }

    const [state, dispatch] = useReducer(patientsReducer, initialState);

    const getPatients = patients => {
        dispatch({
            type: GET_PATIENTS,
            payload: patients
        });
    }

    return (
        <PatientsContext.Provider
            value={{
                patientList: state.patientList,
                getPatients
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
}

export default PatientsState;