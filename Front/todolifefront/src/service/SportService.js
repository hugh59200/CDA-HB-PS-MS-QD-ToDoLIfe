import axios from "axios";
import {
    API_ACTIVITE,
    API_BADGE,
    API_SPORT,
    API_STATISTIQUES,
    API_STATISTIQUES_GENERALES,
    API_STATISTIQUES_SPORTIVES,
    API_TEMPS
} from "../constant/API_BACK";

class SportService {

    // Stats
    checkIfUserGetStat(id) {
        console.log("sport sevice search by User id")
        return axios.get(API_STATISTIQUES + '/utilisateur/'+ id);
    }

    createStatForUser(data) {
        // console.log("data",data)
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
    
    deleteStatsSportive(id){
        return axios.delete(API_STATISTIQUES_SPORTIVES + '/' + id);
    }
    
    findstatSportwithId(id){
        return axios.get(API_STATISTIQUES_SPORTIVES + '/id/' + id);
    }
    
    updateStatSport(data){
        return axios.put(API_STATISTIQUES_SPORTIVES, data)
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
    
    
    // badge
    
    createBadge(data){
        return axios.post(API_BADGE, data)
    }
    
    FindBadgeByStatIdAndByLabel(id,label){
        return axios.get(API_BADGE + '/stat/' + id + '/label/' +label)
    }
    
    // temps
    
    createTemps(data){
        return axios.post(API_TEMPS, data)
    }
    
    findTemps(h,m,s){
        return axios.get(API_TEMPS + '/heure/'+ h + '/minute/' + m + '/seconde/' + s)
    }
    
    
    //activité 
    
    createActivite(data){
        return axios.post(API_ACTIVITE, data)
    }

}

export default new SportService();