import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { AffichageListe } from './fonctions/listeJour/AffichageListe';
import { AjouterJour } from './fonctions/affichages/AjouterJour';
import DetailJour from './fonctions/affichages/DetailJour';
import FetchFonction from './fonctions/FetchFonction';
import { Selects } from './fonctions/SelectDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [showJourDetail, setshowJourDetail] = useState(false);
	const [ajoutJour, setajoutJour] = useState(false);

	async function FetchUrl(mois, annee) {
		await FetchFonction(setmois, mois, setannee, annee, setLoading, setData);
	}

	function Affichage() {
		if (showList)
			return (
				<AffichageListe
					loading={loading}
					data={data}
					setjourData={setjourData}
					setshowList={setshowList}
					setshowJourDetail={setshowJourDetail}
					setajoutJour={setajoutJour}
				/>
			);
		if (showJourDetail)
			return (
				<DetailJour
					jourData={jourData}
					setshowList={setshowList}
					setshowJourDetail={setshowJourDetail}
				/>
			);
		if (ajoutJour)
			return (
				<AjouterJour
					setshowList={setshowList}
					setshowJourDetail={setshowJourDetail}
					setajoutJour={setajoutJour}
				/>
			);
	}

	return (
		<div>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				<Selects
					FetchUrl={FetchUrl}
					annee={annee}
					setshowList={setshowList}
					mois={mois}
				/>
				<Affichage />
			</div>
		</div>
	);
};
export default MonJournal;
