import axios from "axios";
import {
    API_TACHE
} from "../constant/API_BACK";

class TacheService {
    getListByIdToDoList(id) {
        return axios.get(API_TACHE + '/todolists/' + id);
    }

    removeById(id) {
        return axios.delete(API_TACHE + '/' + id);
    }

    create(Data) {
        return axios.post(API_TACHE, Data);
    }

    update(Data) {
        return axios.put(API_TACHE, Data)
    }
}

export default new TacheService();