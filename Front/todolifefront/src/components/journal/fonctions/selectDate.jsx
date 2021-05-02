import React, { useState } from 'react';

import { API_JOURNAL_BY_USERID } from '../../../constant/API_BACK';

export function Selects(props) {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	return (
		<>
			<div className="entete">
				<SelectMois
					FetchUrl={FetchUrl}
					annee={annee}
					setshowList={props.setshowList}
				/>
				<SelectAnnee
					FetchUrl={props.FetchUrl}
					mois={props.mois}
					setshowList={props.setshowList}
				/>
			</div>
		</>
	);

	async function FetchUrl() {
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
			props.setLoading(true);
		} else {
			props.setData(json);
			props.setLoading(false);
		}
	}
}

export function SelectMois(props) {
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
	var options = { month: 'long' };
	const moisActuel = new Intl.DateTimeFormat('fr', options).format(new Date());

	return (
		<select
			className="form-select"
			onChange={e => {
				props.FetchUrl(e.target.value, props.annee);
				props.setshowList(true);
			}}
		>
			<option defaultValue={moisActuel}>{moisActuel}</option>
			{allmonth.map((m, i) => (
				<option key={i} value={i + 1}>
					{m}
				</option>
			))}
		</select>
	);
}

export function SelectAnnee(props) {
	const allyear = ['2020', '2021'];
	const actualYear = new Date().getFullYear();
	return (
		<select
			className="form-select"
			onChange={e => {
				props.FetchUrl(props.mois, e.target.value);
				props.setshowList(true);
			}}
		>
			<option defaultValue={props.mois}>{actualYear}</option>
			{allyear.map((a, i) => (
				<option key={i} value={a}>
					{a}
				</option>
			))}
		</select>
	);
}
