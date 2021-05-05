import React from 'react';

export function BouttonRevenir(props) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setshowList(true);
					props.setshowJourDetail(false);
					props.setajoutJour(false);
				}}
			>
				revenir
			</button>
		</div>
	);
}
