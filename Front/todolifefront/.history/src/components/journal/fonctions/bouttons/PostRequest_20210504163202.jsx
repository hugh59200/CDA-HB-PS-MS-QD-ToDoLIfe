import { API_JOUR } from '../../../../constant/API_BACK';

const axios = require('axios');

export const PostRequest = async (jour, setshowList) => {
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
				timeOut(2000, status, setshowList);
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
			<timeOut time={2000} status={error} setshowList={setshowList} />;
			timeOut(2000, error, setshowList);
		});
};

function timeOut(time, status, set) {
	props.setshowList(false);
	setTimeout(() => {
		popUpSuccess(props.status);
		console.log('ok');
		props.setshowList(false);
	}, props.time);
}

function popUpSuccess(status) {
	if (status === 200) {
		return ajoutOk();
	}
	if (status === 409) {
		return ajoutKo();
	}
}

function ajoutOk() {
	return <div className="popUpResponse"></div>;
}

function ajoutKo() {
	return <div className="popUpResponse"></div>;
}
