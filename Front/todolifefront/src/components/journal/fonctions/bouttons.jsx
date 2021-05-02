import React from 'react';

export function BouttonAjouter(setajoutJour, setshowList) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					setajoutJour(true);
					setshowList(false);
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

export function BouttonValider(setajoutJour, setshowList, moodInt, titre, resume) {
	console.log(moodInt);
	console.log(titre);
	console.log(resume);
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					setajoutJour(false);
					setshowList(true);
				}}
			>
				valider
			</button>
		</div>
	);
}
