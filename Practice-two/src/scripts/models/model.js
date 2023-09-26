import { getGroup } from '../services/apiService';

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
}
