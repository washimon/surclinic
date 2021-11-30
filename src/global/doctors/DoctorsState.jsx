import { useReducer } from "react";
import doctorsReducer from "./doctorsReducer";
import DoctorsContext from "./DoctorsContext";
import { SET_DOCTORS, SET_DOCTOR_TO_EDIT } from "../../types";

const DoctorsState = ({ children }) => {

    const initialState = {
        doctorList: null,
        doctorToEdit: null
    }
    const [state, dispatch] = useReducer(doctorsReducer, initialState);

    const setDoctors = doctors => {
        dispatch({
            type: SET_DOCTORS,
            payload: doctors
        });
    }

    const setDoctorToEdit = doctor => {
        dispatch({
            type: SET_DOCTOR_TO_EDIT,
            payload: doctor
        });
    }

    return (
        <DoctorsContext.Provider
            value={{
                doctorList: state.doctorList,
                doctorToEdit: state.doctorToEdit,
                setDoctors,
                setDoctorToEdit
            }}
        >
            {children}
        </DoctorsContext.Provider>
    );
}

export default DoctorsState;