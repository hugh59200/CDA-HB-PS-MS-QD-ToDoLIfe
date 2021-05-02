import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';
import { Affichage } from './fonctions/affichages/Affichage';
import { Selects } from './fonctions/selects/SelectDate';

const MonJournal = () => {
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [data, setData] = useState([]);

	return (
		<>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				<Selects
					setshowList={setshowList}
					setLoading={setLoading}
					setData={setData}
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
		await setmois(mois);
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
