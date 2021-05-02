import React, { useState } from 'react';

import { AffichageListe } from './fonctions/listeJour/AffichageListe';
import { AjouterJour } from './fonctions/affichages/AjouterJour';
import { DetailJour } from './fonctions/affichages/DetailJour';

export function Affichage(props) {
	const [ajoutJour, setajoutJour] = useState(false);
	const [showJourDetail, setshowJourDetail] = useState(false);
	if (props.showList)
		return (
			<AffichageListe
				loading={props.loading}
				data={props.data}
				setjourData={props.setjourData}
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
				setajoutJour={setajoutJour}
			/>
		);
	if (showJourDetail)
		return (
			<DetailJour
				jourData={props.jourData}
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
			/>
		);
	if (ajoutJour)
		return (
			<AjouterJour
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
				setajoutJour={setajoutJour}
			/>
		);
}
