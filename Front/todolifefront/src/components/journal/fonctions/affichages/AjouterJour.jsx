import { BouttonRevenir, BouttonValider } from '../Bouttons';
import { React, useState } from 'react';

import mood1 from '../../../../assets/img/mood1.png';
import mood2 from '../../../../assets/img/mood2.png';
import mood3 from '../../../../assets/img/mood3.png';
import mood4 from '../../../../assets/img/mood4.png';

export function AjouterJour(props) {
	const [titre, settitre] = useState('');
	const [moodInt, setmoodInt] = useState('');
	const [resume, setresume] = useState('');
	return (
		<>
			<div className="creationJour">
				<ChoixTitre settitre={settitre}/>
				<ChoixMood setmoodInt={setmoodInt}/>
				<ChoixResume setresume={setresume}/>
			</div>
			<BouttonValider
			setajoutJour={props.setajoutJour}
			setshowList={props.setshowList}
			titre={titre}
			moodInt={moodInt}
			resume={resume}
			/>
			<BouttonRevenir
			setshowList={props.setshowList}
			setshowJourDetail={props.setshowJourDetail}
			/>
		</>
	);
}

function ChoixTitre(props) {
	return (
		<div className="choixTitre">
			<input
				type="text"
				className="inputTitre"
				placeholder="mon titre ici"
				onClick={e => props.settitre(e.target.value)}
			></input>
		</div>
	);
}

 function ChoixMood(props) {
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
						props.setmoodInt(i + 1);
					}}
				/>
			))}
		</div>
	);
}

function ChoixResume(props) {
	return (
		<div className="choixResume">
			<textarea
				name=""
				cols="30"
				rows="10"
				placeholder="Alors cette journée ?"
				onClick={e => props.setresume(e.target.value)}
			></textarea>
		</div>
	);
}
