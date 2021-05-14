import { API_JOUR } from './../../../../constant/API_BACK';
import axios from 'axios';

export function BouttonModifier(props) {
	return (
		<button
			className="btn-form"
			onClick={() => {
				handleSubmit(props);
			}}
		>
			modifier
		</button>
	);
}

function handleSubmit(props) {
	if (props.titreUpdateValue.length !== 0) {
		updateJour(props);
	} else {
		props.setavertissement("n'oubliez pas le titre");
	}
}

function updateJour(props) {
	const dateJour = props.dateUpdatevalue;

	const titre = props.titreUpdateValue;
	const humeur = props.moodUpdateValue;
	const texte = props.resumeUpdateValue;

	const jour = {
		dateJour,
		titre,
		humeur,
		texte,
	};

	const id = localStorage.getItem('id');

	axios({
		method: 'put',
		url: API_JOUR,
		data: jour,
		params: { id },
	})
		.then(response => {
			const status = response.request.status;

			if (status === 200) {
				console.log('Jour modifié avec succés !');
				props.setshowList(true);
				props.setajoutJour(false);
				props.setupdateJour(false);
				props.setshowJourDetail(false);
			}
			if (status !== 200) {
				console.log('Une erreur est survenue !');
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue' + error);
		});
}
