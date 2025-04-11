export default class ControllerProfile {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const quitButton = document.getElementById("LogOutButton");
        const ProfileButton = document.getElementById("ProfileButton");

        if (ProfileButton){
            ProfileButton.addEventListener("click", (event) => {
                event.preventDefault();
                if (this.model.IsLoginIn()){
                    window.location.href = "/WEB_Lab2/lab2/Pages/profile.html";
                }
                else{
                    window.location.href = "/WEB_Lab2/lab2/Pages/signup.html";
                    this.view.showMessageError();
                }

            });
        }

        if (quitButton){
            quitButton.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.removeItem("CurrentUser");
                window.location.href = "../../index.html";
            });
        }
        
    }
}