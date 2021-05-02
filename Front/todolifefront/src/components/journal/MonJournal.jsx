import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { BouttonAjouter } from './fonctions/Bouttons';
import DetailJour from './fonctions/affichages/DetailJour';
import { EmptyOrList } from './EmptyOrList';
import FetchFonction from './fonctions/FetchFonction';
import { Selects } from './fonctions/SelectDate';

// import { BouttonAjouter } from './fonctions/Bouttons';
// import { AjouterJour } from "./fonctions/AjouterJour";

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
		if (showList) {
			return (
				<>
					<EmptyOrList
					loading={loading}
					data={data}
					setjourData={setjourData}
					setshowList={setshowList}
					setshowJourDetail={setshowJourDetail}
					/>
					<BouttonAjouter
						setajoutJour={setajoutJour}
						setshowList={setshowList}
					/>
				</>
			);
		}
		if (showJourDetail)
			return (
				<DetailJour
					jourData={jourData}
					setshowList={setshowList}
					setshowJourDetail={setshowJourDetail}
				/>
			);
		return DetailJour(jourData, setshowList, setshowJourDetail);
		// if (ajoutJour) return <AjouterJour/>
		//  AjouterJour(setshowList, setshowJourDetail);
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