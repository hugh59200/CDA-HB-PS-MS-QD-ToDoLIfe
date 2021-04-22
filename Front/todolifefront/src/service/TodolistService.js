import axios from "axios";
import { API_TODO_LIST } from "../constant/API_BACK";

class TodolistService {
    getList() {
        return axios.get(API_TODO_LIST);
    }
    
    
    create (list){
        return axios.post(API_TODO_LIST, list);
    }
}
export default TodolistService;