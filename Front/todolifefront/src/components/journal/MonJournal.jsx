import React from "react";
// import { API_JOURNAL_BY_USERID } from "../../constant/API_BACK";
import { useFetch } from "./JournalData";
import "./MonjournalStyle.css";


const MonJournal = () => {

  // const userId = localStorage.getItem("id");

  const URL = "http://localhost:8080/api/utilisateurs/{id}/journaux?idUtilisateur=3";
  // const URL = API_JOURNAL_BY_USERID + userId + "/journaux";
  const [data, loading] = useFetch(URL);
  // console.log(data[].titre);

  return (
    <div>
      <h2>Mon journal</h2>
      <div className="monJournal">
        <div className="entete">
          <p>Date</p>
          <p>Evénement</p>
        </div>
        <div className="journalItem">

          {loading ? (
            "Loading..."
          ) : (
            <div>
              {data.map((data, key) =>
                <div className="jours">
                  <span className = "index">{(data.id) = key + 1} </span>
                  <span className = "date">{data.dateJour}</span>
                  <span className = "evenement">{data.titre}</span>
                </div>
              )}
            </div>
          )}
          {/* idJournal, label, utilisateur     {idUtilisateur, nom, prenom, dateNaissance, email, username, password}*/}

        </div>
        <div className="addItem">
          <input type="submit" value="ajouter" className="btn-form" />
        </div>
      </div>
    </div>
  );
};
export default MonJournal;