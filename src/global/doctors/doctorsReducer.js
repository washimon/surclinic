import { SET_DOCTORS, SET_DOCTOR_TO_EDIT } from "../../types";

const doctorsReducer = (state, { type, payload }) => {

    switch (type) {
        case SET_DOCTORS:
            return {
                ...state,
                doctorList: payload
            }
        case SET_DOCTOR_TO_EDIT:
            return {
                ...state,
                doctorToEdit: payload
            }
        default:
            return state;
    }
}

export default doctorsReducer;