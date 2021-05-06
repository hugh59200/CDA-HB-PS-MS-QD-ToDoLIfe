import React, { useEffect } from 'react';

import { PostRequest } from '../fetchUrl/PostRequest';
import moment from 'moment';

export function BouttonValider(props) {
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const titre = props.titre;
	const humeur = props.moodInt;
	const texte = props.resume;
	var options = { month: 'long' };
	const moisActuel = new Intl.DateTimeFormat('fr', options).format(new Date());
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
				props.setshowList(true);
				props.setajoutJour(false);
				PostRequest(jour);
				window.location.reload()
				props.setmois(moisActuel)
			}}
		>
			valider
		</button>
	);
}
