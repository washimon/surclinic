import { useState } from "react";
import { validateForm } from "../helpers/validateForm";
import { useFetch } from './useFetch';

export const useForm = initialForm => {
    const url = 'http://localhost:8080/api/clientes';

    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const { response, isLoading, resError, doFetch} = useFetch(url);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setFormErrors(validateForm(form));
        if (
            Object.values(formErrors).length > 0 
            || !form.userName.trim() 
            || !form.password
            || Object.values(validateForm(form)).length > 0) return;
        doFetch();
        setForm({
            userName: '',
            password: ''
        });
    }

    return {
        form,
        formErrors,
        resError,
        isLoading,
        response,
        handleChange,
        handleSubmit,
    }
}