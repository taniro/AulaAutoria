import { useState, useEffect } from "react";

function ExemploRetornos() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [empresas, setEmpresas] = useState([]);

	const url = "http://random-data-api.com/api/company/random_company?size=10";

	useEffect(() => {
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				} else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
				}
			})
			.then((resp_empresa) => {
				setEmpresas(resp_empresa);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
				setIsError(true);
			});
	}, []);

	if (isLoading) {
		return <h1>Carregando...</h1>;
	}

	if (isError) {
		return <h1>Erro...</h1>;
	}

	return (
		<>
			{empresas.map((empresa) => {
				const {
					id,
					business_name,
					industry,
					catch_phrase,
					logo,
				} = empresa;
				return (
					<div key={id}>
						<h1>{business_name}</h1>
						<h2>{industry}</h2>
						<p>{catch_phrase}</p>
						<img src={logo} width={200} />
					</div>
				);
			})}
		</>
	);
}
export default ExemploRetornos;
