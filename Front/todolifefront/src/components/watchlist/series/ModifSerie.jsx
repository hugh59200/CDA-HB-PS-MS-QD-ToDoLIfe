
import React, { useEffect } from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_SERIES } from "./../../../constant/URL_CONST";
import axios from "axios";
import { API_SERIES } from "./../../../constant/API_BACK";
import { useState } from "react";

function ModifFilm() {
  const history = useHistory();


  const [serieAct, setSerieAct] = useState([]);

  var nomSerie = history.location.serieEnQuestion.name;
  var saison = history.location.serieEnQuestion.saison;
  var episode = history.location.serieEnQuestion.episode;
  var monAvis =history.location.serieEnQuestion.avis;
  var idSerie = history.location.serieEnQuestion.idSerie;

  useEffect(() => {
    console.log(history.location);
    setSerieAct(history.location.serieEnQuestion);
    console.log(idSerie);
  }, []);
  return (
  
    <div className="container-fluid marge-mobile">
    <div className="row justify-content-center">

    </div>

    <div className="row justify-content-center ">
      <div className="col-11 col-md-6 col-lg-6 bloc-film largeurnew">
        <div>
          <button className="btn btn-primary btn-enregistrer mt-3 mb-3" onClick={() => { history.push(URL_SERIES) }}>Retour</button>
        </div>

        <form>
          <div className="form-group row justify-content-center">
            <input type="text" className="col-10 form-control" placeholder="Nom de la serie" id="nom"
              defaultValue={serieAct.name}
              onChange={(e) => {
                nomSerie = e.target.value;
              }} />
          </div>

          <div className="justify-content-center row">
            <div className="col-5 text-center marge-film text-white">Saison :</div>
            <div className="col-5 text-center marge-film text-white">Episode :</div>


          </div>
          <div className="form-group row justify-content-center">
            <input type="number" className=" marge-serie form-control col-4" name="saison" placeholder="Saison" min="0" max="59" 
            defaultValue={serieAct.saison}
              onChange={(e) => {
                saison = e.target.value;
              }} />
            <input type="number" className="marge-serie form-control col-4" name="episode" placeholder="Episode" min="0" max="500" 
            defaultValue={serieAct.episode}
             onChange={(e) => {
                episode = e.target.value;
              }}/>
 

          </div>

          <label className="text-white timer-actuel">Mon avis : </label>

          <div className="form-group row justify-content-center">
            <textarea type="textarea" className="form-control col-10 text-zone" name="textarea" rows="3"
            defaultValue={serieAct.avis}
              onChange={(e) => {
                monAvis = e.target.value;
              }} />

          </div>
          <button type="submit" className="btn btn-primary btn-enregistrer"
            onClick={() => {
              const res = {
                nom: nomSerie,
                saison: saison,
                episode: episode,
                avis: monAvis,
                idSerie: idSerie,
              };

              axios({
                method: "put",
                url: API_SERIES + "/" + idSerie,
                data: res,
              })
                .then(function (reponse) {
                  console.log(res);
                  //On traite la suite une fois la réponse obtenue
                  console.log(reponse);
                })
                .catch(function (erreur) {
                  //On traite ici les erreurs éventuellement survenues
                  console.log(erreur);
                });
              history.push(URL_SERIES);
              window.location.reload();
            }}>
            Enregistrer</button>
        </form>

      </div>




    </div>




  </div>

  );
}

export default ModifFilm;
