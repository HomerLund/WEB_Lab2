import ModelProfile from './Model/ModelProfile.js';
import ViewProfile from './View/ViewProfile.js';
import ControllerProfile from './Controller/ControllerProfile.js';

document.addEventListener("DOMContentLoaded", function () {
    const model = new ModelProfile();
    const view = new ViewProfile();

    const contoller = new ControllerProfile(model, view);
    contoller.initialize();

});