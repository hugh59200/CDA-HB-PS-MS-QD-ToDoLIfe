import React from 'react';

export function BouttonRevenir(props) {
	console.log(showJourDetail)
	
	return (
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
	);
}
