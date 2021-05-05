import { API_JOUR } from '../../../../constant/API_BACK';

const axios = require('axios');

export const PostRequest = async (jour, setshowList, setajoutJour) => {
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
				// setajoutJour(false);
			  // setshowList(true);
				timeOut(2000, status, setshowList, setajoutJour);
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
			timeOut(2000, error, setshowList, setajoutJour);
		});
};

function timeOut(time, status, setshowList, setajoutJour) {
	setshowList(true);
	setajoutJour(false);
	setTimeout(() => {
	
		// popUpSuccess(status);
		console.log('ok');
	}, time);
}

// function popUpSuccess(status) {
// 	if (status === 200) {
// 		// return ajoutOk();
// 	}
// 	if (status === 409) {
// 		// return ajoutKo();
// 	}
// }

// function ajoutOk() {
// 	return <div className="popUpResponse"></div>;
// }

// function ajoutKo() {
// 	return <div className="popUpResponse"></div>;
// }
