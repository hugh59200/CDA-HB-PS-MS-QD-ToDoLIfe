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
				ajouter mon humeur du jour
			</button>
		</div>
	);
}
