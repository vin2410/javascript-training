import { API_BASE_URL } from '../constants/urls';
import ApiRequest from '../helpers/apiRequest';

class ApiService {
    constructor() {
        this.apiService = new ApiRequest(API_BASE_URL, '/groups');
    }

    getGroupList = async () => {
        const data = await this.sendRequest.getGroup();
        return data;
    };
}

export default ApiService;
