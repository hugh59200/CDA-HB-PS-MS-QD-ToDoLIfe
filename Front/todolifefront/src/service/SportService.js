import axios from "axios";
import {
    API_STATISTIQUES, 
    // API_STATISTIQUES_GENRALES
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
    
    // checkIfUserGetStatGen(id){
    //     return axios.get(API_STATISTIQUES_GENRALES + '/stat/' + id);
    // }
    
    



}

export default new SportService();