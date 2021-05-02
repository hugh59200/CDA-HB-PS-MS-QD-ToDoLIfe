import { React, useState } from 'react';
import { bouttonRevenir, bouttonValider } from './Bouttons';

import mood1 from '../../../assets/img/mood1.png';
import mood2 from '../../../assets/img/mood2.png';
import mood3 from '../../../assets/img/mood3.png';
import mood4 from '../../../assets/img/mood4.png';

export function AjouterJour(setshowList, setshowJourDetail, setajoutJour) {
	const [titre, settitre] = useState('');
	const [moodInt, setmoodInt] = useState('');
	const [resume, setresume] = useState('');
	return (
		<>
			<div className="creationJour">
				{ChoixTitre(settitre)}
				{ChoixMood(setmoodInt)}
				{ChoixResume(setresume)}
			</div>
			{bouttonValider(setajoutJour, setshowList, titre, moodInt, resume)}
			{bouttonRevenir(setshowList, setshowJourDetail)}
		</>
	);
}

function ChoixTitre(settitre) {
	return (
		<div className="choixTitre">
			<input
				type="text"
				className="inputTitre"
				placeholder="mon titre ici"
				onClick={(e) => settitre(e.target.value)}
				></input>
		</div>
	);
}


export function ChoixMood(setmoodInt) {
	const mood = [mood1, mood2, mood3, mood4];
	return (
		<div className="choixMood">
			{mood.map((mood, i) => (
				<img
				src={mood}
				alt="Logo"
				value=""
				key={i}
				className="mood"
				onClick={() => {
					setmoodInt(i + 1);
					}}
				/>
			))}
		</div>
	);
}

function ChoixResume(setresume) {
	return (
		<div className="choixResume">
			<textarea
				name=""
				cols="30"
				rows="10"
				placeholder="Alors cette journée ?"
				onClick={(e) => setresume(e.target.value)}
				></textarea>
		</div>
	);
}