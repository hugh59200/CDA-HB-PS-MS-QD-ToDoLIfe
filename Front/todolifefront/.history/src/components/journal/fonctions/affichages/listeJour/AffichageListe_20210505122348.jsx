import { API_JOURNAL } from './../../../../../constant/API_BACK';
import { BouttonAjouter } from '../../bouttons/BouttonAjouter';
import { EmptyOrList } from './EmptyOrList';
import React from 'react';
import { axios } from 'axios';
import { useState } from 'react';

export function AffichageListe(props) {
	const [jourExistant, setjourExistant] = useState(false);
	
	
		axios({
			method: 'get',
			url: API_JOURNAL + '/' + localStorage.getItem('id') + '/utilisateurs',
		}).then(response => {
			const json = response.data;
			if (json.length === 0) {
				setjourExistant(false);
				console.log("ok");
			} else {
				setjourExistant(true);
				console.log("ko");
			}
		});

		

	if (jourExistant === true ) {
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
					// TestJourExistant={TestJourExistant}
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
	}