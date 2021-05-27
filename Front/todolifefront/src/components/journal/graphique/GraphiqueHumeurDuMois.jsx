import React, { useState } from 'react';

import EmptyStat from '../fonctions/autres/EmptyStat';
import { Graphique } from './Graphique';
import { Line } from 'react-chartjs-2';

export const GraphiqueHumeurDuMois = () => {
	const [chartData, setChartData] = useState(false);
	const [duration, setduration] = useState();

	const options = {
		animations: {
			radius: {
				duration: 400,
				easing: 'linear',
				loop: context => context.active,
			},
		},
		hoverRadius: 12,
		hoverBackgroundColor: 'yellow',
		interaction: {
			mode: 'nearest',
			intersect: false,
			axis: 'x',
		},
	};

	const chart = Graphique(duration, setChartData);

	return (
		<div className="statistique">
			<div className="titre">Statistiques</div>
			<div className="choixEchelle">
				<div>
					<div
						className="echelleGraph"
						onClick={() => {
							setduration(7);
							chart();
						}}
					>
						ces 7 derniers jours
					</div>
					<div
						className="echelleGraph"
						onClick={() => {
							setduration(30);
							chart();
						}}
					>
						ce mois-ci
					</div>
				</div>
				<div>
					<div
						className="echelleGraph"
						onClick={() => {
							setduration(90);
							chart();
						}}
					>
						ces 3 derniers mois
					</div>
					<div
						className="echelleGraph"
						onClick={() => {
							setduration(365);
							chart();
						}}
					>
						cette année
					</div>
				</div>
			</div>
			<div className="graphique">
				{!chartData ? (
					<EmptyStat />
				) : (
					<Line data={chartData} options={options} />
				)}
			</div>
		</div>
	);
};
