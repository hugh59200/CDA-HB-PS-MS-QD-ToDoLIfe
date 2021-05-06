import { FormatDate } from '../../autres/FormatDate';
import React from 'react';

export function ListerJour(props) {
	const listJour = [];
	// props.data.map(data => {
	// 		 listJour.push(	);

			
				
			
	// 	}),


	return (
		<>
			{props.data.map(data => {
				return (
					<div
						className="jours"
						onClick={() => {
							props.setjourData(data);
							props.setshowList(false);
							props.setshowJourDetail(true);
						}}
						key={data.idJour}
					>
						<div className="date">{listJour.push({FormatDate(data.dateJour)}	)</div>
						<div className="evenement">{data.titre}</div>
					</div>
				);
			})}
		</>
	);
}