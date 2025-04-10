// controller.js

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindOnClick(this.handleInput.bind(this));
        this.view.updateDisplay(this.model.getDisplay());
    }

    handleInput(value) {
        if (value === 'C') {
            this.model.clear();
        } else if (value === '=') {
            this.model.calculate();
        } else {
            this.model.append(value);
        }

        this.view.updateDisplay(this.model.getDisplay());
        this.view.render();
    }
}