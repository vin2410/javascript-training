import ApisClient from '../services/apisClient';

export default class Group {
    constructor() {
        this.ApisClient = new ApisClient();
        this.groupList;
    }

    init = async () => {
        this.groupList = await this.ApisClient.getGroup();
    };

    getGroupList = () => {
        return this.groupList;
    };

    addGroup = async (data) => {
        await this.ApisClient.postItem(data);
        this.groupList.push(data);
    };
}
