import React, { useState } from 'react';
import '../../assets/css/journal/MonjournalStyle.css';
import { bouttonAjouter } from './fonctions/Bouttons';
import { fetchFonction } from './fonctions/FetchFonction';
import { selects } from './fonctions/SelectDate';
import { detailJour } from './fonctions/Affichages';
import { ajouterJour } from "./fonctions/AjouterJour";
import { formatDate } from './fonctions/FormatDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [showJourDetail, setshowJourDetail] = useState(false);
<<<<<<< HEAD

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
=======
	const [ajoutJour, setajoutJour] = useState(false);
	const [moodInt, setmoodInt] = useState('');
	const [titre, settitre] = useState('');
	const [resume, setresume] = useState('');



	async function fetchUrl(mois, annee) {
		await fetchFonction(setmois, mois, setannee, annee, setLoading, setData);
>>>>>>> @{-1}
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
<<<<<<< HEAD
										<span className="evenement">{data.titre}</span>
										<span>
											<FontAwesomeIcon
												icon={faPencilAlt}
												size="lg"
												className="delete"
											/>
										</span>
=======
										<div className="date">{formatDate(data.dateJour)}</div>
										<div className="evenement">{data.titre}</div>
>>>>>>> @{-1}
									</div>
								))}
							</div>
						)}
					</div>
<<<<<<< HEAD
					<div className="addItem">
						<input type="submit" value="ajouter" className="btn-form" />
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

								{/* {console.log(jourData.humeur)} */}
								{/* <img src={mood1} alt="Logo" className="mood" /> */}
							</div>
							<div className="titreJour">{jourData.titre}</div>
						</div>
						<div className="textJour">
							<p className="jourDataTexte">{jourData.texte}</p>
						</div>
					</div>
					<div className="revenir">
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
=======
					{bouttonAjouter(setajoutJour, setshowList)}
				</>
			);
		}
		if (showJourDetail)
			return detailJour(jourData, setshowList, setshowJourDetail);
		if (ajoutJour) return ajouterJour(setshowList, setshowJourDetail, setmoodInt, settitre, setresume);
>>>>>>> @{-1}
	}

	return (
		<div>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
<<<<<<< HEAD
				{ChoixDate(fetchUrl, annee, mois, allmonth, allyear)}
=======
				{selects(fetchUrl, annee, setshowList, mois)}
>>>>>>> @{-1}
				{affichage()}
			</div>
		</div>
	);
};
export default MonJournal;
