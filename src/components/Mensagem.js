import React, { useState } from "react";

const dados = [
	{ id: 1, nome: "aula" },
	{ id: 2, nome: "escola" },
	{ id: 3, nome: "tads" },
	{ id: 4, nome: "react" },
];

let pessoa = {
	nome: "Taniro",
	idade: 35,
	cargo: "Professor",
};

const Mensagem = () => {
	const [tarefas, setTarefas] = useState(dados);

	const handleClick = (id) => {
		let t = tarefas.filter((elemento) => elemento.id !== id);
		setTarefas(t);
	};

	return (
		<>
			{tarefas.map((t) => {
				const { id, nome } = t;
				return (
					<div key={id}>
						<h1>{nome}</h1>
						<button type="button" onClick={() => handleClick(id)}>
							remover
						</button>
					</div>
				);
			})}
			<button type="button" onClick={() => setTarefas([])}>
				Limpar tudo
			</button>
		</>
	);
};

export default Mensagem;
