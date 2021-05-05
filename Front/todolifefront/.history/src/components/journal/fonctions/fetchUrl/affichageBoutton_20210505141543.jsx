import { API_JOUR } from '../../../../constant/API_BACK';
import axios from 'axios';

// export function affichageBoutton() {
export function affichageBoutton(jourExistant, setjourExistant) {

	console.log(jourExistant);
	
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

}