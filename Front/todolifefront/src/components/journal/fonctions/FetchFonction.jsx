import { API_JOURNAL_BY_USERID } from '../../../constant/API_BACK';

async function FetchFonction(setmois, mois, setannee, annee, setLoading, setData) {
	setmois(mois);
	setannee(annee);
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
export default FetchFonction;