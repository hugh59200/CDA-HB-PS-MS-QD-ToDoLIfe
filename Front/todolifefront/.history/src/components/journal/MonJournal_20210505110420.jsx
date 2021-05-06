import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { Affichage } from './fonctions/affichages/Affichage';
import { FetchUrlFunction } from './fonctions/fetchUrl/FetchUrlFunction';
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

	async function FetchUrl(mois, annee) {
	}
};

export default MonJournal;

// FetchUrlFunction(setmois, mois, setannee, annee, setLoading, setData);
// const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
// const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
// const url = stringToFetch1 + stringToFetch2;
// 				axios({
// 				method: 'get',
// 				url: url,
// 			}).then(response => {
// 				const json = response.data;
// 				if (json.length === 0) {
// 					setLoading(true);
// 				} else {
// 					setData(json);
// 					setLoading(false);
// 				}
// 			});