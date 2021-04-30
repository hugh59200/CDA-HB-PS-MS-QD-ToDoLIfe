import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_FILMS, URL_SERIES, URL_LIVRES } from './../../constant/URL_CONST';

const WatchListOn=()=> {

        const history = useHistory();

        return (
            <div className="container-fluid ">
                <h1 className="text-center text-white">Watchlist</h1>
                <br />
                <div className="row WtMgTop">


                    <div className="col-sm  text-white text-center" onClick={() => {

                        history.push(URL_FILMS);
                    }}>
                        Films
                <br />
                        <img
                            src="https://img.icons8.com/ios/100/000000/movie--v1.png"
                            alt=""
                        />
                    </div>
                    <div className="col-sm  text-white text-center" onClick={() => {

                        history.push(URL_SERIES);
                    }}>
                        Series
                <br />
                        <img src="https://img.icons8.com/ios/100/000000/tv.png" alt="" />
                    </div>
                    <div className="col-sm  text-white text-center" onClick={() => {

                        history.push(URL_LIVRES);
                    }}>
                        Livres
                <br />
                        <img
                            src="https://img.icons8.com/ios-filled/100/000000/open-book.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }


export default WatchListOn;