import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_FILMS, URL_SERIES, URL_LIVRES } from './../../constant/URL_CONST';
import '../../assets/css/watchlist/watchlist.css'
import film from '../../assets/img/film.png'
import serie from '../../assets/img/serie.png'
import livre from '../../assets/img/livre.png'


const WatchListOn=()=> {

        const history = useHistory();

        return (
            <div className="container-fluid espacetop">
                <h1 className="text-center text-white textwatch">Watchlist</h1>
                <br />
                <div className="row WtMgTop m-auto d-flex justify-content-center">


                    <div className="col-sm col-md-3 col-lg-3 text-white text-center bloc-zone mx-4 d-flex" onClick={() => {

                     
                        history.push(URL_FILMS);
                    }}>
                        <span className="titre-fst">Films</span>
                <br />
                        
                      
                       <img className="image" alt="" src={film} />
                     
                      
                    </div>
                    <div className="col-sm col-md-3 col-lg-3 text-white text-center bloc-zone mx-4 d-flex" onClick={() => {

                        history.push(URL_SERIES);
                    }}>
                       <span className="titre-fst">Series</span>
                <br />
                        <img className="image" src={serie} alt="" />
                    </div>
                    <div className="col-sm col-md-3 col-lg-3 text-white text-center bloc-zone mx-4 d-flex" onClick={() => {

                        history.push(URL_LIVRES);
                    }}>
                        <span className="titre-fst">Livres</span>
                <br />
                        <img className="image"
                           src={livre}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }


export default WatchListOn;