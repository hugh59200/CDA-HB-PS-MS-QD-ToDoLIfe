import { URL_JOURNAL, URL_STATISTIQUE } from '../../constant/URL_CONST';

import journal from '../../assets/img/journal.png';
import statistiques from '../../assets/img/statistics.png';
import { useHistory } from 'react-router-dom';

export default function TableauDeBordJournal() {
	const history = useHistory();
	let username = localStorage.getItem('username');

	function handleClick(lien) {
		history.push(lien);
	}

	return (
		<div className='journalbienvenue'>
			<p>Vous êtes sur le journal de {username}</p>
			<div className="choix">
				<div className="monjournal">
					<p>mon journal</p>
					<img
						src={journal}
						alt=""
						srcSet=""
						onClick={() => {
							handleClick(URL_JOURNAL);
						}}
					/>
				</div>
				<div className="statistiques">
					<p>statistiques</p>
					<img
						src={statistiques}
						alt=""
						srcSet=""
						onClick={() => {
							handleClick(URL_STATISTIQUE);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
