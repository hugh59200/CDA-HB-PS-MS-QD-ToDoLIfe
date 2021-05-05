import React, { useState } from 'react';

import { AffichageListe } from './listeJour/AffichageListe';
import { AjouterJour } from './ajouterJour/AjouterJour';
import { DetailJour } from './detailsJour/DetailJour';

export function Affichage(props) {
	const [ajoutJour, setajoutJour] = useState(false);
	const [showJourDetail, setshowJourDetail] = useState(false);

	return (
		<>
		{props.showList && (
			<AffichageListe
			loading={props.loading}
			data={props.data}
			setjourData={props.setjourData}
			setshowList={props.setshowList}
			setshowJourDetail={setshowJourDetail}
			setajoutJour={setajoutJour}
			/>
			)}
	
		(showJourDetail && (
			<DetailJour
				jourData={props.jourData}
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
				/>
		),)
	
		(ajoutJour && (
			<AjouterJour
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
				setajoutJour={setajoutJour}
				/>
		),)
	;
				</>
	// if (props.showList)
	// 	return (
	// 		<AffichageListe
	// 			loading={props.loading}
	// 			data={props.data}
	// 			setjourData={props.setjourData}
	// 			setshowList={props.setshowList}
	// 			setshowJourDetail={setshowJourDetail}
	// 			setajoutJour={setajoutJour}
	// 		/>
	// 	);
	// if (showJourDetail)
	// 	return (
	// 		<DetailJour
	// 			jourData={props.jourData}
	// 			setshowList={props.setshowList}
	// 			setshowJourDetail={setshowJourDetail}
	// 		/>
	// 	);
	// if (ajoutJour)
	// 	return (
	// 		<AjouterJour
	// 			setshowList={props.setshowList}
	// 			setshowJourDetail={setshowJourDetail}
	// 			setajoutJour={setajoutJour}
	// 		/>
	// 	);
}
