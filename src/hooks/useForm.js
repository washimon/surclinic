import { useState } from "react";
import { validateDoctorForm, validatePatientForm, validateSignForm } from "../helpers/validateForm";
import { useFetch } from './useFetch';

export const useForm = (initialForm, httpTypeMethod, url) => {
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

    const handleSubmitSignInForm = e => {
        e.preventDefault();
        if (isLoading) return;
        console.log('Sign form button tocado');
        setFormErrors(validateSignForm(form));
        if (Object.values(validateSignForm(form)).length > 0) return;
        doFetch();
    }

    const handleSubmitPatientForm = e => {
        e.preventDefault();

        setFormErrors(validatePatientForm(form));
        if (Object.values(validatePatientForm(form)).length > 0) return;
        doFetch({
            nombre: form.firstName,
            apellido: form.lastName,
            sexo: form.gender,
            dni: form.dni,
            fecNacimiento: form.dateOfBirth,
            direccion: form.address,
            celular: form.cellPhone,
            alergias: form.allergies,
            enfermedades: form.deseases,
            medicamentos: form.medicines
        });
        setForm({
            firstName: '',
            lastName: '',
            dni: '',
            gender: '',
            dateOfBirth: '',
            address: '',
            cellPhone: '',
            allergies: '',
            deseases: '',
            medicines: '',
        });
    }

    const handleSubmitDoctorForm = e => {
        e.preventDefault();

        setFormErrors(validateDoctorForm(form));
        if (Object.values(validateDoctorForm(form)).length > 0) return;
        doFetch({
            nombre: form.firstName,
            apellido: form.lastName,
            sexo: form.gender,
            dni: form.dni,
            fecNacimiento: form.dateOfBirth,
            email: form.email,
            direccion: form.address,
            celular: form.cellPhone,
            // activo: true,
            // creadoPor: 10
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
    }

    return {
        form,
        formErrors,
        resError,
        isLoading,
        response,
        handleChange,
        handleSubmitSignInForm,
        handleSubmitPatientForm,
        handleSubmitDoctorForm,
    }
}