import axios from "axios";
import {
    API_SPORT,
    API_STATISTIQUES,
    API_STATISTIQUES_GENERALES,
    API_STATISTIQUES_SPORTIVES
} from "../constant/API_BACK";

class SportService {

    // Stats
    checkIfUserGetStat(id) {
        return axios.get(API_STATISTIQUES + '/utilisateur/' + id);
    }

    createStatForUser(data) {
        // console.log("stat",data)
        return axios.post(API_STATISTIQUES, data);
    }

    // Stats_Générales
    checkIfUserGetStatGen(id) {
        // console.log("id",id)
        return axios.get(API_STATISTIQUES_GENERALES + '/stat/' + id);
    }

    createStatGenForUser(data) {
        // console.log("stat_G", data)
        return axios.post(API_STATISTIQUES_GENERALES, data);
    }
    
    updateStatGen(data){
        return axios.put(API_STATISTIQUES_GENERALES, data);
    }
    
    // Stats_Sportives
    findByStatId(id) {
        // console.log("id",id)
        return axios.get(API_STATISTIQUES_SPORTIVES + '/stat/' + id);
    }
    
    createStatSport(data){
        // console.log("data",data)
        return axios.post(API_STATISTIQUES_SPORTIVES,data);
    }
    
    
    
    // Sports
    
    getAllSport(){
        return axios.get(API_SPORT)
    }
    
    startWith(car){
        return axios.get(API_SPORT + '/' + car)
    }
    
    findBylabel(label){
        return axios.get(API_SPORT + '/label/' + label)
    }

}

export default new SportService();