import axios from "axios";
import {
    API_TODO_LIST
} from "../constant/API_BACK";

class TodoListService {
    getList() {
        return axios.get(API_TODO_LIST);
    }

    getListByIdToDoList(id) {
        return axios.get(API_TODO_LIST + '/todolist/' + id);
    }


}

export default new TodoListService();