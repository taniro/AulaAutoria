import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Erro from "./Erro";
import ExemploRetornos from "./ExemploRetornos";
import Formulario from "./Formulario";
import Navbar from "./Navbar";

import SayHello from "./SayHello";

function Principal() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<SayHello />
				</Route>
				<Route path="/formulario">
					<Formulario />
				</Route>
				<Route path="/empresas">
					<ExemploRetornos />
				</Route>
				<Route path="*">
					<Erro />
				</Route>
			</Switch>
		</Router>
	);
}
export default Principal;
