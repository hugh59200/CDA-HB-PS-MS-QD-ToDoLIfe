import React from "react";
import { useHistory } from "react-router";
import { useFetch } from "./JournalData";
import "./MonjournalStyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const MonJournal = () => {

  const history = useHistory();
  
  // const userId = localStorage.getItem("id");
  // const URL = "http://localhost:8080/api/utilisateurs/" + userId + "/journaux";
  
  const URL = "http://localhost:8080/api/utilisateurs/" + "2" + "/journaux";
  const [data, loading] = useFetch(URL);

  const actualMonth = new Date().getMonth();
  const actualYear = new Date().getFullYear();
  const allmonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
  const year = [actualYear]


  function handleClickMonth() {
    history.push(URL + "?" + actualMonth + "&" + year);
  }

  
  return (
    <div>
      <h2>Mon journal</h2>
      <div className="monJournal">
        <div className="entete">

          <select className="form-select" aria-label="Default select example">
            <option defaultValue={allmonth[actualMonth]} >mois</option>

            {allmonth.map((mois, i) =>
              <option key={i} value={mois} onClick={() => handleClickMonth()}>{mois}</option>
            )}
          </select>


          <select className="form-select" aria-label="Default select example">
            <option defaultValue={year} >Année</option>

            {year.map((year, i) =>
              <option key={i} value={year} onClick={() => console.log("ok")} >{year}</option>
            )}
          </select>

        </div>
        <div className="journalItem">

          {loading ? (
            "Loading..."
          ) : (
            <div>
              {data.map((data) =>
                <div className="jours" onClick={() => console.log("ok")} key={data.idJour}>
                  {/* <span className = "date">{data.dateJour}</span> */}
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