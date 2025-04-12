export default class ControllerProfile {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const quitButton = document.getElementById("LogOutButton");
        
        quitButton.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.removeItem("CurrentUser");
            window.location.href = "../../index.html";
        });    
    }
}