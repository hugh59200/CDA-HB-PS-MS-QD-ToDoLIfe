import React from 'react';

export function BouttonAjouter(props) {
	return (
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(true);
					props.setshowList(false);
				}}
			>
				Mon humeur du jour
			</button>
		</div>
	);
}
