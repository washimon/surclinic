import { useContext, useState } from "react";
import DoctorsContext from "../global/doctors/DoctorsContext";
import PatientsContext from "../global/patients/PatientsContext";
import { validateDoctorForm, validatePatientForm, validateSignForm } from "../helpers/validateForm";
import { POST, PUT } from "../types";
import { useFetch } from './useFetch';

export const useForm = (initialForm, url, httpMethodType = POST) => {

    const { patientToEdit } = useContext(PatientsContext);
    const { doctorToEdit } = useContext(DoctorsContext);
    const [form, setForm] = useState(initialForm);
    const [formErrors, setFormErrors] = useState({});
    const {
        response,
        isLoading,
        resError,
        doFetch
    } = useFetch(url, httpMethodType);
    const {
        response: editRes,
        isLoading: editIsLoading,
        resError: editResError,
        doFetch: doFetchEdit
    } = useFetch(url, PUT);

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

    const handleSubmitPatientForm = (e, edit = false) => {
        e.preventDefault();

        setFormErrors(validatePatientForm(form));
        if (Object.values(validatePatientForm(form)).length > 0) return;
        const patient = {
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
        }
        const patientEdited = {
            ...patientToEdit,
            ...patient,
        }
        edit
            ? doFetchEdit({ ...patientEdited })
            : doFetch({ ...patient });

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

    const handleSubmitDoctorForm = (e, edit = false) => {
        e.preventDefault();

        setFormErrors(validateDoctorForm(form));
        if (Object.values(validateDoctorForm(form)).length > 0) return;
        const doctor = {
            nombre: form.firstName,
            apellido: form.lastName,
            sexo: form.gender,
            dni: form.dni,
            fecNacimiento: form.dateOfBirth,
            email: form.email,
            direccion: form.address,
            celular: form.cellPhone,
            area: { id: form.area },
            especialidad: { id: form.specialty },
        }
        const doctorEdited = {
            ...doctorToEdit,
            ...doctor
        }
        edit
            ? doFetchEdit({ ...doctorEdited })
            : doFetch({ ...doctor });
        setForm({
            firstName: '',
            lastName: '',
            dni: '',
            gender: '',
            dateOfBirth: '',
            address: '',
            cellPhone: '',
            email: '',
            area: '',
            specialty: ''
        });
    }

    return {
        form,
        formErrors,
        response,
        isLoading,
        resError,
        editRes,
        editIsLoading,
        editResError,
        handleChange,
        handleSubmitSignInForm,
        handleSubmitPatientForm,
        handleSubmitDoctorForm,
        setForm
    }
}