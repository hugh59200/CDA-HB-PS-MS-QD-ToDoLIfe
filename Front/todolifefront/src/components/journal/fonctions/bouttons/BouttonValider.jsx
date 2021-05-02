import { API_JOURNAL } from '../../../../constant/API_BACK';
import React from 'react';
import axios from "axios";

export function BouttonValider(props) {
	const id = localStorage.getItem('id')
	console.log(props.moodInt);
	console.log(props.titre);
	console.log(props.resume);
	console.log(id);
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

function creationJour(titre, humeur, texte, id) {
	axios.post(API_JOURNAL, titre, humeur, texte, id);
}