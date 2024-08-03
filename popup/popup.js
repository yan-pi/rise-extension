document.addEventListener("DOMContentLoaded", function () {
  const model = new RegistrationModel();
  const view = new RegistrationView();
  const controller = new RegistrationController(model, view);
  controller.init();
});
