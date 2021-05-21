import { URL_JOURNAL, URL_STATISTIQUE } from '../../constant/URL_CONST';

import { useHistory } from 'react-router-dom';

export default function TableauDeBordJournal() {
	let history = useHistory();

	function handleClick(lien) {
		history.push(lien);
	}

	return (
		<div className="choix">
        <button
          className="btn-form"
          onClick={() => {
            handleClick(URL_STATISTIQUE);
          }}
        >
          Statistique
        </button>
        <button
          className="btn-form"
          onClick={() => {
            handleClick(URL_JOURNAL);
          }}
        >
          Journal
        </button>
		</div>
	);
}
