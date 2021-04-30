import React from 'react';

export function selects(fetchUrl, annee, setshowList, mois, allmonth, allyear) {
	return (
		<>
			<div className="entete">
				{selectMois(fetchUrl, annee, setshowList, mois)}
				{selectAnnee(fetchUrl, mois, setshowList, annee)}
			</div>
		</>
	);
}

export function selectMois(annee, setshowList, mois) {
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
	const moisActuel = new Intl.DateTimeFormat('fr', options).format(
		new Date(),
	);

	return (
		<select
			className="form-select"
			onChange={e => {
				fetchUrl(e.target.value, annee);
				setshowList(true);
			}}
		>
			<option defaultValue={mois}>{moisActuel}</option>
			{allmonth.map((mois, i) => (
				<option key={i} value={i + 1}>
					{mois}
				</option>
			))}
		</select>
	);
}

export function selectAnnee(fetchUrl, mois, setshowList, annee) {
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
			{allyear.map((annee, i) => (
				<option key={i} value={annee}>
					{annee}
				</option>
			))}
		</select>
	);
}
// export function anneeMois() {
// 	return { allmonth, allyear };
// }
