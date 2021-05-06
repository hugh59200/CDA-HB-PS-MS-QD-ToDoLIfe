import { PostRequest } from './PostRequest';
import React from 'react';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;

	
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
				// props.FetchUrl(moisActuel, actualYear);
				props.setajoutJour(false);
				props.setshowList(true);
				props.setajoutJour(false);
				<PostRequest
				jour={jour}
				setshowList={props.setshowList}
				setajoutJour={props.setajoutJour}
				/>
				PostRequest(jour, props.setshowList, props.setajoutJour);
			}}
		>
			valider
		</button>
	);
}