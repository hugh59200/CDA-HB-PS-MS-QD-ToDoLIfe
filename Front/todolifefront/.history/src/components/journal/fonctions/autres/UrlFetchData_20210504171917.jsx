import { API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';

export function UrlFetchData(id, mois, annee) {
	return (
		API_JOURNAL_BY_USERID + id + '/journaux/?mois=' + mois + '&annee=' + annee
	);
}
