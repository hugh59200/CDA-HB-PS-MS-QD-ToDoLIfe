import React from 'react';

export function BouttonRevenir(props) {
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
		</div>
	);
}
