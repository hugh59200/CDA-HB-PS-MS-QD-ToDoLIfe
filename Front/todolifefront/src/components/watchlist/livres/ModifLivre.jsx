import React, { useEffect } from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_LIVRES } from "./../../../constant/URL_CONST";
import axios from "axios";
import { API_LIVRES } from "./../../../constant/API_BACK";
import { useState } from "react";

function ModifLivre() {
  const history = useHistory();

  const [livreAct, setLivreAct] = useState([]);

  var nomLivre = history.location.livreEnQuestion.title;
  var pageAct = history.location.livreEnQuestion.pageActuel;
  var monAvis = history.location.livreEnQuestion.avis;

  var idLivre = history.location.livreEnQuestion.idLivre;

  useEffect(() => {
    console.log(history.location);
    setLivreAct(history.location.livreEnQuestion);
    console.log(idLivre);
  }, []);
  return (
    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center"></div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film testaff mob">
          <div>
            <button
              className="btn btn-primary btn-enregistrer mt-3 mb-3"
              onClick={() => {
                history.push(URL_LIVRES);
              }}
            >
              Retour
            </button>
          </div>

          <form>
            <div className="form-group row justify-content-center">
              <label className="text-white timer-actuel col-12">
                Titre du livre :{" "}
              </label>
              

              <input
                type="text"
                className="col-10 form-control mb-1"
                placeholder="Nom du livre"
                id="nom"
                defaultValue={livreAct.title}
                onChange={(e) => {
                  nomLivre = e.target.value;
                }}
              />
            </div>

            <label className="text-white timer-actuel col-12">
              Page actuelle :{" "}
            </label>
            <div className="justify-content-center row">
              <input
                type="number"
                className="col-10 form-control mb-3"
                placeholder="Page actuelle"
                defaultValue={livreAct.pageActuel}
                onChange={(e) => {
                  pageAct = e.target.value;
                }}
              />
            </div>

            <div className="form-group row justify-content-center">
              <label className="text-white timer-actuel col-12">
                Mon avis :{" "}
              </label>

              <textarea
                type="textarea"
                className="form-control col-10 text-zone"
                placeholder="Mon avis"
                rows="3"
                defaultValue={livreAct.avis}
                onChange={(e) => {
                  monAvis = e.target.value;
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-enregistrer"
              onClick={() => {
                const res = {
                  idLivre: idLivre,
                  title: nomLivre,
                  pageActuel: pageAct,
                  avis: monAvis,
                };

                axios({
                  method: "put",

                  url: API_LIVRES + "/" + idLivre,
                  data: res,
                })
                  .then(function (reponse) {
                    //On traite la suite une fois la réponse obtenue
                    console.log(reponse);
                  })
                  .catch(function (erreur) {
                    //On traite ici les erreurs éventuellement survenues
                    console.log(erreur);
                  });
                history.push(URL_LIVRES);
              }}
            >
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModifLivre;
