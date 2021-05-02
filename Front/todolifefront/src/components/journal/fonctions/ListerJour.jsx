import { FormatDate } from './FormatDate';
import React from 'react';

export function ListerJour(data, setjourData, setshowList, setshowJourDetail) {
	return <div>
		{data.map(data => {
			return (
				<div
					className="jours"
					onClick={() => {
						setjourData(data);
						setshowList(false);
						setshowJourDetail(true);
					}}
					key={data.idJour}
				>
					<div className="date">{FormatDate(data.dateJour)}</div>
					<div className="evenement">{data.titre}</div>
				</div>
			);
		})}
	</div>;
}
