import axios from "axios";
// import { get } from "react-hook-form";
import { API_TODO_LIST } from "../shared/constant/API_BACK";


class TodolistService {
    getList() {
        return axios.get(API_TODO_LIST);
    }
    
    
    // getSelected(){
    //     return axios.get(API_TODO_LIST)
    // }

}

export default new TodolistService()