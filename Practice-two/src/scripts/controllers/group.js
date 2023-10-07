import { errorMessage } from '../constants/constants';

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
            this.view.group.displayGroupList(data);
        } catch {
            alert(errorMessage.ADD_GROUP);
        }
    };
}
