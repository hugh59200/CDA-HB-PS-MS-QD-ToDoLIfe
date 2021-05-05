import React from 'react';

export function BouttonAjouter(props) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setjourExistant(false);
					props.setajoutJour(true);
					// props.setshowList(false);
				}}
			>
				ajouter
			</button>
		</div>
	);
}
