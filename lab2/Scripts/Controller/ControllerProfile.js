export default class ControllerProfile {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const quitButton = document.getElementById("LogOutButton");
        const ClearHistoryButton = document.getElementById("ClearHistoryButton");
        
        quitButton.addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.removeItem("CurrentUser");
            window.location.href = "../../index.html";
        });   
        
        ClearHistoryButton.addEventListener("click", (event) => {
            const user = JSON.parse(localStorage.getItem("CurrentUser"));
            const key = user.name + "calcHistory";
            console.log(key);
            event.preventDefault();
            localStorage.removeItem(key);
            window.location.href = "profile.html";
        });  

        this.renderHistory();
    }

    renderHistory(){
        const history = this.model.GetHistory();
        this.view.ShowHistory(history);
    }
}