import React from "react";
import { API_JOURNAL_BY_USERID } from "../../constant/API_BACK";
import { useFetch } from "./JournalData";
import "./MonjournalStyle.css";
        

const MonJournal = () => {

  const userId = localStorage.getItem("id");

  const URL = API_JOURNAL_BY_USERID + userId + "/journaux";

  const [data, loading] = useFetch(URL);

  return (
    <div className="monJournal">
      <h2>Mon journal</h2>
      <div className="journalItem">

        {loading ? (
          "Loading..."
        ) : (
            <div>
              {data.label}
            </div>
        )}
        {/* idJournal, label, utilisateur     {idUtilisateur, nom, prenom, dateNaissance, email, username, password}*/}
        
      </div>
      <div className="addItem">
        <input type="submit" value="ajouter" className="btn-form" />
      </div>
    </div>
  );
};
export default MonJournal;