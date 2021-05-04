import axios from "axios";
import {
    API_TODO_LIST
} from "../constant/API_BACK";

class TodolistService {
    getListByUser(id) {
        return axios.get(API_TODO_LIST + '/utilisateur/' + id);
    }

    removeById(id) {
        return axios.delete(API_TODO_LIST + '/' + id);
    }

    create(Data) {
        return axios.post(API_TODO_LIST, Data);
    }

    update(Data) {
        return axios.put(API_TODO_LIST, Data);
    }
    
    getListById(id){
        return axios.get(API_TODO_LIST + '/' + id);
    }
}

export default new TodolistService();