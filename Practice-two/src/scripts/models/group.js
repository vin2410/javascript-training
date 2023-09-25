import ApiService from '../services/apiService';
class Group {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.lists = data.lists;
    }
}

export default Group;
