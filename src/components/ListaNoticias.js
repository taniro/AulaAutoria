import Noticia from "./Noticia";
import { noticias } from "./dados";

function ListaNoticias() {
	return (
		<main>
			{noticias.map((n) => {
				return <Noticia key={n.id} {...n} />;
			})}
		</main>
	);
}
export default ListaNoticias;
