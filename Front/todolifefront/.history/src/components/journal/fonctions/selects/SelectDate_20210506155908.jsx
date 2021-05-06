import React from 'react';
import { FetchUrlFunction } from '../fetchUrl/FetchUrlFunction';
import { SelectAnnee } from './SelectAnnee';
import { SelectMois } from './SelectMois';

export function Selects(props) {
	return (
			<>
				<SelectMois
					// FetchUrl={props.FetchUrl}
					annee={props.annee}
					setshowList={props.setshowList}
				/>
				<SelectAnnee
					// FetchUrl={props.FetchUrl}
					{FetchUrlFunction(...props)}
					mois={props.mois}
					setshowList={props.setshowList}
				/>
			</>
	);
}


