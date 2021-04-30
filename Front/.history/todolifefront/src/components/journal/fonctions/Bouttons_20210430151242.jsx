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

export function bouttonValider(setajoutJour, setshowList) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					setajoutJour(false);
					setshowJourDetail(true);
				}}
			>
				valider
			</button>
		</div>
	);
}
