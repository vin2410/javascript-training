import { errorMessage } from '../constants/errorMessage';

export default class GroupController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init = async () => {
        await this.initGroup();
    };

    initGroup = async () => {
        try {
            await this.model.group.init();
        } catch {
            alert(errorMessage.INIT_GROUP_LIST);
        }
        this.loadGroupList();
        this.view.group.addGroupView(this.addGroupList);
        this.view.group.handleRightClick();
        this.view.group.deleteGroupView(this.deleteGroup);
        // this.view.group.renameGroup(this.editGroup());
        // this.view.group.deleteGroupView(this.deleteGroup);
    };

    loadGroupList = () => {
        try {
            const data = this.model.group.getGroupList();
            this.view.group.renderGroupList(data);
        } catch {
            alert(errorMessage.RENDER_GROUP_LIST);
        }
    };
    addGroupList = async (data) => {
        try {
            await this.model.group.addGroup(data);
            this.view.group.displayGroupList(data);
        } catch {
            alert(errorMessage.ADD_GROUP);
        }
    };
    
    deleteGroup = async (id) => {
        try {
            await this.model.group.deleteGroup(id);
            console.log(this.view.group.deleteGroupView())
        }catch {
            alert(errorMessage.DELETE_GROUP);
        }
    }
}
