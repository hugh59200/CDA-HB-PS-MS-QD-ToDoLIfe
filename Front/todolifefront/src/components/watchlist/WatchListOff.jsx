import React from 'react';
import { useHistory } from 'react-router-dom';
import { URL_FILMS, URL_SERIES, URL_LIVRES, URL_HOME } from './../../constant/URL_CONST';
import { axios } from 'axios';

const WatchListOff=()=> {

        const history = useHistory();

        return (
            <div>
            <h1>Vous n'avez pas encore de watchlist, voulez vous en créer une</h1>
            <button onClick={()=>{
               
               
            }}>Oui</button>
            <button onClick={()=>{ 
                history.push(URL_HOME)
            }}     >Non</button>


          </div>
        );
    }


export default WatchListOff;