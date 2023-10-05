import { errorMessage } from '../constants/constants';

class Controller {
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
        this.view.addGroupView(this.addGroupList);
    };

    loadGroupList = () => {
        try {
            const data = this.model.group.getGroupList();
            this.view.renderGroupList(data);
        } catch {
            alert(errorMessage.RENDER_GROUP_LIST);
        }
    };
    addGroupList = async (data) => {
        try {
            this.view.displayGroupList(data);
        } catch {
            alert(errorMessage.ADD_GROUP);
        }
    };
}
export default Controller;
