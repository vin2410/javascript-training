import Model from './models/model';
import View from './views/view';
import Controller from './controllers/controller';

const model = new Model();
const view = new View();
const controller = new Controller(model, view);
controller.init();
