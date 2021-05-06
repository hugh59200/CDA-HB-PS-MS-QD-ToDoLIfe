import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';
import { useEffect } from 'react';
import { API_JOURNAL } from './../../../../constant/API_BACK';

export function affichageBoutton(setjourExistant) {
	const url API_JOURNAL + '/' + localStorage.getItem('id') + '/utilisateurs'
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
	axios({
		method: 'get',
		url: API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs',
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