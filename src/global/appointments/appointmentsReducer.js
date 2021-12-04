import { SET_APPOINTMENTS } from "../../types";

const appointmentsReducer = (state, { type, payload }) => {

    switch (type) {

        case SET_APPOINTMENTS:
            return {
                ...state,
                appointmentList: payload
            }
        default:
            return state;
    }
}

export default appointmentsReducer;