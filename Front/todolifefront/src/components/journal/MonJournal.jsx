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
	const [showJourDetail, setshowJourDetail] = useState(false);

	async function FetchUrl(mois, annee) {
		FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee);
	}

	JournalExistant();

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
};

export default MonJournal;

function JournalExistant() {
	axios({
		method: 'get',
		url: API_JOURNAL + '/ ' + localStorage.getItem('id') + '/exist',
	}).then(response => {
		if (response.data === true) {
			console.log(response.data);
			console.log('journal deja existant');
		} else {
			console.log(response.data);
			console.log('journal non existant');
			
		}
	});
}
