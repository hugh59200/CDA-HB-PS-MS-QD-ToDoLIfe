import React from 'react';

export function BouttonRevenir(props) {


	return (
			<button
				className="btn-form"
				onClick={() => {
					props.setshowList(true);
					props.setshowJourDetail(false);
					props.setajoutJour(false);
					props.setupdateJour(false)
				}}
			>
				revenir
			</button>
	);
}
