import axios from "axios";
import {
    API_USER
} from "../constant/API_BACK";

class UtilisateurService {
    checkIfRegistered(username) {
        return axios.get(API_USER + '/username/' + username);
    }

    getById(id) {
        return axios.get(API_USER + '/' + id);
    }
}

export default new UtilisateurService();