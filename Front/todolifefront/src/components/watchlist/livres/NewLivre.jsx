import React from "react";
import "../../../assets/css/watchlist/film.css";
import { useHistory } from "react-router-dom";
import { URL_LIVRES } from "./../../../constant/URL_CONST";

function NewLivre() {
  const history = useHistory();
  return (
    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center"></div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film">
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
              <label className="text-white timer-actuel">
                Titre du livre :{" "}
              </label>

              <input
                type="text"
                name="nomLivre"
                className="col-10 form-control mb-1"
                placeholder="Nom du livre"
                id="nom"
              />
            </div>

            <label className="text-white timer-actuel">Page actuelle : </label>
            <div className="justify-content-center row">
              <input
                type="number"
                name="pageActuelle"
                className="col-10 form-control mb-3"
                placeholder="Page actuelle"
              />
            </div>

            <div className="form-group row justify-content-center">
              <label className="text-white timer-actuel">Mon avis : </label>

              <textarea
                type="textarea"
                name="avisLivre"
                className="form-control col-10 text-zone"
                placeholder="Mon avis"
                rows="3"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-enregistrer">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLivre;
