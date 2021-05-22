import axios from "axios";
import {
    API_STATISTIQUES,
    API_STATISTIQUES_GENERALES
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
        console.log("stat_G", data)
        return axios.post(API_STATISTIQUES_GENERALES, data);
    }
}

export default new SportService();