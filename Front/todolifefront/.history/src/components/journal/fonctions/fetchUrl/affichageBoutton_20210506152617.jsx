import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';
import { useEffect } from 'react';

export function affichageBoutton(setjourExistant) {
	const url= API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs'
	useEffect(() => {
	axios({
		method: 'get',
		url: url,
	})
	.then(response => {
		if (!response.data) {
			setjourExistant(false);
		} else if (response.data){
			setjourExistant(true);
		}
	});
}, [setjourExistant]);
}
