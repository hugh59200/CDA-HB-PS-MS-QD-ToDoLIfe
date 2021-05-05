import React, { useState } from 'react';

import { AffichageListe } from './listeJour/AffichageListe';
import { AjouterJour } from './ajouterJour/AjouterJour';
import { DetailJour } from './detailsJour/DetailJour';

export function Affichage(props) {
	const [showJourDetail, setshowJourDetail] = useState(false);

	// {!ajoutJour && (
	// 	<div className="selectDate">
	// 		<Selects
	// 			FetchUrl={FetchUrl}
	// 			annee={annee}
	// 			setshowList={setshowList}
	// 			mois={mois}
	// 			setmois={setmois}
	// 			setannee={setannee}
	// 		/>
	// 	</div>
	// )}

	return (
		{props.showList && (
			<div>
			<AffichageListe
				loading={props.loading}
				data={props.data}
				setjourData={props.setjourData}
				setshowList={props.setshowList}
				setshowJourDetail={setshowJourDetail}
				setajoutJour={props.setajoutJour}
			/></div>
		)}
	
		// {props.showJourDetail && (
		// 	<DetailJour
		// 		jourData={props.jourData}
		// 		setshowList={props.setshowList}
		// 		setshowJourDetail={setshowJourDetail}
		// 	/>
		// )},

		// 	{props.ajoutJour && (
		// 	<AjouterJour
		// 		setshowList={props.setshowList}
		// 		setshowJourDetail={setshowJourDetail}
		// 		setajoutJour={props.setajoutJour}
		// 	/>
		// )},
	)
			}
	// if (props.showList)
	// 	return (
	// 		<AffichageListe
	// 			loading={props.loading}
	// 			data={props.data}
	// 			setjourData={props.setjourData}
	// 			setshowList={props.setshowList}
	// 			setshowJourDetail={setshowJourDetail}
	// 			setajoutJour={props.setajoutJour}
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
	// if (props.ajoutJour)
	// 	return (
	// 		<AjouterJour
	// 			setshowList={props.setshowList}
	// 			setshowJourDetail={setshowJourDetail}
	// 			setajoutJour={props.setajoutJour}
	// 		/>
	// 	);
