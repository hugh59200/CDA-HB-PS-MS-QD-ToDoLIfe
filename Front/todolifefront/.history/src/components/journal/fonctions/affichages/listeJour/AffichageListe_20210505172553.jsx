import React, { useState } from 'react';

import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import { affichageBoutton } from './../../fetchUrl/affichageBoutton';

export function AffichageListe(props) {
const [jourExistant, setjourExistant] = useState(false);

(function(){ affichageBoutton(setjourExistant)})()

return (
	<>
				<EmptyOrList
					loading={props.loading}
					data={props.data}
					setjourData={props.setjourData}
					setshowList={props.setshowList}
					setshowJourDetail={props.setshowJourDetail}
					/>
					{if (!jourExistant && {
				<BouttonAjouter
					setajoutJour={props.setajoutJour}
					setshowList={props.setshowList}
				/>}
			</>
		);
	// } else {
	// 		return (
	// 			<>
	// 				<EmptyOrList
	// 					loading={props.loading}
	// 					data={props.data}
	// 					setjourData={props.setjourData}
	// 					setshowList={props.setshowList}
	// 					setshowJourDetail={props.setshowJourDetail}
	// 				/>
	// 			</>
	// 		);
	// 	}
	}
	{/* // if (!jourExistant ) { */}
	// 	return (
	// 		<>
	// 			<EmptyOrList
	// 				loading={props.loading}
	// 				data={props.data}
	// 				setjourData={props.setjourData}
	// 				setshowList={props.setshowList}
	// 				setshowJourDetail={props.setshowJourDetail}
	// 			/>
	// 			<BouttonAjouter
	// 				setajoutJour={props.setajoutJour}
	// 				setshowList={props.setshowList}
	// 			/>
	// 		</>
	// 	);
	// } else {
	// 		return (
	// 			<>
	// 				<EmptyOrList
	// 					loading={props.loading}
	// 					data={props.data}
	// 					setjourData={props.setjourData}
	// 					setshowList={props.setshowList}
	// 					setshowJourDetail={props.setshowJourDetail}
	// 				/>
	// 			</>
	// 		);
	// 	}