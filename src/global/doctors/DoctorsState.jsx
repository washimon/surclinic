import { useReducer } from "react";
import doctorsReducer from "./doctorsReducer";
import DoctorsContext from "./DoctorsContext";
import { SET_DOCTORS } from "../../types";

const DoctorsState = ({ children }) => {

    const initialState = {
        doctorList: null
    }
    const [state, dispatch] = useReducer(doctorsReducer, initialState);

    const setDoctors = doctors => {
        dispatch({
            type: SET_DOCTORS,
            payload: doctors
        });
    }

    return (
        <DoctorsContext.Provider
            value={{
                doctorList: state.doctorList,
                setDoctors
            }}
        >
            {children}
        </DoctorsContext.Provider>
    );
}

export default DoctorsState;