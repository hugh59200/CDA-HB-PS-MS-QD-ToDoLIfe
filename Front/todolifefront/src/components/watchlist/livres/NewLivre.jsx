import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_LIVRES } from './../../../constant/URL_CONST';


function NewLivre() {

    const history=useHistory();
  return (

    <div className="container-fluid marge-mobile">
      <div className="row justify-content-center">
    
      </div>

      <div className="row justify-content-center ">
        <div className="col-11 col-md-6 col-lg-6 bloc-film">
          <div>
            <button className="btn btn-primary btn-enregistrer mt-3 mb-3" onClick={()=>{history.push(URL_LIVRES)}}>Retour</button>
          </div>

        <form>
        <div class="form-group row justify-content-center">
    <input type="text" className="col-10 form-control mb-1" placeholder="Nom du livre" id="nom"/>
  </div>

  <label for="Timer actuel : " className="text-white timer-actuel">Page actuelle : </label>
  <div className="justify-content-center row">
  <input type="number" className="col-10 form-control mb-3" placeholder="" />


  </div>


      <label className="text-white timer-actuel">Mon avis : </label>

  <div class="form-group row justify-content-center">
    <textarea type="textarea"  className="form-control col-10 text-zone" name="textarea" rows="3" />
    
      </div>
      <button type="submit" class="btn btn-primary btn-enregistrer">Enregistrer</button>
        </form>

        </div>




      </div>




    </div>





  );
};


export default NewLivre;
