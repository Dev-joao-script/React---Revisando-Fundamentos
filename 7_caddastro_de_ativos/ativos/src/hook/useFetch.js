import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

    const [method, setMethod] = useState(null);
    const [config, setConfig] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const httpConfig = (registres, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registres)
            })
            setMethod(method);
        }
    }

    useEffect(() => {
        const httpGet = async () => {
        setLoad(true);
        try {
	                const response = await fetch(url);
	                const json = await response.json();
	                setData(json);
	                setError(null);
	            } catch (e) {
	                setError("Erro ao executar 'GET'")
	                setData(null)
	            }
        setLoad(false)
    }
        httpGet();

    }, [url, callFetch]);


    useEffect(() => {
        const httpRequest = async () => {
        setLoad(true);
        if (method === "POST") {
                try {
                    const fetchOptions = [url, config];
                    const response = await fetch(...fetchOptions);
                    const dataJson = response.json();
                    setCallFetch(dataJson);
	                setError(null);
                } catch (e) {
                setData(null);
                setError("Erro ao inserir Datos 'POST'")
            }
        }
    setLoad(false);
}
    httpRequest();
},[config], method, url);


    return { data, load, error, httpConfig }
}

