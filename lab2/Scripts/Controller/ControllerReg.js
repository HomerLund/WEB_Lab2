export default class ControllerReg {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const confirmButton = document.getElementById("RegButton");
        const form = document.getElementById("RegForm");
        

        confirmButton.addEventListener("click", (event) => {
            event.preventDefault();
            const userData = this.view.getUser();
            if (this.model.registerUser(userData)){
                this.view.showSuccessMessage();
                this.view.resetForm();
                
                window.location.href = "../Pages/profile.html";
            }
            
            //this.saveDataToLocalStorage();
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
    
    saveDataToLocalStorage() {
        

        if (!this.model.validateUserData(userData)) {
            return;
        }

        if (!this.model.checkExistingAccount(userData)) {
            return;
        }

        this.model.saveUserData(userData);
        this.view.showSuccessMessage();
        this.view.resetForm();
        this.model.setCurrentAccount(userData);
        
    }
}