import React from 'react';

export function BouttonAjouter(props) {
	return (
		<div className="boutton">
			<button
				className="btn-ajouter"
				onClick={() => {
					props.setajoutJour(true);
					props.setshowList(false);
					props.setshowJourDetail(false);
				}}
			>
				Mon humeur du jour
			</button>
		</div>
	);
}
