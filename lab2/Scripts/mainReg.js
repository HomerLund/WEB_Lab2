import ModelReg from './Model/ModelReg.js';
import ViewReg from './View/ViewReg.js';
import ControllerReg from './Controller/ControllerReg.js';

document.addEventListener("DOMContentLoaded", function () {
    const model = new ModelReg();
    const view = new ViewReg();

    const contoller = new ControllerReg(model, view);
    contoller.initialize();

});