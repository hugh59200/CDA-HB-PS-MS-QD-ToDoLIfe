import { BouttonRevenir } from './Bouttons';
import Mood from './Mood';
import React from 'react';

export default function DetailJour(jourData, setshowList, setshowJourDetail) {
	return (
		<>
			<div className="jourdetails">
				<div className="enteteJour">
					<div className="jourData">
						<Mood moodLevel={jourData.humeur} />
					</div>
					<div className="titreJour">{jourData.titre}</div>
				</div>
				<div className="textJour">
					<p className="jourDataTexte">{jourData.texte}</p>
				</div>
			</div>
			{BouttonRevenir(setshowList, setshowJourDetail)}
		</>
	);
}
