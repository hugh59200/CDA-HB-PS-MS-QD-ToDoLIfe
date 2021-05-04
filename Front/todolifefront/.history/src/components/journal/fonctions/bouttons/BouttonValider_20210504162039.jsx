import { API_JOUR } from '../../../../constant/API_BACK';
import React from 'react';
import moment from 'moment';

// import axios from 'axios';

export function BouttonValider(props) {
	const id = localStorage.getItem('id');
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
			
					PostRequest(props.titre,)
				}}
			>
				valider
			</button>
		</div>
	);
}
