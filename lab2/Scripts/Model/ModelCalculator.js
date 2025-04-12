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
            
        } catch (e) {
            this.expression = 'Error';
        }
    }

    getDisplay() {
        return this.expression;
    }

    addToHistory(expression, result) {
        const historyItem = { expression, result };
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        
        if (user){
            const key = user.name + "calcHistory";
            const history = JSON.parse(localStorage.getItem(key)) || [];  
            history.push(historyItem);
            localStorage.setItem(key, JSON.stringify(history));
        }
    }
}