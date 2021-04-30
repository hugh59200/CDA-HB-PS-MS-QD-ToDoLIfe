import React from 'react';

export function selects(fetchUrl, annee, setshowList, mois, allmonth, allyear) {
	return (
		<>
			<div className="entete">
				{selectAnnee(fetchUrl, annee, setshowList, mois, allmonth)}
				{selectMois(fetchUrl, mois, setshowList, annee, allyear)}
			</div>
		</>
	);
}

export function selectAnnee(fetchUrl, annee, setshowList, mois, allmonth) {
	return (
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
			))}
		</select>
	);
}
export function selectMois(fetchUrl, mois, setshowList, annee, allyear) {
	const moisActuel = new Date().ge
	return (
		<select
			className="form-select"
			onChange={e => {
				fetchUrl(mois, e.target.value);
				setshowList(true);
			}}
		>
			<option defaultValue={annee}>{année}</option>
			{allyear.map((annee, i) => (
				<option key={i} value={annee}>
					{annee}
				</option>
			))}
		</select>
	);
}

export function anneeMois() {
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
	return { allmonth, allyear };
}
