import { FormatDate } from '../../autres/FormatDate';
import React from 'react';

export function ListerJour(props) {
	const listJour = [...props.data];
	console.log(listJour[0].dateJour);
	listJour.sort(function(o1,o2){
		return sort_o1_before_o2 ? -1 : sort_o1_after_o2 ? 1 : 0;
	});
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
