import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { Affichage } from './fonctions/affichages/Affichage';
import { FetchUrlFunction } from './fonctions/fetchUrl/FetchUrlFunction';
import { Selects } from './fonctions/selects/SelectDate';

const MonJournal = () => {
	const [mois, setmois] = useState(new Date().getMonth());
	const [annee, setannee] = useState(new Date().getFullYear());
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [jourData, setjourData] = useState('');
	const [data, setData] = useState([]);
	const [ajoutJour, setajoutJour] = useState(false);
	const [showJourDetail, setshowJourDetail] = useState(false);
	
	async function FetchUrl(mois, annee) {
		FetchUrlFunction(mois, annee, setLoading, setData, setmois, setannee);
	}
	(function () {
		FetchUrl(mois, annee);
	})();
	
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
					// annee={annee}
					// mois={mois}
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
					FetchUrl={FetchUrl}
				/>
			</div>
		</div>
	);


};

export default MonJournal;
