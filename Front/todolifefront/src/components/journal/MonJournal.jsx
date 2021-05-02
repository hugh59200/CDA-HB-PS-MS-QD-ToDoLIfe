import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { Affichage } from './Affichage';
import FetchFonction from './fonctions/FetchFonction';
import { Selects } from './fonctions/selects/SelectDate';

// import { AffichageListe } from './fonctions/listeJour/AffichageListe';
// import { AjouterJour } from './fonctions/affichages/AjouterJour';
// import DetailJour from './fonctions/affichages/DetailJour';



const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);
	// const [ajoutJour, setajoutJour] = useState(false);
	// const [showJourDetail, setshowJourDetail] = useState(false);

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
				// setshowJourDetail={setshowJourDetail}
				// setajoutJour={setajoutJour}
				jourData={jourData}
				/>
			</div>
		</>
	);

	// function Affichage(props) {
	// 	if (props.showList)
	// 		return (
	// 			<AffichageListe
	// 				loading={props.loading}
	// 				data={props.data}
	// 				setjourData={props.setjourData}
	// 				setshowList={props.setshowList}
	// 				setshowJourDetail={props.setshowJourDetail}
	// 				setajoutJour={props.setajoutJour}
	// 			/>
	// 		);
	// 	if (props.showJourDetail)
	// 		return (
	// 			<DetailJour
	// 				jourData={props.jourData}
	// 				setshowList={props.setshowList}
	// 				setshowJourDetail={props.setshowJourDetail}
	// 			/>
	// 		);
	// 	if (props.ajoutJour)
	// 		return (
	// 			<AjouterJour
	// 				setshowList={props.setshowList}
	// 				setshowJourDetail={props.setshowJourDetail}
	// 				setajoutJour={props.setajoutJour}
	// 			/>
	// 		);
	// }

	async function FetchUrl(mois, annee) {
		await FetchFonction(setmois, mois, setannee, annee, setLoading, setData);
	}
};

export default MonJournal;
