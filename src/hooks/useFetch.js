import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, httpTypeMethod) => {
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
                let res;
                if (httpTypeMethod === 'GET') {
                    res = await axios.get(url);
                } else {
                    res = await axios.post(url, options);
                }
                setTimeout(() => {
                    setResponse(res.data);
                    setIsLoading(false);
                    console.log(res.data);
                }, 200);
            } catch (err) {
                setTimeout(() => {
                    setResError("Error: no se obtuvo respuesta del servidor.");
                    setIsLoading(false);
                    console.log(err);
                }, 200);
            }
        }

        fetchData();
    }, [isLoading, options, url, httpTypeMethod]);

    return {
        response,
        isLoading,
        resError,
        doFetch
    };
}