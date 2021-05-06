import { useEffect, useLayoutEffect } from 'react';

import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';

export function affichageBoutton(setjourExistant) {
	const url= API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs'
	useLayoutEffect(() => {
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
}, [setData, setLoading, url]);
}
