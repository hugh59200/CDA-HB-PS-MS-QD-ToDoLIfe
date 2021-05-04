import { DataOrNotData } from './DataOrNotData';
import { Url } from '../autres/Url';

const axios = require('axios');

export function FetchUrlFunction(setmois, mois, setannee, annee, setLoading, setData) {
	const url = Url(setmois, mois, setannee, annee);

	axios({
		method: 'get',
		url: url,
	}).then(response => {
		DataOrNotData(response, setLoading, setData);
	});
}

export function Url(setmois, mois, setannee, annee) {
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
