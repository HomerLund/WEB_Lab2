import ModelCalculator from './Model/ModelCalculator.js';
import ViewCalculator from './View/ViewCalculator.js';
import ControllerCalculator from './Controller/ControllerCalculator.js';

const model = new ModelCalculator();
const view = new ViewCalculator();

const calculatorContainer = document.getElementById('calculator-container');

calculatorContainer.appendChild(view.toHtml());

new ControllerCalculator(model, view);