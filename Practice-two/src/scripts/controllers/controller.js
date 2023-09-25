class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    init = async () => {
        await this.initGroups();
        this.initModal();
    };

    // Group controller //
    initGroups = async () => {
        try {
            await this.model.group.init();
        } catch {
            alert('Failed to initialize');
        }
    };
}
export default Controller;
