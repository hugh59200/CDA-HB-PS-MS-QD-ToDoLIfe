import { PostRequest } from '../fetchUrl/PostRequest';
import React from 'react';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
	new Date();
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
				handleSubmit(props);
			}}
		>
			valider
		</button>
	);

	function handleSubmit(props) {
		if (props.titre.length !== 0) {
			props.setshowList(true);
			props.setajoutJour(false);
			PostRequest(jour);
		} else {
			props.setplaceholderTitre("n'oubliez pas le titre ici")
		}
	}
}
