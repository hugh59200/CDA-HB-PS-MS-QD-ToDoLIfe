import React, { useState, useEffect } from 'react';
import { URL_FILMS, URL_JOURNAL, URL_LIVRES, URL_SERIES } from "../../constant/URL_CONST";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { API_WATCHLIST } from './../../constant/API_BACK';
import WatchListOn from './WatchListOn';
import WatchListOff from './WatchListOff';



const MaWatchlist=()=> {



  const [isWatchList,setIsWatchList] =useState([]);

  useEffect(() => {

    const idUtilisateur = localStorage.getItem("id")
    // GET request using axios inside useEffect React hook
    axios.get(API_WATCHLIST + "/utilisateurs/" + idUtilisateur)
        .then(function(response){

          try {
            setIsWatchList(response.data);
            console.log(response.data);
          } catch (error) {
            setIsWatchList(false);
            console.log(error);
          }
       

        });
        console.log(axios.get(API_WATCHLIST + "/utilisateurs/" + idUtilisateur));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


if(!isWatchList){

  return <WatchListOff/>
}else{
  return <WatchListOn/>
}

}
export default MaWatchlist;
