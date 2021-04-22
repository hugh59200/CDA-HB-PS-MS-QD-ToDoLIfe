import axios from "axios";
import { API_JOURNAL } from "../../shared/constant/API_BACK";

class MonJournalService {
    getList() {
        return axios.get(API_JOURNAL);
    }
}

export default new MonJournalService()