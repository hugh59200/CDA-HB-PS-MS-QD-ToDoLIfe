import { API_JOUR } from '../../../../constant/API_BACK';
import React from 'react';
import axios from 'axios';

export function BouttonValider(props) {
	const id = localStorage.getItem('id');
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
	var optionsDate = { year: 'numeric', month: 'numeric', day: 'numeric' };
	const dateJour = new Date().toLocaleDateString('fr-FR', optionsDate);
	const id = localStorage.getItem('id');
	const jour = {
		titre,
		humeur,
		texte,
		dateJour,
	};
	
	const options = {
		method: 'post',
		url: API_JOUR ,
		data: jour,
		params: { id }
	};
	
	axios(options);
}
