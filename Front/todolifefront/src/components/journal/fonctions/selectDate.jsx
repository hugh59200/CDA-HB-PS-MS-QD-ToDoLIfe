import React from 'react';

export function Selects(props) {
	return (
		<>
			<div className="entete">
				<SelectMois
					FetchUrl={props.FetchUrl}
					annee={props.annee}
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
