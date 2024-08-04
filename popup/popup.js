import RegistrationModel from '../models/RegistrationModel';
import RegistrationView from '../views/RegistrationView';
import RegistrationController from '../controllers/RegistrationController';

document.addEventListener("DOMContentLoaded", function () {
  const model = new RegistrationModel();
  const view = new RegistrationView();
  const controller = new RegistrationController(model, view);
  controller.init();
});
