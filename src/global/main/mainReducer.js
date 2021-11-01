import { SET_CURRENT_PAGE, SET_CURRENT_USER } from "../../types";

const mainReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state;
    }
}

export default mainReducer;