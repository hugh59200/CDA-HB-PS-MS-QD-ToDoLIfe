import { useEffect, useState } from 'react';

import { API_JOUR } from '../../../../constant/API_BACK';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

export function BouttonValider(props) {
	const id = localStorage.getItem('id');
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
					<creationJour
					titre ={props.titre}
					moodInt ={props.moodInt}
					resume ={props.resume}
					setshowList ={props.setshowList}
					/>
					// creationJour(props.titre, props.moodInt, props.resume, id, props.setshowList);
				}}
			>
				valider
			</button>
		</div>
	);
}

async function creationJour(props) {
	const titre = props.titre
	const humeur = props.moodInt
	const texte = props.resume
	const id = localStorage.getItem('id');
	const dateJour = moment(new Date()).format('YYYY-MM-DD');
	const jour = {
		dateJour,
		humeur,
		titre,
		texte,
	};

	axios({
		method: 'post',
		url: API_JOUR,
		data: jour,
		params: { id },
	})
		.then(response => {
			const status = response.request.status;

			if (status === 200) {
				console.log('Jour ajouté avec succés !');
				<timeOut
				time= {2000}
				status= {status}
				setshowList= {props.setshowList}
				/>
			}
		})
		.catch(error => {
			console.log('Une erreur est survenue');
			timeOut(2000, error, props.setshowList);
		});
}



function timeOut(time, status, setshowList) {
	// setshowList(false)
	setTimeout(() => {
		popUpSuccess(status);
		console.log("ok");
		setshowList(false)
	}, time);
}



function popUpSuccess(status) {
	if (status === 200) {
		return ajoutOk();
	}
	if (status === 409) {
		return ajoutKo();
	}
}


function ajoutOk() {
	return(
		<div className="popUpResponse">
			
		</div>
	)
}

function ajoutKo() {
	return(
		<div  className="popUpResponse">
			
		</div>
	)
}
