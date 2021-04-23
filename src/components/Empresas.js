import { useEffect, useState } from "react";

function Empresas() {
	const [empresas, setEmpresas] = useState([]);

	const url =
		"https://random-data-api.com/api/company/random_company?size=100";

	const getEmpresas = async () => {
		const resp = await fetch(url);
		const empresas_resp = await resp.json();

		setEmpresas(empresas_resp);
	};

	useEffect(() => {
		getEmpresas();
	}, []);

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
export default Empresas;
