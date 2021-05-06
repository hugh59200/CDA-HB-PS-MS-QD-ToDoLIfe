import { FormatDate } from '../../autres/FormatDate';
import React from 'react';

export function ListerJour(props) {
	const listJour = [...props.data];
	console.log(listJour[0].dateJour);
	listJour.sort((a, b) => new Date(...a.dateJour).reverse()) - new Date(...b.initialRegistration.split('-').reverse()))
	
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
						<div className="date">{FormatDate(data.dateJour)}</div>
						<div className="evenement">{data.titre}</div>
					</div>
				);
			})}
		</>
	);
}
