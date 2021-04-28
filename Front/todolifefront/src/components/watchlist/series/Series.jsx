import React from "react";
import '../../../assets/css/watchlist/film.css'
import { useHistory } from 'react-router-dom';
import { URL_NEW_SERIE, URL_LIVRES, URL_FILMS } from './../../../constant/URL_CONST';


function Series() {
const history=useHistory();
  return (

    <div className="container-fluid ">
      <div className="row justify-content-center">
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test" onClick={()=>{history.push(URL_FILMS)}}>FILMS</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test">SERIES</button>
        <button className="m-2 col-2 col-md-2 col-lg-2 btn btn-test" onClick={()=>{history.push(URL_LIVRES)}}>LIVRES</button>
      </div>

      <div className="row justify-content-center ">
        <div className="col-12 col-md-6 col-lg-6 bloc-film">
          <div>
            <button class="todo-button-add" onClick={()=>{history.push(URL_NEW_SERIE)}}  >   </button>
            
          </div>
        </div>




      </div>




    </div>





  );
};


export default Series;
