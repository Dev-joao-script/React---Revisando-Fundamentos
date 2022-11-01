
import { useState, useEffect } from "react";

export const useFetch = (url) => {
	//post
	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFetch, setCallFetch] = useState(false)
	//Get
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [load, setload] = useState(false);


	const httpConfig = (data, method) => {
		if (method === "POST") {
			setConfig({
				method,
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
			setMethod(method)
		}
	}

	useEffect(() => {
		setload(true);
		const fetchData = async () => {
			console.log("GET");
			try {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
				setError(null)
			}
			catch (error) {
				setData("");
				setError(error.message)
			}
		}
		fetchData();
		setload(false);

	}, [url, callFetch]);

	useEffect(() => {
		setload(true);
		const httpRequest = async () => {
			if (method === "POST") {
				try {
					let fetchOptions = [url, config];
					const response = await fetch(...fetchOptions);
					const json = await response.json()
					setCallFetch(json);
				}
				catch (error) {
					setError("Erro ao cadastrar novo usuario")
				}
			}
			setload(false)
		}
		httpRequest()
	}, [config, method, url]);

	return { data, error, load, httpConfig }

}

