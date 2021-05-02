import React from 'react';

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
