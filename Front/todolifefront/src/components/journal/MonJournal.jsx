import React, { useState } from 'react';
import '../../assets/css/journal/MonjournalStyle.css';
import { bouttonAjouter } from './fonctions/bouttons/bouttons';
import { fetching } from './fonctions/fetching';
import { monJournal } from './fonctions/monJournal';
import { anneeMois, selects } from './fonctions/choix date/selectDate';
import { detailJour } from './fonctions/affichages/detailJour';
import { ajouterJour } from './fonctions/affichages/ajouterJour';

const MonJournal = () => {
	const { allmonth, allyear } = anneeMois();
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [showJourDetail, setshowJourDetail] = useState(false);
	const [ajoutJour, setajoutJour] = useState(false);

	async function fetchUrl(mois, annee) {
		setmois(mois);
		setannee(annee);
		await fetching(mois, annee, setLoading, setData);
	}

	function ChoixDate(fetchUrl, annee, mois, allmonth, allyear) {
		return (
			<>{selects(fetchUrl, annee, setshowList, mois, allmonth, allyear)}</>
		);
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
										<span className="evenement">{data.titre}</span>
									</div>
								))}
							</div>
						)}
					</div>
					{bouttonAjouter(setajoutJour, setshowList)}
				</>
			);
		}
		if (showJourDetail)
			return detailJour(jourData, setshowList, setshowJourDetail);
		if (ajoutJour) 
		return ajouterJour(setshowList, setshowJourDetail);
	}

	return monJournal(
		ChoixDate,
		fetchUrl,
		annee,
		mois,
		allmonth,
		allyear,
		affichage,
	);
};
export default MonJournal;
