import axios from "axios";
import {
    API_TODO_LIST
} from "../constant/API_BACK";

class TodolistService {
    // getList() {
    //     return axios.get(API_TODO_LIST);
    // }

    // getListByIdToDoList(id) {
    //     return axios.get(API_TODO_LIST + '/todolist/' + id);
    // }

    getListByUser(id) {
        return axios.get(API_TODO_LIST + '/utilisateurs/' + id);
    }

    removeById(id) {
        return axios.delete(API_TODO_LIST + '/id/' + id);
    }

    create(Data) {
        return axios.post(API_TODO_LIST, Data);
    }

    update(Data) {
        // console.log('test',Data)
        // console.log(Data)
        return axios.put(API_TODO_LIST, Data);
    }
    
    getListById(id){
        // console.log("id",id)
        return axios.get(API_TODO_LIST + '/id/' + id);
    }
}

export default new TodolistService();