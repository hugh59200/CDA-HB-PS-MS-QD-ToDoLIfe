import React from 'react';

export function Selects(FetchUrl, annee, setshowList, mois) {
	return (
		<>
			<div className="entete">
				{SelectMois(FetchUrl, annee, setshowList)}
				{SelectAnnee(FetchUrl, mois, setshowList)}
			</div>
		</>
	);
}

export function SelectMois(FetchUrl, annee, setshowList) {
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
				FetchUrl(e.target.value, annee);
				setshowList(true);
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

export function SelectAnnee(FetchUrl, mois, setshowList) {
	const allyear = ['2020', '2021'];
	return (
		<select
			className="form-select"
			onChange={e => {
				FetchUrl(mois, e.target.value);
				setshowList(true);
			}}
		>
			<option defaultValue={mois}>{new Date().getFullYear()}</option>
			{allyear.map((a, i) => (
				<option key={i} value={a}>
					{a}
				</option>
			))}
		</select>
	);
}
