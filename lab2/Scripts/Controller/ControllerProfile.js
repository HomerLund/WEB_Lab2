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
            console.log(JSON.parse(localStorage.getItem("calcHistory")));
            event.preventDefault();
            localStorage.removeItem("calcHistory");
            window.location.href = "profile.html";
        });  

        this.renderHistory();
    }

    renderHistory(){
        const history = this.model.GetHistory();
        this.view.ShowHistory(history);
    }
}