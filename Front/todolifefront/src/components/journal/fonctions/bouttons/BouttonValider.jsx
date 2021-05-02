import { API_JOUR } from '../../../../constant/API_BACK';
import React from 'react';
import axios from 'axios';

export function BouttonValider(props) {
	const id = localStorage.getItem('id');
	// console.log(props.moodInt);
	// console.log(props.titre);
	// console.log(props.resume);
	// console.log(id);
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
					creationJour(props.titre, props.moodInt, props.resume, id);
				}}
			>
				valider
			</button>
		</div>
	);
}

async function creationJour(titre, humeur, texte) {
	var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
	const dateStr = new Date().toLocaleDateString('fr-FR', options);
	const id = localStorage.getItem('id');
	const jour = {
		titre,
		humeur,
		texte,
		dateStr,
	};
	await axios.post(API_JOUR, { params: { jour, id } });
}