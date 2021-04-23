import axios from "axios";
import { API_TACHE } from "../constant/API_BACK";

class TacheService {
    // getList() {
    //     return axios.get(API_TACHE);
    // }
    
    getListByIdToDoList(id){
        return axios.get(API_TACHE + '/todolist/' + id);
    }

}

export default new TacheService();