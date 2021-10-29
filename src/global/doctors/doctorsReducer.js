import { SET_DOCTORS } from "../../types";

const doctorsReducer = (state, { type, payload }) => {
    switch (type) {

        case SET_DOCTORS:
            return {
                ...state,
                doctorList: payload
            }
        default:
            return state;
    }
}

export default doctorsReducer;