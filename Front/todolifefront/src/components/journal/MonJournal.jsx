import React, { useState } from 'react';
import '../../assets/css/journal/MonjournalStyle.css';
import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';
import mood1 from '../../assets/img/mood1.png';
import mood2 from '../../assets/img/mood2.png';
import mood3 from '../../assets/img/mood3.png';
import mood4 from '../../assets/img/mood4.png';

const MonJournal = () => {
	const allmonth = [
		'Janvier',
		'Février',
		'Mars',
		'Avril',
		'Mai',
		'Juin',
		'Juillet',
		'Aout',
		'Septembre',
		'Octobre',
		'Novembre',
		'Decembre',
	];
	const allyear = ['2020', '2021'];
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [showJourDetail, setshowJourDetail] = useState(false);
	// const [ajoutJour, setajoutJour] = useState(false);

	async function fetchUrl(mois, annee) {
		setmois(mois);
		setannee(annee);
		const response = await fetch(
			API_JOURNAL_BY_USERID +
				localStorage.getItem('id') +
				'/journaux/?mois=' +
				mois +
				'&annee=' +
				annee,
		);
		const json = await response.json();

		if (json.length === 0) {
			setLoading(true);
		} else {
			setData(json);
			setLoading(false);
		}
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

	function mood(moodLevel) {
		switch (moodLevel) {
			case 1:
        return <img src={mood1} alt="Logo" className="mood" />
			case 2:
        return <img src={mood2} alt="Logo" className="mood" />
			case 3:
        return	<img src={mood3} alt="Logo" className="mood" />
			case 4:
        return	<img src={mood4} alt="Logo" className="mood" />
			default:
				break;
		}
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
					<div className="boutton">
						<button
							className="btn-form"
							onClick={() => {
								// setshowList(false);
								// setajoutJour(false);
							}}
						>
							ajouter
						</button>
					</div>
				</>
			);
		} else if (showJourDetail) {
			return (
				<>
					<div className="jourdetails">
						<div className="enteteJour">
							<div className="jourData">
								{mood(jourData.humeur)}
							</div>
							<div className="titreJour">{jourData.titre}</div>
						</div>
						<div className="textJour">
							<p className="jourDataTexte">{jourData.texte}</p>
						</div>
					</div>
					<div className="boutton">
						<button
							className="btn-form"
							onClick={() => {
								setshowList(true);
								setshowJourDetail(false);
							}}
						>
							revenir
						</button>
					</div>
				</>
			);
		}
	}

	return (
		<div>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				{ChoixDate(fetchUrl, annee, mois, allmonth, allyear)}
				{affichage()}
			</div>
		</div>
	);
};
export default MonJournal;
