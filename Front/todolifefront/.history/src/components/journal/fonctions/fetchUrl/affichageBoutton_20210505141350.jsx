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
			console.log("pas de jour");
		} else if (response.data){
			setjourExistant(true);
			console.log("jour déja set");
		}
	});

}
