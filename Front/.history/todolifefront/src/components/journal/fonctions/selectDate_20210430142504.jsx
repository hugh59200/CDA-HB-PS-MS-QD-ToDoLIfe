import React from 'react';

export function selects(fetchUrl, annee, setshowList, mois) {
	return (
		<>
			<div className="entete">
				{selectMois(fetchUrl, annee, setshowList)}
				{selectAnnee(fetchUrl, mois, setshowList)}
			</div>
		</>
	);
}

export function selectMois(fetchUrl, annee, setshowList) {
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
				fetchUrl(e.target.value, annee);
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

export function selectAnnee(fetchUrl, mois, setshowList) {
	const allyear = ['2020', '2021'];
	return (
		<select
			className="form-select"
			onChange={e => {
				fetchUrl(mois, e.target.value);
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
