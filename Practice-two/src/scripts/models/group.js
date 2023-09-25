import apiService from '../services/apiService';

class Group {
    constructor() {
        this.service = apiService;
    }

    getGroupList = () => this.service.getGroup();
}
export default Group;
