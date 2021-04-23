import { useEffect, useState } from "react";

const Mensagem = () => {
	const [size, setSize] = useState(window.innerWidth);

	const handleResize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			<h2>Window: {size}</h2>
		</div>
	);
};

function CondicionaisEffects() {
	const [status, setStatus] = useState(false);

	const handleClick = () => {
		setStatus(!status);
	};

	return (
		<>
			<h2>Hello</h2>
			<button onClick={handleClick}>Ativar</button>
			{status && <Mensagem />}
		</>
	);
}

export default CondicionaisEffects;
