import React, { useEffect, useState } from "react";
import "./MonjournalStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const MonJournal = () => {

  const allmonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  const allyear = ['2020', '2021']
  const [mois, setmois] = useState(new Date().getMonth());
  const [annee, setannee] = useState(new Date().getFullYear());
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUrl(mois, annee) {
    setmois(mois);
    setannee(annee);
    const urlBase = "http://localhost:8080/api/utilisateurs/" + localStorage.getItem("id") + "/journaux/"
    const urlDate = "?mois=" + mois + "&annee=" + annee
    const url = urlBase + urlDate;
    axios.get(url)
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchUrl(mois, annee);
  }, [mois, annee]);

  return (
    <div>
      <h2>Mon journal</h2>
      <div className="monJournal">
        <div className="entete">

          <select
            className="form-select"
            onChange={(e) => {
              fetchUrl(e.target.value, annee)
            }}
          >

            <option defaultValue={mois} >mois</option>
            {allmonth.map((mois, i) =>
              <option key={i} value={i + 1}>{mois}</option>
            )}
          </select>


          <select
            className="form-select"
            onChange={(e) => {
              fetchUrl(mois, e.target.value)
            }}
          >

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