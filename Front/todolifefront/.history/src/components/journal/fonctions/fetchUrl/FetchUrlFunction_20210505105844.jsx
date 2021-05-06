import { API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';

export async function FetchUrlFunction(mois, annee, setLoading, setData) {
	
	const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
	const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
	const url = stringToFetch1 + ;
	// 				axios({
// 					method: 'get',
// 					url: url,
// 				}).then(response => {
// 					const json = response.data;
// 					if (json.length === 0) {
// 						setLoading(true);
// 					} else {
// 						setData(json);
// 						setLoading(false);
// 					}
// 				});
	// const response = await fetch(stringToFetch1, stringToFetch2);
	// const json = await response.json();
	// if (json.length === 0) {
	// 	setLoading(true);
	// } else {
	// 	setData(json);
	// 	setLoading(false);
	// }
}
// export function FetchUrlFunction(
// 	setmois,
// 	mois,
// 	setannee,
// 	annee,
// 	setLoading,
// 	setData,
// ) {
// 	setmois(mois);
// 	setannee(annee);

// 	const id = localStorage.getItem('id');
// 	const url =
// 		API_JOURNAL_BY_USERID + id + '/journaux/?mois=' + mois + '&annee=' + annee;

// 		useEffect(() => {
// 				axios({
// 					method: 'get',
// 					url: url,
// 				}).then(response => {
// 					const json = response.data;
// 					if (json.length === 0) {
// 						setLoading(true);
// 					} else {
// 						setData(json);
// 						setLoading(false);
// 					}
// 				});
// 		}, [setData, setLoading, url]);

// }