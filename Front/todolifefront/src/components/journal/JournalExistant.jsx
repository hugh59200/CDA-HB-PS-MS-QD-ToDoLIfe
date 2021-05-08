import { API_JOURNAL } from '../../constant/API_BACK';
import axios from 'axios';

export function JournalExistant() {
	axios({
		method: 'get',
		url: API_JOURNAL + '/ ' + localStorage.getItem('id') + '/exist',
	}).then(response => {
		if (response.data === true) {
			console.log(response.data);
			console.log('journal deja existant');
		} else {
			console.log(response.data);
			console.log('journal non existant');
		}
	});
}
