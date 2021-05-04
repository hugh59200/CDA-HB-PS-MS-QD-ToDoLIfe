import { API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';

const axios = require('axios');

export function FetchUrlFunction(
	setmois,
	mois,
	setannee,
	annee,
	setLoading,
	setData,
) {
	setmois(mois);
	setannee(annee);

	const id = localStorage.getItem('id');
	const url =
		API_JOURNAL_BY_USERID + id + '/journaux/?mois=' + mois + '&annee=' + annee;

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