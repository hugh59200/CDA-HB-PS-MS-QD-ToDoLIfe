import axios from "axios";
import { API_TACHE } from "../constant/API_BACK";

class TacheService {
    // getList() {
    //     return axios.get(API_TACHE);
    // }
    
    getListByIdToDoList(id){
        return axios.get(API_TACHE + '/todolists/' + id);
    }
    
    removeById(id){
        return axios.delete(API_TACHE + '/id/' + id);
    }
    
    create (Data){
        console.log(Data)
        // console.log(API_TACHE)
        return axios.post(API_TACHE, Data);
    }
}

export default new TacheService();