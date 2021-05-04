import React from 'react';
import { sendGetRequest } from './sendGetRequest.2';

export function BouttonValider(props) {
	return (
		<div className="boutton">
			<button
				className="btn-form"
				onClick={() => {
					props.setajoutJour(false);
					props.setshowList(true);
					sendGetRequest(
						props.titre,
						props.moodInt,
						props.resume,
						props.setshowList,
					);
				}}
			>
				valider
			</button>
		</div>
	);
}



