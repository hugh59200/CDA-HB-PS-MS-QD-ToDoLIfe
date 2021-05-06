import React from 'react';

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
				props.setmois(e.target.value)
				props.FetchUrl(props.setmois(e.target.value), props.annee);
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
