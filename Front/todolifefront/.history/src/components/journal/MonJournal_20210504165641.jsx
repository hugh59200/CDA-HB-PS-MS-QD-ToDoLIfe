import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';
import { Affichage } from './fonctions/affichages/Affichage';
import { Selects } from './fonctions/selects/SelectDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);

	return (
		<>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				<Selects
					FetchUrl={FetchUrl}
					annee={annee}
					setshowList={setshowList}
					mois={mois}
				/>
				<Affichage
					showList={showList}
					loading={loading}
					data={data}
					setjourData={setjourData}
					setshowList={setshowList}
					jourData={jourData}
				/>
			</div>
		</>
	);


	//  const FetchUrl = async (mois, annee) => {
		// setmois(mois);
		// setannee(annee);
		
	// 	const id = localStorage.getItem('id');
	//  const url = API_JOURNAL_BY_USERID + id + '/journaux/?mois=' + mois + '&annee=' + annee
	// 	axios({
	// 		method: 'get',
	// 		url: API_JOUR,
	// 		data: jour,
	// 		params: { id },
	// 	})
	// 		.then(response => {
	// 			const status = response.request.status;
	
	// 			if (status === 200) {
	// 				console.log('Jour ajouté avec succés !');
	// 				setajoutJour(false);
	// 				setshowList(true);
	// 				// timeOut(2000, status, setshowList, setajoutJour);
	// 			}
	// 		})
	// 		.catch(error => {
	// 			console.log('Une erreur est survenue');
	// 			// timeOut(2000, error, setshowList, setajoutJour);
	// 		});
	// };
	
	async function FetchUrl(mois, annee) {
		setmois(mois);
		setannee(annee);
		const response = await fetch(
			API_JOURNAL_BY_USERID +
				localStorage.getItem('id') +
				'/journaux/?mois=' +
				mois +
				'&annee=' +
				annee,
		);
		const json = await response.json();

		if (json.length === 0) {
			setLoading(true);
		} else {
			setData(json);
			setLoading(false);
		}
	}
};

export default MonJournal;

// async function FetchUrl(mois, annee) {
// 	await setmois(mois);
// 	setannee(annee);
// 	const response = await fetch(
// 		API_JOURNAL_BY_USERID +
// 			localStorage.getItem('id') +
// 			'/journaux/?mois=' +
// 			mois +
// 			'&annee=' +
// 			annee,
// 	);
// 	const json = await response.json();

// 	if (json.length === 0) {
// 		setLoading(true);
// 	} else {
// 		setData(json);
// 		setLoading(false);
// 	}
// }
// };

// export default MonJournal;
