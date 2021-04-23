import { useState } from "react";

function Contador() {
	const [contador, setContador] = useState(0);

	const handleIncrementa = () => {
		setContador(contador + 1);
	};

	const handleDecrementa = () => {
		setContador(contador - 1);
	};

	const handleIncrementaAsync = () => {
		setTimeout(() => {
			setContador((prevState) => {
				return prevState + 1;
			});
		}, 2000);
	};

	return (
		<>
			<h2>{contador}</h2>
			<button type="submit" onClick={handleIncrementa}>
				Incrementar
			</button>
			<button type="submit" onClick={handleDecrementa}>
				Decrementar
			</button>
			<button type="submit" onClick={handleIncrementaAsync}>
				Incrementar Async
			</button>
		</>
	);
}

export default Contador;
