import { API_JOURNAL_BY_USERID } from '../../../constant/API_BACK';

export async function FetchFunction(mois, annee, setLoading, setData) {
	
	const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
	const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
	const response = await fetch(stringToFetch1, stringToFetch2);
	const json = await response.json();
	if (json.length === 0) {
		setLoading(true);
	} else {
		setData(json);
		setLoading(false);
	}
}
