import React from "react";
import { API_JOURNAL } from "../../shared/constant/API_BACK";
import { useFetch } from "./JournalData";
import "./MonjournalStyle.css";

const MonJournal = () => {

  const [data, loading] = useFetch(API_JOURNAL);

  return (
    <div className="monJournal">
      <h2>Mon journal</h2>
      <div className="journalItem">

        {loading ? (
          "Loading..."
        ) : (
            <div>
              {data.map((data, index) => (
                <p key={index}> {data.label} {data.utilisateur.email}</p>
              ))}
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