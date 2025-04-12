// model.js

export default class ModelCalculator {
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
            const expr_history = this.expression;
            this.expression = eval(this.expression).toString();
            
            this.addToHistory(expr_history, this.expression);
            
            console.log(JSON.parse(localStorage.getItem("calcHistory")));
            
        } catch (e) {
            this.expression = 'Error';
        }
    }

    getDisplay() {
        return this.expression;
    }

    addToHistory(expression, result) {
        const historyItem = { expression, result };
        const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
        history.push(historyItem);
        localStorage.setItem("calcHistory", JSON.stringify(history));
    }
}