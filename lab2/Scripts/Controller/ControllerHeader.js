export default class ControllerHeader {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const ProfileButton = document.getElementById("ProfileButton");

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
}