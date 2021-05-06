import '../../assets/css/journal/MonjournalStyle.css';

import React, { useEffect, useState } from 'react';

import { API_JOURNAL_BY_USERID } from '../../constant/API_BACK';
import { Affichage } from './fonctions/affichages/Affichage';
import { FetchUrlFunction } from './fonctions/fetchUrl/FetchUrlFunction';
import { Selects } from './fonctions/selects/SelectDate';
import axios from 'axios';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);
	const [ajoutJour, setajoutJour] = useState(false);
	const [showJourDetail, setshowJourDetail] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			await setmois(mois);
			setannee(annee);
			const stringToFetch1 = API_JOURNAL_BY_USERID + localStorage.getItem('id');
			const stringToFetch2 = '/journaux/?mois=' + mois + '&annee=' + annee;
			const url = stringToFetch1 + stringToFetch2;

			axios({
				method: 'get',
				url: url,
			}).then(response => {
				const json = response.data;
				if (json.length === 0) {
					setLoading(true);
				} else {
					setData(json);
					setLoading(false);
				}
			});
			setmois(mois);
			setannee(annee);
		};
		fetchProducts();
	}, [annee, mois]);

	// async function FetchUrl(mois, annee) {
	// 	FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee);
	// }

	return (
		<div className="monJournal">
			<div className="titreJournal">
				<h2>Mon journal</h2>
			</div>
			{!ajoutJour && !showJourDetail && (
				<div className="selectDate">
					<Selects
						FetchUrl={FetchUrl}
						annee={annee}
						mois={mois}
						setshowList={setshowList}
						setmois={setmois}
						setannee={setannee}
					/>
				</div>
			)}
			<div className="affichage">
				<Affichage
					showList={showList}
					loading={loading}
					data={data}
					jourData={jourData}
					setjourData={setjourData}
					setshowList={setshowList}
					ajoutJour={ajoutJour}
					setajoutJour={setajoutJour}
					showJourDetail={showJourDetail}
					setshowJourDetail={setshowJourDetail}
				/>
			</div>
		</div>
	);
};

export default MonJournal;
