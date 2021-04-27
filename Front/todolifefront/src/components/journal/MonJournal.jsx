import React, { useState } from "react";
// import { useHistory } from "react-router";
import { useFetch } from "./JournalData";
import "./MonjournalStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const MonJournal = () => {

  const allmonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  const allyear = ['2020', '2021']
  const [mois, setmois] = useState(new Date().getMonth());
  const [annee, setannee] = useState(new Date().getFullYear());
  const urlStart = "http://localhost:8080/api/utilisateurs/" + localStorage.getItem("id") + "/journaux/?mois="+ mois + "&annee=" + annee;
  const [data, loading] = useFetch(urlStart);
  
  console.log(mois);

  return (
    <div>
      <h2>Mon journal</h2>
      <div className="monJournal">
        <div className="entete">

          <select
            className="form-select"
            onChange={e => setmois(e.target.value)}>

            <option defaultValue={mois} >mois</option>
            {allmonth.map((mois, i) =>
              <option key={i} value={i + 1}>{mois}</option>
            )}
          </select>


          <select 
          className="form-select" 
          onChange={e => setannee(e.target.value)}>
            
            <option defaultValue={annee} >Année</option>
            {allyear.map((annee, i) =>
              <option key={i} value={annee}>{annee}</option>
            )}
          </select>

        </div>
        <div className="journalItem">

          {loading ? (
            "Loading..."
          ) : (
            <div>
              {data.map((data) =>
                <div
                  className="jours"
                  onClick={() => console.log("ok")}
                  key={data.idJour}>
                  <span className="evenement">{data.titre}</span>
                  <span><FontAwesomeIcon icon={faPencilAlt} size="lg" className="delete" /></span>
                </div>
              )}
            </div>
          )}

        </div>
        <div className="addItem">
          <input type="submit" value="ajouter" className="btn-form" />
        </div>
      </div>
    </div>
  );
};
export default MonJournal;