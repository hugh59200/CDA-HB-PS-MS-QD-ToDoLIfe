import React from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_SERIES } from "./../../../constant/URL_CONST";
import axios from "axios";
import { API_SERIES } from "./../../../constant/API_BACK";


function NewSerie() {

  const history = useHistory();

  var nomSerie = "";
  var episode = "";
  var saison = "";
  var monAvis = "";
  var idUtilisateur = localStorage.getItem("id");

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
                onChange={(e) => {
                  nomSerie = e.target.value;
                }} />
            </div>

            <div className="justify-content-center row">
              <div className="col-5 text-center marge-film text-white">Saison :</div>
              <div className="col-5 text-center marge-film text-white">Episode :</div>


            </div>
            <div className="form-group row justify-content-center">
              <input type="number" className=" marge-serie form-control col-4" name="saison" placeholder="Saison" min="0" max="59" defaultValue="0"
                onChange={(e) => {
                  saison = e.target.value;
                }} />
              <input type="number" className="marge-serie form-control col-4" name="episode" placeholder="Episode" min="0" max="500" defaultValue="0"
              onChange={(e) => {
                episode = e.target.value;
              }} />
    

            </div>

            <label className="text-white timer-actuel">Mon avis : </label>

            <div className="form-group row justify-content-center">
              <textarea type="textarea" className="form-control col-10 text-zone" name="textarea" rows="3"
                onChange={(e) => {
                  monAvis = e.target.value;
                }} />

            </div>
            <button type="submit" className="btn btn-primary btn-enregistrer"
              onClick={() => {
                const res = {
                  name: nomSerie,
                  saison: saison,
                  episode: episode,
                  avis: monAvis,
                };

                axios({
                  method: "post",
                  url: API_SERIES + "/utilisateurs/" + idUtilisateur,
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
};


export default NewSerie;
