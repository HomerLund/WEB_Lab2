export default class View {
    constructor() {
        this.display = null;
        this.clearButton = null;
        this.equalsButton = null;
        this.buttons = [];
    }
 
    toHtml() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            
        <div class="container3 d-flex justify-content-center align-items-center min-vh-100"">
            <div class="row">
                <div class="col-md-6 calculator mx-auto">
                    <div class="container3 d-flex align-items-center justify-content-center min-vh-100">
                        <div class="card-body">
                            <h4 class="card-title text-center mb-4">Developer Calculator</h4>


                            <div class="text-center">
                                <input type="text" id="calc-display" class="form-control mb-3" placeholder="0" disabled>
            
                                <div class="d-flex justify-content-center mb-2">
                                    <button class="btn btn-outline-primary m-1" data-value="1">1</button>
                                    <button class="btn btn-outline-primary m-1" data-value="2">2</button>
                                    <button class="btn btn-outline-primary m-1" data-value="3">3</button>
                                    <button class="btn btn-outline-primary m-1" data-value="+">+</button>
                                </div>

                                <div class="d-flex justify-content-center mb-2">
                                    <button class="btn btn-outline-primary m-1" data-value="4">4</button>
                                    <button class="btn btn-outline-primary m-1" data-value="5">5</button>
                                    <button class="btn btn-outline-primary m-1" data-value="6">6</button>
                                    <button class="btn btn-outline-primary m-1" data-value="-">-</button>
                                </div>
                                
                                <div class="d-flex justify-content-center mb-2">
                                    <button class="btn btn-outline-primary m-1" data-value="7">7</button>
                                    <button class="btn btn-outline-primary m-1" data-value="8">8</button>
                                    <button class="btn btn-outline-primary m-1" data-value="9">9</button>
                                    <button class="btn btn-outline-primary m-1" data-value="*">*</button>
                                </div>

                                <div class="d-flex justify-content-center mb-2">
                                    <button class="btn btn-outline-primary m-1" data-value="0">0</button>
                                    <button class="btn btn-outline-primary m-1" id="clear">C</button>
                                    <button class="btn btn-outline-primary m-1" data-value=".">.</button>
                                    <button class="btn btn-outline-primary m-1" data-value="/">/</button>
                                </div>

                                <div class="d-flex justify-content-center mb-2">
                                    <button class="btn btn-outline-success m-1" id="equals">=</button>
                                </div>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // Зберігаємо посилання на елементи
        const root = wrapper.firstElementChild;
        this.display = root.querySelector('#calc-display');
        this.clearButton = root.querySelector('#clear');
        this.equalsButton = root.querySelector('#equals');
        this.buttons = Array.from(root.querySelectorAll('button[data-value]'));

        return root;
    }

    bindOnClick(callback) {
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                callback(button.dataset.value);
            });
        });

        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => callback('C'));
        }

        if (this.equalsButton) {
            this.equalsButton.addEventListener('click', () => callback('='));
        }
    }

    updateDisplay(value) {
        if (this.display) {
            this.display.value = value;
        }
    }
}