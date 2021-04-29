import React, { useState } from 'react';
import '../../assets/css/journal/MonjournalStyle.css';
import { anneeMois } from './fonctions/anneeMois';
import { bouttonRevenir } from './bouttonRevenir';
import { bouttonAjouter } from './bouttonAjouter';
import { jourDetails } from './jourDetails';
import { fetching } from './fetching';
import { monJournal } from './monJournal.1';

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
			<div className="entete">
				<select
					className="form-select"
					onChange={e => {
						fetchUrl(e.target.value, annee);
						setshowList(true);
					}}
				>
					<option defaultValue={mois}>mois</option>
					{allmonth.map((mois, i) => (
						<option key={i} value={i + 1}>
							{mois}
						</option>
					))}{' '}
				</select>
				<select
					className="form-select"
					onChange={e => {
						fetchUrl(mois, e.target.value);
						setshowList(true);
					}}
				>
					<option defaultValue={annee}>année</option>
					{allyear.map((annee, i) => (
						<option key={i} value={annee}>
							{annee}
						</option>
					))}
				</select>
			</div>
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
		} else if (showJourDetail) {
			return (
				<>
					{jourDetails(jourData)}
					{bouttonRevenir(setshowList, setshowJourDetail)}
				</>
			);
		} else if (ajoutJour) {
			return (
				<>
					<div className="jourdetails">ok</div>
					{bouttonRevenir(setshowList, setshowJourDetail)}
				</>
			);
		}
	}

	return (
		monJournal(ChoixDate, fetchUrl, annee, mois, allmonth, allyear, affichage)
	);
};
export default MonJournal;