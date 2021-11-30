import { useState, useEffect } from 'react';
import axios from 'axios';
import { DELETE, GET, GET_WITH_PARAMS, POST, PUT } from '../types';

export const useFetch = (url, httpMethodType = GET) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [resError, setResError] = useState(null);
    const [options, setOptions] = useState({});
    const [params, setParams] = useState(null);

    const doFetch = (options = {}, params = null) => {
        setOptions(options);
        setParams(params);
        setIsLoading(true);
    }

    useEffect(() => {
        if (!isLoading) return;

        const fetchData = async () => {
            try {
                let res;
                switch (httpMethodType) {
                    case GET:
                        res = await axios.get(url);
                        break;
                    case POST:
                        res = await axios.post(url, options);
                        break;
                    case PUT:
                        res = await axios.put(url, options);
                        break;
                    case DELETE:
                        res = await axios.delete(`${url}?${params}`);
                        break;
                    case GET_WITH_PARAMS:
                        res = await axios.get(`${url}?${params}`);
                        break;
                    default:
                        break;
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
    }, [isLoading, options, url, httpMethodType]);

    return {
        response,
        isLoading,
        resError,
        doFetch
    };
}