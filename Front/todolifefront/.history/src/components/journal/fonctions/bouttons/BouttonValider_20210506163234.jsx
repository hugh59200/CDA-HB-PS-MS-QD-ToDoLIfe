import React, { useEffect } from 'react';

import { PostRequest } from '../fetchUrl/PostRequest';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
(new Date());
	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};

	useEffect(() => {
  }, [props, dateJour, titre, humeur, texte]);

	return (
		<button
			className="btn-form"
			onClick={() => {
				props.setmois(moisActuel)
				props.setshowList(true);
				props.setajoutJour(false);
				window.location.reload()
			}}
		>
			valider
		</button>
	);
}
