import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';
import { Affichage } from './fonctions/affichages/Affichage';
import { Selects } from './fonctions/selects/SelectDate';

const axios = require('axios');

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

	async function FetchUrl(mois, annee) {
		setmois(mois);
		setannee(annee);

		const id = localStorage.getItem('id');

		const url =
			newFunction(id, mois, annee);

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
	}
};

export default MonJournal;
function newFunction(id, mois, annee) {
	return API_JOURNAL_BY_USERID +
		id +
		'/journaux/?mois=' +
		mois +
		'&annee=' +
		annee;
}

