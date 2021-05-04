import { UrlFetchData } from './fonctions/autres/UrlFetchData';

export function Url(setmois, mois, setannee, annee) {
	setmois(mois);
	setannee(annee);

	const id = localStorage.getItem('id');
	const url = UrlFetchData(id, mois, annee);
	return url;
}
