import React from 'react';
import { bouttonRevenir } from './Bouttons';
import { mood } from './Mood';
import mood1 from '../../../assets/img/mood1.png';
import mood2 from '../../../assets/img/mood2.png';
import mood3 from '../../../assets/img/mood3.png';
import mood4 from '../../../assets/img/mood4.png';


export function ajouterJour(setshowList, setshowJourDetail, humeur, titre) {
	return (
		<>
			<div className="creationJour">
				<div className="choixTitre">
					<input type="text" className="inputTitre" placeholder="mon titre ici"></input>
				</div>
				<div className="choixMood">
					<img src={mood4} alt="Logo" value="" className="mood" />
					<img src={mood3} alt="Logo" value="" className="mood" />
					<img src={mood2} alt="Logo" value="" className="mood" />
					<img src={mood1} alt="Logo" value="" className="mood" />
				</div>
				<div className="choixResume">
					<textarea
						name=""
						cols="30"
						rows="10"
						placeholder="Alors cette journée ?"
						onClick={{}}
					></textarea>
				</div>
			</div>
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
