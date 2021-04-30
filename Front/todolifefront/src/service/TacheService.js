import axios from "axios";
import { API_TACHE } from "../constant/API_BACK";

class TacheService {
    // getList() {
    //     return axios.get(API_TACHE);
    // }
    
    getListByIdToDoList(id){
        return axios.get(API_TACHE + '/todolist/' + id);
    }
    
    removeById(id){
        return axios.delete(API_TACHE + '/id/' + id);
    }
}

export default new TacheService();