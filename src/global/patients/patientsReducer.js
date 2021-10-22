import { GET_PATIENTS } from "../../types";

const patientsReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_PATIENTS:
            return {
                ...state,
                patientList: [...payload]
            }
        default:
            return state;
    }
}

export default patientsReducer;