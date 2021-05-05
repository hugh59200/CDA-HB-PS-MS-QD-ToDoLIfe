import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import React from 'react';
import { TestJourExistant } from '../../fetchUrl/TestJourExistant';

// import React, { useState } from 'react';






export function AffichageListe(props) {
	const [jourExistant, setjourExistant] = useState(false);
	console.log(jourExistant);
	// TestJourExistant(setjourExistant)
	if (!jourExistant) {
		return (
			<>
				<EmptyOrList
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
				/>
				<BouttonAjouter
					setajoutJour={props.setajoutJour}
					setshowList={props.setshowList}
					// setjourExistant={setjourExistant}
				/>
			</>
		);
	} else {
		return (
			<>
				<EmptyOrList
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
				/>
			</>
		);
	}

	async function FetchUrlJourExistant(setjourExistant) {
		TestJourExistant(setjourExistant);
	}
}