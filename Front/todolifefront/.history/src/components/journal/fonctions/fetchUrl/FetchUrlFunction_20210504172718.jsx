import { DataOrNotData } from '../autres/DataOrNotData';
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
