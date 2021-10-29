import { SET_PATIENTS } from "../../types";

const patientsReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_PATIENTS:
            return {
                ...state,
                patientList: [...payload]
            }
        default:
            return state;
    }
}

export default patientsReducer;