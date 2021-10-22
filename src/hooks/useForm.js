import { useState } from "react";
import { validatePatientForm, validateSignForm } from "../helpers/validateForm";
import { PATIENT_FORM, SIGN_IN_FORM } from "../types";
import { useFetch } from './useFetch';

export const useForm = (initialForm, httpTypeMethod = 'GET', url = "http://localhost:8080/api/clientes") => {
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const { response, isLoading, resError, doFetch } = useFetch(url, httpTypeMethod);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e, formType) => {
        e.preventDefault();
        switch (formType) {
            case SIGN_IN_FORM:
                setFormErrors(validateSignForm(form));
                if (Object.values(formErrors).length > 0
                    || !form.userName.trim()
                    || !form.password
                    || Object.values(validateSignForm(form)).length > 0) return;
                break;
            case PATIENT_FORM:
                setFormErrors(validatePatientForm(form));
                if (Object.values(formErrors).length > 0
                    || Object.values(validatePatientForm(form)).length > 0) return;
                break;
            default:
                break;
        }

        switch (formType) {
            case SIGN_IN_FORM:
                doFetch();
                setForm({
                    userName: '',
                    password: ''
                });
                break;
            case PATIENT_FORM:
                doFetch({
                    nombre: form.firstName,
                    apellido: form.lastName,
                    sexo: form.gender,
                    dni: form.dni,
                    fecNacimiento: form.dateOfBirth,
                    email: form.email,
                    direccion: form.address,
                    celular: form.cellPhone,
                    activo: true,
                    creadoPor: 10
                });
                setForm({
                    firstName: '',
                    lastName: '',
                    dni: '',
                    gender: '',
                    dateOfBirth: '',
                    address: '',
                    cellPhone: '',
                    email: ''
                });
                break;
            default:
                break;
        }
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