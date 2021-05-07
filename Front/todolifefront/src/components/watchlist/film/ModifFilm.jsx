
import React, { useEffect } from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_FILMS } from "./../../../constant/URL_CONST";
import axios from "axios";
import { API_FILMS } from "./../../../constant/API_BACK";
import { useState } from "react";

function ModifFilm() {
  const history = useHistory();

  const [filmAct, setFilmAct] = useState([]);

  var nomFilm = history.location.filmEnQuestion.name;
  var heure = history.location.filmEnQuestion.heure;
  var minute = history.location.filmEnQuestion.minute;
  var seconde = history.location.filmEnQuestion.seconde;
  var avisFilm = history.location.filmEnQuestion.avis;

  var idFilm = history.location.filmEnQuestion.idFilm;

  useEffect(() => {
    console.log(history.location);
    setFilmAct(history.location.filmEnQuestion);
    console.log(idFilm);
  }, []);
  return (
    <div className="container-fluid marge-mobile">
    <div className="row justify-content-center">

    </div>

    <div className="row justify-content-center ">
      <div className="col-11 col-md-6 col-lg-6 bloc-film largeurnew">
        <div>
          <button className="btn btn-primary btn-enregistrer mt-3 mb-3" onClick={() => { history.push(URL_FILMS) }}>Retour</button>
        </div>

        <form >
          <div className="form-group row justify-content-center">
            <input type="text" className="col-10 form-control" placeholder="Nom du film" defaultValue={filmAct.name} onChange={(e) => { nomFilm = e.target.value; }} />
          </div>

          <label className="text-white timer-actuel">Timer actuel : </label>
          <div className="justify-content-center row">
            <div className="col-3 text-center marge-film text-white">Heures</div>
            <div className="col-3 text-center marge-film text-white">Minutes</div>
            <div className="col-3 text-center marge-film text-white">Secondes</div>

          </div>
          <div className="form-group row justify-content-center">
            <input type="number" className=" marge-film form-control col-3"  min="0" max="5"  defaultValue={filmAct.heure} onChange={(e) => { heure = e.target.value; }} />
            <input type="number" className="marge-film form-control col-3"  min="0" max="59"  defaultValue={filmAct.minute} onChange={(e) => { minute = e.target.value; }} />
            <input type="number" className=" marge-film form-control col-3" min="0" max="59"  defaultValue={filmAct.seconde} onChange={(e) => { seconde = e.target.value; }} />
          </div>

          <label className="text-white timer-actuel">Mon avis : </label>

          <div className="form-group row justify-content-center">
            <textarea type="textarea" className="form-control col-10 text-zone"  rows="3" defaultValue={filmAct.avis} onChange={(e) => { avisFilm = e.target.value; }} />

          </div>
          <button type="submit" className="btn btn-primary btn-enregistrer"

            onClick={() => {

              const moment = heure + ":" + minute + ":" + seconde;

              const res = {
                idFilm: idFilm,
                name: nomFilm,
                moment: moment,
                avis: avisFilm
              }

              axios({
                method: "put",
                url: API_FILMS + "/" + idFilm,
                data: res,
              })
                .then(function (reponse) {
                  console.log(reponse)

                })
                .catch(function (erreur) {
                  console.log(erreur)
                })

              history.push(URL_FILMS)

            }}

          >Enregistrer</button>
        </form>

      </div>
    </div>
  </div>
  );
}

export default ModifFilm;
