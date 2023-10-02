import { getGroup, postItem, patchItem, deleteItem } from '../services/apiService';

export default class Model {
    constructor() {
        this.groups = [];
    }
    getGroupModel = () => {
        return getGroup().then((response) => {
            this.groups = response;
            return response;
        });
    };
    addGroupModel = (data) => {
        const response = postItem(data);
        this.groups.push(response);
        return response;
    };
}
