import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    const [load, setLoad] = useState(false);

    const [error, setError] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoad(true)
            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
                setError(null)
            } catch (e) {
                console.log(e.message);
                setData("")
                setError("Houve algum erro:")
            }
            setLoad(false)

        }
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]
                const response = await fetch(...fetchOptions);
                const dataJson = await response.json();
                setCallFetch(dataJson);
            }
        }
        httpRequest();
    }, [config], method, url);

    return { data, httpConfig, load, error };

}