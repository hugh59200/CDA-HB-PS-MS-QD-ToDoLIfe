import { API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';

const axios = require('axios');

export function FetchUrlFunction(setmois, mois, setannee, annee, setLoading, setData) {
	const url = Url(setmois, mois, setannee, annee);

	axios({
		method: 'get',
		url: url,
	}).then(response => {
		const json = response.data;
	if (json.length === 0) {
		setLoading(true);
	} else {
		setData(json);
		setLoading(false);
	}
	});
}

// function DataOrNotData(response, setLoading, setData) {
// 	const json = response.data;
// 	if (json.length === 0) {
// 		setLoading(true);
// 	} else {
// 		setData(json);
// 		setLoading(false);
// 	}
// }

function Url(setmois, mois, setannee, annee) {
	setmois(mois);
	setannee(annee);

	const id = localStorage.getItem('id');
	const url = UrlFetchData(id, mois, annee);
	return url;
}

function UrlFetchData(id, mois, annee) {
	return (
		API_JOURNAL_BY_USERID + id + '/journaux/?mois=' + mois + '&annee=' + annee
	);
}
