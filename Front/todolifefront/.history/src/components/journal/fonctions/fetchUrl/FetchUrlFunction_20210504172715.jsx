import { DataOrNotData } from './fonctions/autres/DataOrNotData';
import { Url } from './fonctions/autres/Url';

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
