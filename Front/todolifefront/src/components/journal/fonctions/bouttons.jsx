import React from 'react';

export function BouttonAjouter(props) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(true);
					props.setshowList(false);
				}}
			>
				ajouter
			</button>
		</div>
	);
}

export function BouttonRevenir(props) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setshowList(true);
					props.setshowJourDetail(false);
				}}
			>
				revenir
			</button>
		</div>
	);
}

export function BouttonValider(props) {
	console.log(props.moodInt);
	console.log(props.titre);
	console.log(props.resume);
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
				}}
			>
				valider
			</button>
		</div>
	);
}
