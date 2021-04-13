import axios from 'axios'


const UTILISATEUR_REST_API_URL = 'http://localhost:8080/api/utilisateurs'

class UtilisateurService {

    getList() {
        return axios.get(UTILISATEUR_REST_API_URL);
    }

    createUser(User) {
        return axios.post(UTILISATEUR_REST_API_URL + User);
    }

    getUserId(UserId) {
        return axios.get(UTILISATEUR_REST_API_URL + '/' + UserId);
    }
    
    updateUser(User) {
        return axios.put(UTILISATEUR_REST_API_URL + User);
    }

    deleteUser(UserId) {
        return axios.delete(UTILISATEUR_REST_API_URL + '/' + UserId);
    }

}

export default new UtilisateurService()