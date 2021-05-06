import { API_JOURNAL_BY_USERID } from '../../../../constant/API_BACK';
import axios from 'axios';
import { useEffect } from 'react';

export function FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee) {
	test(setmois, mois, setannee, annee, setLoading, setData);

	useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await test(setmois, mois, setannee, annee, setLoading, setData);
    }    // Execute the created function directly
    anyNameFunction();
  }, [annee, mois, setData, setLoading, setannee, setmois]);
}





export function test(setmois, mois, setannee, annee, setLoading, setData) {
	setmois(mois);
	setannee(annee);
	const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
	const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
	const url = stringToFetch1 + stringToFetch2;

	// useEffect(() => {
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
