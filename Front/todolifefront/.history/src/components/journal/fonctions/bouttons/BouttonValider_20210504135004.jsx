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
	}).then(res => {
		let code = res.status;
		console.log(res);
		// if (code === 200) {
		// 	console.log('ok');
		// }
		// if (code === 409) {
		// 	console.log('ko');
		// }
	});
}
