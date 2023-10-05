import { errorMessage } from '../constants/constant';

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
    };

    loadGroupList = () => {
        try {
            const data = this.model.group.getGroupList();
            this.view.renderGroupList(data);
        } catch {
            alert(errorMessage.RENDER_GROUP_LIST);
        }
    };
}
export default Controller;
