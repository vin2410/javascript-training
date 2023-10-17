import ApisClient from '../services/apisClient';

export default class GroupModel {
    constructor() {
        this.ApisClient = new ApisClient();
        this.groupList;
    }

    init = async () => {
        this.groupList = await this.ApisClient.getItem();
    };

    getGroupList = () => {
        return this.groupList;
    };
    getGroupById = async (id) => {
        return await this.ApisClient.getItemById(id);
    }
    addGroup = async (data) => {
        await this.ApisClient.postItem(data);
        this.groupList.push(data);
    };
    renameGroup = async (id, data) => {
        await this.ApisClient.patchItem(id, data);
        this.groupList[id-1].title = data;
    };
    deleteGroup = async (id) => {
        await this.ApisClient.deleteItems(id);
        this.groupList.removechild(id-1);
    }
}
