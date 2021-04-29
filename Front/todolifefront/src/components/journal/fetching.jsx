import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';

export async function fetching(mois, annee, setLoading, setData) {
	const response = await fetch(
		API_JOURNAL_BY_USERID +
		localStorage.getItem('id') +
		'/journaux/?mois=' +
		mois +
		'&annee=' +
		annee
	);
	const json = await response.json();

	if (json.length === 0) {
		setLoading(true);
	} else {
		setData(json);
		setLoading(false);
	}
}
