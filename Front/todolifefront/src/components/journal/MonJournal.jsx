import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { AjouterJour } from "./fonctions/AjouterJour";
import DetailJour from './fonctions/DetailJour';
import { bouttonAjouter } from './fonctions/Bouttons';
import { fetchFonction } from './fonctions/FetchFonction';
import { formatDate } from './fonctions/FormatDate';
import { selects } from './fonctions/SelectDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [showJourDetail, setshowJourDetail] = useState(false);
	const [ajoutJour, setajoutJour] = useState(false);

	async function fetchUrl(mois, annee) {
		await fetchFonction(setmois, mois, setannee, annee, setLoading, setData);
	}

	function affichage() {
		if (showList) {
			return (
				<>
					<div className="journalItem">
						{loading ? (
							<p className="loading">Vous n'avez rien à cette date...</p>
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
										<div className="date">{formatDate(data.dateJour)}</div>
										<div className="evenement">{data.titre}</div>
									</div>
								))}
							</div>
						)}
					</div>
					{bouttonAjouter(setajoutJour, setshowList)}
				</>
			);
		}
		if (showJourDetail) return DetailJour(jourData, setshowList, setshowJourDetail);
		if (ajoutJour) return <AjouterJour/>
		//  AjouterJour(setshowList, setshowJourDetail);
	}

	return (
		// console.log(object)
		<div>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				{selects(fetchUrl, annee, setshowList, mois)}
				{affichage()}
			</div>
		</div>
	);
};
export default MonJournal;