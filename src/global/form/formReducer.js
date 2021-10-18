import { GET_FORM } from "../../types";

const formReducer = (state, { type, payload }) => {
    switch (type) {
        case GET_FORM:
            return state;
        default:
            return state;
    }
}

export default formReducer;