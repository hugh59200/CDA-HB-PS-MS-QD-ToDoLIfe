import React from 'react';
import { bouttonAjouter, bouttonRevenir, bouttonValider } from './Bouttons';
import { mood } from './Mood';
import mood1 from '../../../assets/img/mood1.png';
import mood2 from '../../../assets/img/mood2.png';
import mood3 from '../../../assets/img/mood3.png';
import mood4 from '../../../assets/img/mood4.png';

export function ajouterJour(setshowList, setshowJourDetail, setajoutJour, settitre, setmoodInt, setresume ) {
	return (
		<>
			<div className="creationJour">
				{choixTitre(settitre)}
				{choixMood(setmoodInt)}
				{choixResume(setresume)}
			</div>
			{bouttonValider(setajoutJour, setshowList)}
			{bouttonRevenir(setshowList, setshowJourDetail)}
		</>
	);
}

function choixResume() {
	return <div className="choixResume">
		<textarea
			name=""
			cols="30"
			rows="10"
			placeholder="Alors cette journée ?"
			onClick={{}}
		></textarea>
	</div>;
}

function choixTitre(settitre) {
	return <div className="choixTitre">
		<input
			type="text"
			className="inputTitre"
			placeholder="mon titre ici"
		></input>
	</div>;
}

function choixMood(setmoodInt) {
	const mood = [mood1, mood2, mood3, mood4];
	return (
		<div className="choixMood">
			{mood.map((mood, i) => (
				<img
					src={mood}
					alt="Logo"
					value=""
					className="mood"
					onClick={() => {
						setmoodInt(i);
					}}
				/>
			))}
		</div>
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
