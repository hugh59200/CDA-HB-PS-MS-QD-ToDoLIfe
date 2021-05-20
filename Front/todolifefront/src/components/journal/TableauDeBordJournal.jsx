import { URL_JOURNAL, URL_TABLEAU_DE_BORD } from '../../constant/URL_CONST';

import { useHistory } from 'react-router-dom';

export default function TableauDeBordJournal() {
	let history = useHistory();

	function handleClick(lien) {
		history.push(lien);
	}

	return (
		<div className="tableauDeBord">
        <button
          className="btn-form"
          onClick={() => {
            handleClick(URL_TABLEAU_DE_BORD);
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
