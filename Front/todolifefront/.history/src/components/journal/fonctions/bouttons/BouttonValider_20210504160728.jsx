import React from 'react';
import { sendGetRequest } from './sendGetRequest';

export function BouttonValider(props) {

	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
	const jour = {
		titre,
		humeur,
		texte,
	}
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
					sendGetRequest(
						jour,
						props.setshowList,
					);
				}}
			>
				valider
			</button>
		</div>
	);
}



