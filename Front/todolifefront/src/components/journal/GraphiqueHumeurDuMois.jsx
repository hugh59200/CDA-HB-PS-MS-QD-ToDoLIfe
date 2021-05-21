import { Line } from 'react-chartjs-2';
import React from 'react';

// import axios from 'axios';

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
	
		// const [chartData, setChartData] = useState({});
		// const moodEchelle = [1, 2, 3, 4];
		// const [duration, setduration] = useState();
		// const [mood, setmood] = useState([]);
		// const [dateJour, setdateJour] = useState([]);
		
		// const chart = () => {
		// 	let mood = [];
		// 	let empAge = [];
		// 	axios
		// 		.get('http://dummy.restapiexample.com/api/v1/employees')
		// 		.then(res => {
		// 			console.log(res);
		// 			for (const dataObj of res.data.data) {
		// 				mood.push(parseInt(dataObj.mood));
		// 				dateJour.push(parseInt(dataObj.dateJour));
		// 			}
		// 			setChartData({
		// 				labels: empAge,
		// 				datasets: [
		// 					{
		// 						label: 'level of thiccness',
		// 						data: dateJour,
		// 						backgroundColor: ['rgba(75, 192, 192, 0.6)'],
		// 						borderWidth: 4,
		// 					},
		// 				],
		// 			});
		// 		})
		// 		.catch(err => {
		// 			console.log(err);
		// 		});
		// 	// console.log(empSal, empAge);
		// };
		
	return (
		<div className="statistique">
			<div className="titre">Statistiques</div>
			<div className="choixEchelle">
				<div>
					<div
						className="echelleGraph"
						onClick={() => {
							// setduration(7);
						}}
					>
						ces 7 derniers jours
					</div>
					<div
						className="echelleGraph"
						onClick={() => {
							// setduration(30);
						}}
					>
						ce mois-ci
					</div>
				</div>
				<div>
					<div
						className="echelleGraph"
						onClick={() => {
							// setduration(90);
						}}
					>
						ces 3 derniers mois
					</div>
					<div
						className="echelleGraph"
						onClick={() => {
							// setduration(365);
						}}
					>
						cette année
					</div>
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
							color: 'white',
						},
					}}
				/>
			</div>
		</div>
	);
};
