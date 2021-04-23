import { useState } from "react";

function Formulario() {
	/*
	const [professor, setProfessor] = useState("");
	const [turma, setTurma] = useState("");
	const [email, setEmail] = useState("");*/

	const [singleAula, setSingleAula] = useState({
		professor: "",
		turma: "",
		email: "",
	});

	const [aulas, setAulas] = useState([]);
	const [erroProfessor, setErroProfessor] = useState(false);

	const handleChange = (e) => {
		setSingleAula({ ...singleAula, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (singleAula.professor.length < 5) {
			setErroProfessor(true);
			return;
		}

		if (singleAula.professor && singleAula.turma && singleAula.email) {
			//const aula = { professor, turma, email };
			setAulas((prevState) => {
				return [...prevState, singleAula];
			});
			/*
			setProfessor("");
			setTurma("");
			setEmail("");*/
			setErroProfessor(false);
		}
		//console.log(professor, turma, email);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="professor">Professor:</label>
					<input
						type="text"
						id="professor"
						name="professor"
						value={singleAula.professor}
						onChange={handleChange}
					/>
					{erroProfessor && <h2>Erro nome</h2>}
				</div>
				<div>
					<label htmlFor="turma">Turma:</label>
					<input
						type="text"
						id="turma"
						name="turma"
						value={singleAula.turma}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						name="email"
						value={singleAula.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<button type="submit">Cadastra</button>
				</div>
			</form>
			{aulas.map((aula, index) => {
				const { professor, turma, email } = aula;
				return (
					<div key={index}>
						<h2>{professor}</h2>
						<p>{turma}</p>
						<p>{email}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Formulario;
