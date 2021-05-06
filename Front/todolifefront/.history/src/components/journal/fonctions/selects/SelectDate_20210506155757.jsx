import React from 'react';
import { SelectAnnee } from './SelectAnnee';
import { SelectMois } from './SelectMois';
import { FetchUrlFunction } from './../../../../../.history/src/components/journal/fonctions/fetchUrl/FetchUrlFunction_20210506152109';

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


