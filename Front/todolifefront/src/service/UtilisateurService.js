import axios from "axios";
import { API_USER } from "../constant/API_BACK";


class UtilisateurService {
    
    
    checkIfRegistered(username){
        return axios.get(API_USER + '/username/' + username);
    }
    


}

export default new UtilisateurService()