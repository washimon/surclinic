import { useReducer } from "react";
import { DASHBOARD, SET_CURRENT_PAGE } from "../../types";
import MainContext from "./MainContext";
import mainReducer from "./mainReducer";

const MainState = ({ children }) => {

    const initialState = {
        currentPage: DASHBOARD
    }

    const [state, dispatch] = useReducer(mainReducer, initialState);

    const setCurrentPage = currentPage => {
        dispatch({
            type: SET_CURRENT_PAGE,
            payload: currentPage
        })
    }

    return (
        <MainContext.Provider
            value={{
                currentPage: state.currentPage,
                setCurrentPage
            }}
        >
            {children}
        </MainContext.Provider>
    );
}

export default MainState;