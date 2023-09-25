import ApiService from '../services/apiService';

class Groups {
    constructor() {
        this.ApiService = new ApiService();
    }

    getGroup = () => this.ApiService.getGroup();
}

export default Groups;
