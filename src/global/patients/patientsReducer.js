import { SET_PATIENTS, SET_PATIENT_TO_EDIT } from "../../types";

const patientsReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PATIENTS:
            return {
                ...state,
                patientList: payload
            }
        case SET_PATIENT_TO_EDIT:
            return {
                ...state,
                patientToEdit: payload
            }
        default:
            return state;
    }
}

export default patientsReducer;