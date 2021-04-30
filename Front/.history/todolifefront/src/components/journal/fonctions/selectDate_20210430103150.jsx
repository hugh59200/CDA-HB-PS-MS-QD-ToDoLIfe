import React from 'react';

export function selects(fetchUrl, annee, setshowList, mois, allmonth, allyear) {
	return (
		<>
			<div className="entete">
				{selectMois(fetchUrl, mois, setshowList, annee, allyear)}
				{selectAnnee(fetchUrl, annee, setshowList, mois, allmonth)}
			</div>
		</>
	);
}


export function selectMois(fetchUrl, annee, setshowList, mois, allyear) {
	clg
	return (
		<select
		className="form-select"
		onChange={e => {
			fetchUrl(e.target.value, annee);
				setshowList(true);
			}}
			>
			<option defaultValue={mois}>{"2021"}</option>
			{allyear.map((mois, i) => (
				<option key={i} value={i + 1}>
					{mois}
				</option>
			))}
		</select>
	);
}

export function selectAnnee(fetchUrl, mois, setshowList, annee, allmonth) {
	return (
		<select
			className="form-select"
			onChange={e => {
				fetchUrl(mois, e.target.value);
				setshowList(true);
			}}
		>
			<option defaultValue={mois}>{"avril"}</option>
			{allmonth.map((mois, i) => (
				<option key={i} value={mois}>
					{mois}
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
