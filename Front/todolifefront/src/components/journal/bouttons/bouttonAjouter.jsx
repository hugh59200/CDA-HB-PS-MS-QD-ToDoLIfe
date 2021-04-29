import React from 'react';

export function bouttonAjouter(setajoutJour, setshowList) {
	return <div className="boutton">
		<button
			className="btn-form"
			onClick={() => {
				setajoutJour(true);
				setshowList(false);
			}}
		>
			ajouter
		</button>
	</div>;
}
