import RegistrationModel from '../models/RegistrationModels';
import RegistrationView from '../views/RegistrationViews';
import RegistrationController from '../controllers/RegistrationController';

document.addEventListener("DOMContentLoaded", function () {
  const model = new RegistrationModel();
  const view = new RegistrationView();
  const controller = new RegistrationController(model, view);
  controller.init();
});
