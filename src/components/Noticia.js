function Noticia(props) {
	/*
	const batata = (mensagem) => {
		alert(mensagem);
	};
	*/

	function arroz(e) {
		console.log(e);
		console.log(e.target);
		//alert("arroz");
	}

	//console.log(typeof arroz);
	//console.log(typeof batata);

	const { titulo, imagem, resumo } = props;
	return (
		<>
			<h1 className="espaco">{titulo}</h1>
			<img src={imagem} />
			<h2>{resumo}</h2>
			<button type="button" onClick={(e) => arroz(e)}>
				Mensagem
			</button>
		</>
	);
}

export default Noticia;
