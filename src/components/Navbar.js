import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/formulario">Formulario</Link>
				</li>
				<li>
					<Link to="/empresas">Empresas</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
