import { useState } from "react";

function Exemplo() {
	const [alerta, setAlerta] = useState("EAJ");

	const batata = useState("valor_batata");

	console.log(useState("TESTE"));
	console.log(batata[0]);
	console.log(batata[1]);

	const array = [
		"valor",
		() => {
			alert("teste");
		},
	];

	console.log("dados exemplo" + array[0]);
	console.log("dados exemplo" + array[1]);

	const [variavel, setVariavel] = useState(15);

	const [carro, setCarro] = useState({ nome: "corsa" });

	let mensagem = "texto";
	//console.log(mensagem);
	//console.log(alerta);

	const handleClick = () => {
		//console.log(mensagem);
		//console.log(alerta);
		mensagem = "novo texto";
		setAlerta("NOVA_EAJ");
		//console.log(mensagem);
		//console.log(alerta);
	};

	return (
		<>
			<h2>{mensagem}</h2>
			<h2>{alerta}</h2>
			<button type="submit" onClick={handleClick}>
				Me clique
			</button>
		</>
	);
}

export default Exemplo;
