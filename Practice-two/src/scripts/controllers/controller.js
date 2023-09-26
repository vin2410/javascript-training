class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init = async () => {
        await this.getGroupList();
    };

    // handle get list of Groups
    getGroupList = async () => {
        try {
            const response = await this.model.getGroupModel();
            this.view.renderGroupList(response);
        } catch {
            alert("Couldn't get group list");
        }
    };
}
export default Controller;
