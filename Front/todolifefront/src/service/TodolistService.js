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
            return axios.get(API_TODO_LIST + 'utilisateurs/' + id);
        }
    
        removeById(id) {
            return axios.delete(API_TODO_LIST + 'id/' + id);
        }
        
        create (id, label) {
            // console.log(id);
            // console.log(label);
            
            // let data = {
            //     label : label,
            //     id: id
                
            // }
            
            
            
            return axios.post(API_TODO_LIST + id + '/' + label);
        }
}

export default new TodolistService();