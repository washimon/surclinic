import { useState } from "react";
import { useFetch } from './useFetch';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [{ response, isLoading, resError }, doFetch] = useFetch('');

    const handleChange = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const handleBlur = e => {
        handleChange(e);

        setErrors(validateForm(form));
    }
    
    const doValidate = () => {
        setErrors(validateForm(form));
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (Object.values(errors).length > 0) return;
        console.log(Object.values(errors).length);
        console.log(Object.values(errors));
        console.log('Ignorando validacion');
        doFetch();
    }

    return {
        form,
        errors,
        resError,
        isLoading,
        response,
        handleChange,
        handleBlur,
        doValidate,
        handleSubmit
    }
}