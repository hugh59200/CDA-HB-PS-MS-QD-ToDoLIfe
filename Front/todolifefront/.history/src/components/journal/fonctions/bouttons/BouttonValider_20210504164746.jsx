import { PostRequest } from './PostRequest';
import React from 'react';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
	const setshowList = props.setshowList;
	const setajoutJour = props.setajoutJour;
	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					// props.setajoutJour(false);
					// props.setshowList(true);
					// PostRequest(jour);
					PostRequest(jour, setshowList, setajoutJour);
				}}
			>
				valider
			</button>
		</div>
	);
}