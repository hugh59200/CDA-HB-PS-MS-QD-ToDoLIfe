import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import React from 'react';

export function AffichageListe(props) {


	// if (jourExistant === true ) {
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
				/>
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