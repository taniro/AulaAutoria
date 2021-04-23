import { useState, useEffect } from "react";

function Restaurante() {
	const [restaurantes, setRestaurantes] = useState([]);

	const url =
		"http://random-data-api.com/api/restaurant/random_restaurant?size=200";

	const getRestaurantes = async () => {
		const resp = await fetch(url);
		const restaurantes_resp = await resp.json();

		setRestaurantes(restaurantes_resp);
	};

	useEffect(() => {
		getRestaurantes();
		console.log("effect");
	}, []);

	console.log("render");

	return (
		<>
			{restaurantes.map((r) => {
				const { id, name, type, description } = r;
				return (
					<div key={id} className="espaco">
						<h1> {name}</h1>
						<h2>{type}</h2>
						<p>{description}</p>
					</div>
				);
			})}
		</>
	);
}

export default Restaurante;
