import { PostRequest } from './PostRequest';
import React from 'react';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
console.log(mois);
	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};
	
	return (
			<button
				className="btn-form"
				onClick={() => {
					props.FetchUrl(props.mois, props.annee)
					props.setajoutJour(false);
					props.setshowList(true);
					props.setajoutJour(false);
					PostRequest(jour, props.setshowList, props.setajoutJour);
					window.location.reload();
				}}
			>
				valider
			</button>
	);
}