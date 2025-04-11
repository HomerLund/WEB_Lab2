import ModelSignIn from './Model/ModelSignIn.js';
import ViewSignIn from './View/ViewSignIn.js';
import ControllerSignIn from './Controller/ControllerSignIn.js';

document.addEventListener("DOMContentLoaded", function () {
    const model = new ModelSignIn();
    const view = new ViewSignIn();

    const contoller = new ControllerSignIn(model, view);
    contoller.initialize();

});