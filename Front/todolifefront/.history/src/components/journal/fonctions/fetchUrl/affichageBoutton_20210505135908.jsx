import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';

export function affichageBoutton(jourExistant, setjourExistant) {

	console.log(jourExistant);
	
	axios({
		method: 'get',
		url: API_JOUR + '/' + localStorage.getItem('id') + '/utilisateurs',
	})
	.then(response => {
		const json = response.data;
		// if (json.length === 0) {
		// 	// setjourExistant(false);
		// 	console.log("ok");
		// } else {
		// 	// setjourExistant(true);
		// 	console.log("ko");
		// }
		console.log(response);
	});

}
