import React, { useEffect } from 'react';

export function BouttonAjouter(props) {

	useEffect(() => {
  }, [props]);
	
	return (
		<div className="boutton">
			<button
				className="btn-ajouter"
				onClick={() => {
					props.setajoutJour(true);
					props.setshowList(false);
					// window.location.reload(true)
				}}
			>
				Mon humeur du jour
			</button>
		</div>
	);
}
