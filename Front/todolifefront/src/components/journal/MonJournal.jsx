import '../../assets/css/journal/MonjournalStyle.css';

import React, { useState } from 'react';

import { Affichage } from './Affichage';
import { Selects } from './fonctions/SelectDate';

const MonJournal = () => {
	const [loading, setLoading] = useState(true);
	const [showList, setshowList] = useState(true);
	const [data, setData] = useState([]);

	return (
		<>
			<h2 className="titreJournal">Mon journal</h2>
			<div className="monJournal">
				<Selects
					setshowList={setshowList}
					setLoading={setLoading}
					setData={setData}
				/>
				<Affichage 
				showList={showList}
				loading={loading}
				data={data}
				setshowList={setshowList}
				/>
			</div>
		</>
	);
	
};

export default MonJournal;
