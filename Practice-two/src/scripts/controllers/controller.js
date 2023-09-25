class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init = async () => {
        await this.initGroups();
    };

    // Group controller //
    initGroups = async () => {
        try {
            await this.model.group.init();
        } catch {
            alert('Could not init');
        }
    };

    getGroupList = async () => {
        try {
            await this.model.group.getGroupList();
        } catch {
            alert('failed to get group list');
        }
    };
}
export default Controller;
