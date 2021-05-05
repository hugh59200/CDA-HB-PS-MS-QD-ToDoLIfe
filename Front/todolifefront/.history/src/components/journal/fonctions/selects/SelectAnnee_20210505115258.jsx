import React from 'react';

export function SelectAnnee(props) {
	const allyear = ['2020', '2021'];
	const actualYear = new Date().getFullYear();
	return (
		<select
			className="form-select"
			onChange={e => {
				props.setshowList(true);
				props.FetchUrl(props.mois, e.target.value);
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
