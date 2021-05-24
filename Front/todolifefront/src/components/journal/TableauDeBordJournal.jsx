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
				<img src={statistiques} alt="" srcset="" />
				<button
					className="btn-form"
					onClick={() => {
						handleClick(URL_STATISTIQUE);
					}}
				>
					Statistique
				</button>
			</div>
			<div>
				<img src={journal} alt="" srcset="" />
				<button
					className="btn-form"
					onClick={() => {
						handleClick(URL_JOURNAL);
					}}
				>
					Journal
				</button>
			</div>
		</div>
	);
}
