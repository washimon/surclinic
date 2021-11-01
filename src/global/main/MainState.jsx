import { useReducer } from "react";
import { DASHBOARD, SET_CURRENT_PAGE, SET_CURRENT_USER } from "../../types";
import MainContext from "./MainContext";
import mainReducer from "./mainReducer";

const MainState = ({ children }) => {

    const initialState = {
        currentPage: DASHBOARD,
        currentUser: null
    }

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const setCurrentPage = currentPage => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        })
    }

    const setCurrentUser = currentUser => {
        dispatch({
            type: SET_CURRENT_USER,
            payload: currentUser
        });
    }

    return (
        <MainContext.Provider
            value={{
                currentUser: state.currentUser,
                currentPage: state.currentPage,
                setCurrentPage,
                setCurrentUser
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainState;