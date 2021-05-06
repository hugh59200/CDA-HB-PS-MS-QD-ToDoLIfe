import React from 'react';
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
					{FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee)}
					mois={props.mois}
					setshowList={props.setshowList}
				/>
			</>
	);
}


