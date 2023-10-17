import GroupController from '../controllers/group';
<<<<<<< HEAD

=======
>>>>>>> demo
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
