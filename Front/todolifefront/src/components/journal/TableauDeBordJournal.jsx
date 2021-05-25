import { URL_JOURNAL, URL_STATISTIQUE } from '../../constant/URL_CONST';

import journal from '../../assets/img/journal.png';
import statistiques from '../../assets/img/statistics.png';
import { useHistory } from 'react-router-dom';

export default function TableauDeBordJournal() {
	let history = useHistory();

	function handleClick(lien) {
		history.push(lien);
	}

	return (
		<div className="choix">
			<div>
				<p>Statistique</p>
				<img src={statistiques} alt="" srcSet="" onClick={() => {
						handleClick(URL_STATISTIQUE);
					}}/>
			</div>
			<div>
				<p>Journal</p>
				<img src={journal} alt="" srcSet="" onClick={() => {
						handleClick(URL_JOURNAL);
					}}/>
			</div>
		</div>
	);
}
