import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormatDate } from '../../autres/FormatDate';
import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function ListerJour(props) {
	const listJour = [...props.data];
	listJour.sort(function (a, b) {
		return new Date(b.dateJour) - new Date(a.dateJour);
	});
	
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
							<FontAwesomeIcon
								icon={faEdit}
								className="updateIcon"
								onClick={() => {
									props.setupdateJour(true);
									props.setdateUpdatevalue(data.dateJour)
								}}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
}
