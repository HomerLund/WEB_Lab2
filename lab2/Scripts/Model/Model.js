// model.js

export default class Model {
    constructor() {
        this.expression = '';
    }

    append(value) {
        this.expression += value;
    }

    clear() {
        this.expression = '';
    }

    calculate() {
        try {
            this.expression = eval(this.expression).toString();
        } catch (e) {
            this.expression = 'Error';
        }
    }

    getDisplay() {
        return this.expression;
    }
}