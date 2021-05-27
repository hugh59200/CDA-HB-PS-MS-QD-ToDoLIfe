import { API_JOURNAL_BY_USERID } from '../../../constant/API_BACK';
import axios from 'axios';
import { useEffect } from 'react';

export function Graphique(duration, setChartData) {
	const chart = () => {
		let mood = [];
		let dateJour = [];
		let url = API_JOURNAL_BY_USERID + localStorage.getItem('id') + '/graphique';

		function FormatDate(date) {
			var options = { month: 'long', day: 'numeric' };
			return new Date(date).toLocaleDateString('fr-FR', options);
		}

		axios({
			method: 'get',
			url: url,
			params: { duration },
		})
			.then(res => {
				console.log(res.data);

				if (res.data.length === 0) {
					setChartData(false);
				} else {
					for (const dataObj of res.data) {
						mood.push(dataObj.humeur);
						dateJour.push(FormatDate(dataObj.dateJour));
					}

					setChartData({
						type: 'line',
						labels: dateJour,
						datasets: [
							{
								label: "mon niveau d'humeur",
								data: mood,
								backgroundColor: '#FF6384',
								borderColor: '#fff',
								borderWidth: 3,
								fill: true,
								radius: 3,
							},
						],
					});
				}
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		chart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return chart;
}
