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
            try {
                const res = await axios.get(url);
                setResponse(res.data);
            } catch (err) {
                setResError("Error: no se obtuvo respuesta del servidor.");
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [isLoading, options, url]);

    return {
        response,
        isLoading,
        resError,
        doFetch
    };
}