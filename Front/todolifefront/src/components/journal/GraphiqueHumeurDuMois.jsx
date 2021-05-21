import { Line } from 'react-chartjs-2';
import React from 'react';

const state = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: 'Rainfall',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			borderWidth: 2,
			data: [65, 59, 80, 81, 56],
		},
	],
};

export const GraphiqueHumeurDuMois = () => {
	return (
		<div className="statistique">
			<div className="choixEchelle">
				<div>
					<div className="echelleGraph">ces 7 derniers jours</div>
					<div className="echelleGraph">ce mois-ci</div>
				</div>
				<div>
					<div className="echelleGraph">ces 3 derniers mois</div>
					<div className="echelleGraph">cette année</div>
				</div>
			</div>
			<div className="graphique">
				<Line
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Rainfall per month',
							fontSize: 20,
						},
						legend: {
							display: true,
							position: 'right',
						},
					}}
				/>
			</div>
		</div>
	);
};
