import { API_JOURNAL } from '../../../constant/API_BACK';
import React from 'react';
import { URL_HOME } from '../../../constant/URL_CONST';
import axios from 'axios';

export function demandeJournal(history, setjournalExiste) {
	
	return (
		<div className="questionJournal">
			<h2>
				Vous n'avez actuellement pas de journal, souhaitez-vous en créer un ?
			</h2>
			<div className="yesOrNo emplacement">
				<button
					onClick={() => {
						CreateJournalByIdUser(setjournalExiste);
					}}
				>
					oui
				</button>
				<button
					onClick={() => {
						history.push(URL_HOME);
					}}
				>
					non
				</button>
			</div>
		</div>
	);
}
export function JournalExistant(setjournalExiste) {
	const idUser = localStorage.getItem('id');

	axios({
		method: 'get',
		url: API_JOURNAL + '/ ' + idUser + '/exist',
	}).then(response => {
		if (response.data === true) {
			setjournalExiste(true);
			console.log('journal deja existant');
		} else {
			setjournalExiste(false);
			console.log('journal non existant');
		}
	});
}
function CreateJournalByIdUser(setjournalExiste) {
	const idUser = localStorage.getItem('id');
	axios({
		method: 'post',
		url: API_JOURNAL + '/utilisateurs',
		params: { idUser },
	})
		.then(response => {
			const status = response.request.status;

			if (status === 200) {
				console.log('Journal ajouté avec succés !');
				setjournalExiste(true);
			}
			if (status !== 200) {
				console.log('Une erreur est survenue !');
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue' + error);
		});
}
