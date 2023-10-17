import ApisClient from '../services/apisClient';

export default class Group {
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
<<<<<<< HEAD

=======
    getGroupById = async (id) => {
        return await this.ApisClient.getItemById(id);
    }
>>>>>>> demo
    addGroup = async (data) => {
        await this.ApisClient.postItem(data);
        this.groupList.push(data);
    };
    renameGroup = async (id, data) => {
        await this.ApisClient.patchItem(id, data);
<<<<<<< HEAD
        this.groupList[id].title = data;
    };
=======
        this.groupList[id-1].title = data;
    };
    deleteGroup = async (id) => {
        await this.ApisClient.deleteItems(id);
        this.groupList.removechild(id-1);
    }
>>>>>>> demo
}
