export default class ControllerSignIn {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const confirmButton = document.getElementById("loginButton");
        const form = document.getElementById("loginForm");
        
        confirmButton.addEventListener("click", (event) => {
            event.preventDefault();
            const userData = this.view.getUser();
            if (this.model.loginUser(userData)){
                this.view.showSuccessMessage();
                this.view.resetForm();
                
                window.location.href = "../Pages/profile.html";
            }
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const userData = this.view.getUser();
            if (this.model.registerUser(userData)){
                this.view.showSuccessMessage();
                this.view.resetForm();
            }
        });
    }
}