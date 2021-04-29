import React from 'react';
import { bouttonRevenir } from './bouttons';
import { mood } from './mood';

export function ajouterJour(setshowList, setshowJourDetail) {
	return (
		<>
			<div className="jourdetails">ok</div>
			{bouttonRevenir(setshowList, setshowJourDetail)}
		</>
	);
}

export function detailJour(jourData, setshowList, setshowJourDetail) {
	return (
		<>
			<div className="jourdetails">
				<div className="enteteJour">
					<div className="jourData">{mood(jourData.humeur)}</div>
					<div className="titreJour">{jourData.titre}</div>
				</div>
				<div className="textJour">
					<p className="jourDataTexte">{jourData.texte}</p>
				</div>
			</div>
			{bouttonRevenir(setshowList, setshowJourDetail)}
		</>
	);
}
