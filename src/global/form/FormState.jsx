import { useReducer } from "react";
import { GET_FORM } from "../../types";
import FormContext from "./FormContext";
import formReducer from "./formReducer";

const FormState = ({ children }) => {

    const initialState = {
        form: null,
        errors: {}
    }

    const [state, dispatch] = useReducer(formReducer, initialState);

    const getForm = initialState => {
        dispatch({
            type: GET_FORM,
            payload: initialState
        });
    }

    return (
        <FormContext.Provider
            value={[
                {
                    form: state.form,
                    errors: state.errors
                },
                getForm
            ]}
        >
            {children}
        </FormContext.Provider>
    );
}

export default FormState;