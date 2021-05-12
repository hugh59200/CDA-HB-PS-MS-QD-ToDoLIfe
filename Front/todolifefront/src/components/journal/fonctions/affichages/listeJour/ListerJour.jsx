import React, { useEffect } from 'react';

import { FormatDate } from '../../autres/FormatDate';
import updateJour from '../../../../../assets/img/modifier.png';

export function ListerJour(props) {
	const listJour = [...props.data];
	listJour.sort(function (a, b) {
		return new Date(b.dateJour) - new Date(a.dateJour);
	});

	useEffect(() => {}, [props]);

	return (
		<>
			{listJour.map(data => {
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
						<div className="evenement">
							<p>{data.titre}</p>
							<img src={updateJour} alt="" className="updateIcon" />
						</div>
					</div>
				);
			})}
		</>
	);
}
