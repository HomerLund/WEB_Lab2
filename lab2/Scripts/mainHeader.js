import ModelHeader from './Model/ModelHeader.js';
import ViewHeader from './View/ViewHeader.js';
import ControllerHeader from './Controller/ControllerHeader.js';

document.addEventListener("DOMContentLoaded", function () {
    const model = new ModelHeader();
    const view = new ViewHeader();

    const contoller = new ControllerHeader(model, view);
    contoller.initialize();

});