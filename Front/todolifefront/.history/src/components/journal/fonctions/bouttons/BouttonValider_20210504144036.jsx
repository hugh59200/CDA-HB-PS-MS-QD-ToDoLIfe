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
	const jour = {
		dateJour,
		humeur,
		titre,
		texte,
	};

}
// axios({
// 	method: 'post',
// 	url: API_JOUR,
// 	data: jour,
// 	params: { id },
// })
// 	.then(response => {
// 		const status = response.request.status;
// 		if (status === 200) {
// 			console.log('Jour ajouté avec succés !');
// 		}
// 	})
// 	.catch(error => {
// 		console.log('Une erreur est survenue');
// 	});
function name(url, data, params) {
	axios({
	method: 'post',
	url: url,
	data: jour,
	params: { id },
})
	.then(response => {
		const status = response.request.status;
		if (status === 200) {
			console.log('Ajouté avec succés !');
		}
	})
	.catch(error => {
		console.log('Une erreur est survenue');
	});
} 