import { API_JOUR } from '../../../../constant/API_BACK';

const axios = require('axios');

export const sendGetRequest = async (titre, humeur, texte) => {
	const id = localStorage.getItem('id');
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const jour = {
		dateJour,
		humeur,
		titre,
		texte,
	};
	axios({
		method: 'post',
		url: API_JOUR,
		data: jour,
		params: { id },
	})
		.then(response => {
			const status = response.request.status;

			if (status === 200) {
				console.log('Jour ajouté avec succés !');
				// <timeOut time={2000} status={status} setshowList={props.setshowList} />;
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
			// <timeOut time={2000} status={error} setshowList={props.setshowList} />;
		});
};
