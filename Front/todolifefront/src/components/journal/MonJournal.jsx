import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { API_JOURNAL } from '../../constant/API_BACK';
import { Affichage } from './fonctions/affichages/Affichage';
import { FetchUrlFunction } from './fonctions/fetchUrl/FetchUrlFunction';
import { Selects } from './fonctions/selects/SelectDate';
import axios from 'axios';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth() + 1);
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);
	const [ajoutJour, setajoutJour] = useState(false);
	const [journalExiste, setjournalExiste] = useState();
	const [showJourDetail, setshowJourDetail] = useState(false);

	async function FetchUrl(mois, annee) {
		FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee);
	}

	JournalExistant(setjournalExiste);

	console.log(journalExiste);

	if (!journalExiste) {
		return <div>journal a creer</div>;
	} else {
		return (
			<div className="monJournal">
				<div className="titreJournal">
					<h2>Mon journal</h2>
				</div>
				{!ajoutJour && !showJourDetail && (
					<div className="selectDate">
						<Selects
							FetchUrl={FetchUrl}
							annee={annee}
							mois={mois}
							setshowList={setshowList}
							setmois={setmois}
							setannee={setannee}
						/>
					</div>
				)}
				<div className="affichage">
					<Affichage
						showList={showList}
						loading={loading}
						data={data}
						jourData={jourData}
						setjourData={setjourData}
						setshowList={setshowList}
						ajoutJour={ajoutJour}
						setajoutJour={setajoutJour}
						showJourDetail={showJourDetail}
						setshowJourDetail={setshowJourDetail}
					/>
				</div>
			</div>
		);
	}
};

export default MonJournal;

function JournalExistant(setjournalExiste) {
	const idUser = localStorage.getItem('id');

	axios({
		method: 'get',
		url: API_JOURNAL + '/ ' + idUser + '/exist',
	}).then(response => {
		if (response.data === true) {
			setjournalExiste(true);
			// console.log(response.data);
			console.log('journal deja existant');
		} else {
			setjournalExiste(false);
			// CreateJournalByIdUser(idUser);
			// console.log(response.data);
			console.log('journal non existant');
		}
	});
}

// function CreateJournalByIdUser(idUser) {
// 	// const journalDto = { idUser }
// 	// console.log(journalDto.idUser);
// 	// axios({
// 	// 	method: 'post',
// 	// 	url: API_JOURNAL,
// 	// 	// params: { idUser },
// 	// 	data: journalDto,
// 	// })
// 	// 	.then(response => {
// 	// 		const status = response.request.status;

// 	// 		if (status === 200) {
// 	// 			console.log('Journal ajouté avec succés !');
// 	// 		}
// 	// 		if (status !== 200) {
// 	// 			console.log('Une erreur est survenue !');
// 	// 		}
// 	// 	})
// 	// 	.catch(error => {
// 	// 		console.log('Une erreur est survenue' + error);
// 	// 	});
// }
