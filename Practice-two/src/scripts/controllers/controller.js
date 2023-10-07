import GroupController from '../controllers/group';
export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.groupController = new GroupController(this.model, this.view);
    }
    init = () => {
        this.groupController.init();
    };
}
