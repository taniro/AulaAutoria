import { useState } from "react";
import ExemploRetornos from "./ExemploRetornos";
import Restaurante from "./Restaurante";

function Condicional() {
	const [text, setText] = useState("teste");
	const [nome, setNome] = useState("");

	// "" -> falso
	// "asd" -> verdadeiro

	const var1 = text || "exemplo1";
	const var2 = text && "exemplo2";

	return (
		<div>
			<h2>{var1}</h2>
			<h2>{var2}</h2>
			{nome && <ExemploRetornos />}
			{nome ? <h2>Hello {nome}</h2> : <h2>Cadastre-se</h2>}
		</div>
	);
}

export default Condicional;
