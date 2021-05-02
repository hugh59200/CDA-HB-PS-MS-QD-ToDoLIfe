import React from 'react';

export function bouttonAjouter(setajoutJour, setshowList) {
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

export function bouttonRevenir(setshowList, setshowJourDetail) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					setshowList(true);
					setshowJourDetail(false);
				}}
			>
				revenir
			</button>
		</div>
	);
}

export function bouttonValider(setajoutJour, setshowList, moodInt, titre, resume) {
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
