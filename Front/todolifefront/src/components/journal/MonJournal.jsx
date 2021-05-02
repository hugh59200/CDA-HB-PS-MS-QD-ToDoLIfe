import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import DetailJour from './fonctions/DetailJour';
import Empty from './fonctions/Empty';
import { FetchFonction } from './fonctions/FetchFonction';
import { FormatDate } from './fonctions/FormatDate';
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
	// const [ajoutJour, setajoutJour] = useState(false);

	async function FetchUrl(mois, annee) {
		await FetchFonction(setmois, mois, setannee, annee, setLoading, setData);
	}

	function Affichage() {
		if (showList) {
			return (
				<>
					<div className="journalItem">
						{loading ? (
							<Empty/>
						) : (
							<div>
								{data.map(data => (
									<div
										className="jours"
										onClick={() => {
											setjourData(data);
											setshowList(false);
											setshowJourDetail(true);
										}}
										key={data.idJour}
									>
										<div className="date">{FormatDate(data.dateJour)}</div>
										<div className="evenement">{data.titre}</div>
									</div>
								))}
							</div>
						)}
					</div>
					{/* {bouttonAjouter(setajoutJour, setshowList)} */}
				</>
			);
		}
		if (showJourDetail)
			return DetailJour(jourData, setshowList, setshowJourDetail);
		// if (ajoutJour) return <AjouterJour/>
		//  AjouterJour(setshowList, setshowJourDetail);
	}

	return (
		<div>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				{Selects(FetchUrl, annee, setshowList, mois)}
				<Affichage/>
			</div>
		</div>
	);
};
export default MonJournal;
