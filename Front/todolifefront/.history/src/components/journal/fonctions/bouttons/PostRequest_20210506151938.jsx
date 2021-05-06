import { API_JOUR } from '../../../../constant/API_BACK';

const axios = require('axios');

export const PostRequest = async jour=> {
	const id = localStorage.getItem('id');

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
			}
			if (status !== 200) {
				console.log('Une erreur est survenue !');
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
		
		});
};