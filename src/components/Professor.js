import react, { useState } from "react";

let pessoa = {
	nome: "Taniro",
	idade: 35,
	cargo: "Professor",
};

const Professor = () => {
	const [prof, setProf] = useState(pessoa);

	const handleClick = () => {
		setProf({
			...prof,
			cargo: "Diretor",
		});
	};

	return (
		<>
			<h1>{prof.nome}</h1>
			<h1>{prof.idade}</h1>
			<h1>{prof.cargo}</h1>
			<button type="button" onClick={handleClick}>
				Altera cargo
			</button>
		</>
	);
};

export default Professor;
