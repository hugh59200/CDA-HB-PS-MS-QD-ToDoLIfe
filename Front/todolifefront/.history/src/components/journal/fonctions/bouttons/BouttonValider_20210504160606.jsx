import React from 'react';
import { sendGetRequest } from './sendGetRequest';

export function BouttonValider(props) {
	// const objet = {
	// 	humeur,
	// 	titre,
	// 	texte,
	// };
	const humeur = props.moodInt;
	const titre = props.moodInt;
	const humeur = props.moodInt;
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
					sendGetRequest(
						props.titre,
						props.moodInt,
						props.resume,
						props.setshowList,
					);
				}}
			>
				valider
			</button>
		</div>
	);
}



