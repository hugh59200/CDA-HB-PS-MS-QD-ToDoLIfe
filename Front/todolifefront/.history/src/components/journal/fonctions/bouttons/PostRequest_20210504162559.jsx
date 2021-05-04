import { API_JOUR } from '../../../../constant/API_BACK';

const axios = require('axios');

export const PostRequest = async (jour) => {
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
				<timeOut time={2000} status={status} setshowList={props.setshowList} />;
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
			// <timeOut time={2000} status={error} setshowList={props.setshowList} />;
		});
};

	function timeOut(props) {
		props.setshowList(true);
		setTimeout(() => {
			popUpSuccess(props.status);
			console.log('ok');
			props.setshowList(true);
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

