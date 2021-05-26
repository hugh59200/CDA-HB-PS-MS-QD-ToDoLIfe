import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormatDate } from '../../autres/FormatDate';
import React from 'react';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

export function ListerJour(props) {
	const listJour = [...props.data];
	listJour.sort(function (a, b) {
		return new Date(b.dateJour) - new Date(a.dateJour);
	});

	const changeColor = (titre, humeur) => {
		
		if (humeur === 1) {
			return <p className="red">{titre}</p>;
		}
		else if (humeur === 2) {
			return <p className="orange">{titre}</p>;
		}
		else if (humeur === 3) {
			return <p className="yellow">{titre}</p>;
		}
		else {
			return <p className="green">{titre}</p>;
		}
	};

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
							{changeColor(data.titre, data.humeur)}
							<FontAwesomeIcon
								icon={faEdit}
								className="updateIcon"
								onClick={() => {
									props.setupdateJour(true);
									props.setdateUpdatevalue(data.dateJour);
								}}
							/>
						</div>
					</div>
				);
			})}
		</>
	);
}
