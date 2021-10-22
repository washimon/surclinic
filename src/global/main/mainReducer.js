import { SET_CURRENT_PAGE } from "../../types";

const mainReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state;
    }
}

export default mainReducer;