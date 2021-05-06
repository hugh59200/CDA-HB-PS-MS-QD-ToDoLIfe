import { FormatDate } from '../../autres/FormatDate';
import React from 'react';

export function ListerJour(props) {
	const listJour = []
	list.push()
	return <>
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
					<div className="date">{FormatDate(data.dateJour).sort()}</div>
					{/* <div className="date">{FormatDate(data.dateJour)}</div> */}
					<div className="evenement">{data.titre}</div>
				</div>
			);
		})}
	</>;
}
