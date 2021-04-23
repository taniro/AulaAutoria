import { useState, useEffect } from "react";

const TutorialEffect = () => {
	const [value, setValue] = useState(0);
	const [data, setData] = useState(0);
	const [tam, setTam] = useState(window.innerWidth);

	const checkSize = () => {
		setTam(window.innerWidth);
	};

	useEffect(() => {
		console.log("window effect");
		window.addEventListener("resize", checkSize);
		return () => {
			console.log("cleanup");
			window.removeEventListener("resize", checkSize);
		};
	});

	useEffect(() => {
		console.log("effect");
		if (true) {
			console.log("true");
		}
	}, []);

	useEffect(() => {
		console.log("effect2");
	}, [value]);

	useEffect(() => {
		console.log("effect3");
	}, [data]);

	console.log("render");
	return (
		<>
			<h2>{value}</h2>
			<button type="submit" onClick={() => setValue(value + 1)}>
				Value
			</button>
			<h2>{data}</h2>
			<button type="submit" onClick={() => setData(data + 1)}>
				Data
			</button>
			<h1>Tamanho da janela</h1>
			<h2>{tam}</h2>
		</>
	);
};

export default TutorialEffect;
