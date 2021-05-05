import React from 'react';
import { SelectAnnee } from './SelectAnnee';
import { SelectMois } from './SelectMois';

export function Selects(props) {
	return (
		<>
			<div className="entete">
				<SelectMois
					FetchUrl={props.FetchUrl}
					annee={props.annee}
					setshowList={props.setshowList}
					setshowList={props.setshowList}
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

