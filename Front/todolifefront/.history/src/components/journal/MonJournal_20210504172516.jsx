import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { Affichage } from './fonctions/affichages/Affichage';
import { DataOrNotData } from './fonctions/autres/DataOrNotData';
import { Selects } from './fonctions/selects/SelectDate';
import { Url } from './fonctions/autres/Url';

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
		newFunction(setmois, mois, setannee, annee, setLoading, setData);
	}
};

export default MonJournal;


function newFunction(setmois, mois, setannee, annee, setLoading, setData) {
	const url = Url(setmois, mois, setannee, annee);

	axios({
		method: 'get',
		url: url,
	}).then(response => {
		DataOrNotData(response, setLoading, setData);
	});
}

