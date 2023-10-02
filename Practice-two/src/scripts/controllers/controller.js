class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init = async () => {
        await this.getGroupList();
        this.view.addGroupView(this.addGroup.bind(this));
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
    addGroup = async (data) => {
        try {
            const response = await this.model.addGroupModel(data);
            console.log(response);
            this.view.displayGroupList(response);
            return response;
        } catch {
            alert("Couldn't add group");
        }
    };
}
export default Controller;
