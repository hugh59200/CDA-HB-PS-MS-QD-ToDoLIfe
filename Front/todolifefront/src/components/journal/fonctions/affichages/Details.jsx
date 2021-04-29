import { mood } from "../humeur/mood";

export function jourDetails(jourData) {
	return <div className="jourdetails">
		<div className="enteteJour">
			<div className="jourData">{mood(jourData.humeur)}</div>
			<div className="titreJour">{jourData.titre}</div>
		</div>
		<div className="textJour">
			<p className="jourDataTexte">{jourData.texte}</p>
		</div>
	</div>;
}