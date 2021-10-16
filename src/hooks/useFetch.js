import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resError, setResError] = useState(null);
    const [options, setOptions] = useState({});

    const doFetch = (options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }

    useEffect(() => {
        if (!isLoading) return;
        const fetchData = async () => {
            console.log('Ejecutando fetch');
            try {
                const res = await axios(url, options);
                setResponse(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
                // setResError(err.response.data);
                setResError("Error: no se obtuvo respuesta del servidor.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [isLoading]);

    return [
        { response, isLoading, resError },
        doFetch
    ];
}