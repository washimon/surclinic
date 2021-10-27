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
            // console.log(url);
            // console.log(httpTypeMethod);
            // console.log(options);
            try {
                let res;
                if (httpTypeMethod === 'GET') {
                    res = await axios.get(url);
                } else {
                    res = await axios.post(url, options);
                }
                setResponse(res.data);
                console.log(res.data);
            } catch (err) {
                setResError("Error: no se obtuvo respuesta del servidor.");
                console.log(err);
            } finally {
                setIsLoading(false);
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