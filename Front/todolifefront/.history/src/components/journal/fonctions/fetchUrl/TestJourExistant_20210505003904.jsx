import { API_JOUR } from '../../../../constant/API_BACK';
import { useEffect } from 'react';

const axios = require('axios');

export function TestJourExistant(setjourExistant) {
	const id = localStorage.getItem('id');
	const url = API_JOUR + '/' + id + '/utilisateurs';
	useEffect(() => {
		axios({
			method: 'get',
			url: url,
		}).then(response => {
			const json = response.data;
			if (json.length === 0) {
				setjourExistant(false);
			} else {
				setjourExistant(true);
			}
		});
	}, [setjourExistant, url]);
}
