import { API_JOUR } from '../../../../constant/API_BACK';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

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
	const id = localStorage.getItem('id');
	const dateJour = moment(new Date()).format('YYYY-MM-DD');

	axios({
		method: 'post',
		url: API_JOUR,
		data: {
			dateJour,
			humeur,
			titre,
			texte,
		},
		params: { id },
	})
		.then(response => {
			const status = response.request.status;
			if (status === 200) {
				console.log(status + ' ajouté avec succes !');
			}
		})

		.catch(error => {
			// if (error === 409) {
				console.log(error.request + ' une erreur est survenue');
				console.log(error.request + ' une erreur est survenue');
			// }
		});
}
