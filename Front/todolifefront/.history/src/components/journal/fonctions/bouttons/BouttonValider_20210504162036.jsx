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
					// <sendGetRequest
					// 	titre={props.titre}
					// 	moodInt={props.moodInt}
					// 	resume={props.resume}
					// 	id={id}
					// 	setshowList={props.setshowList}
					// />;
					PostRequest(props.titre,)
				}}
			>
				valider
			</button>
		</div>
	);
}
