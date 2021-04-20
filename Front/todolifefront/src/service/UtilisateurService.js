import axios from "axios";


class UtilisateurService {
    
    getCurrentUser(id){
        return axios.get('http://localhost:8080/api/utilisateurs/' + id);
    }

}

export default new UtilisateurService()