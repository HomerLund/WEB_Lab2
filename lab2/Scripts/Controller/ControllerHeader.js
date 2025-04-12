export default class ControllerHeader {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    
    initialize() {
        const ProfileButton = document.getElementById("ProfileButton");
        const LoginButton = document.getElementById("LoginButton");
        const SignUpButton = document.getElementById("SignUpButton");
        
        ProfileButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.model.IsLoginIn()){
                window.location.href = "/WEB_Lab2/lab2/Pages/profile.html";
            }
            else{
                window.location.href = "/WEB_Lab2/lab2/Pages/signup.html";
                this.view.showMessage("Log in to your account or register!");
            }

        }); 

        LoginButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.model.IsLoginIn()){
                this.view.showMessage("You are already logged in to your account!");
            }
            else{
                window.location.href = "/WEB_Lab2/lab2/Pages/login.html";
            }

        });

        SignUpButton.addEventListener("click", (event) => {
            event.preventDefault();
            if (this.model.IsLoginIn()){
                this.view.showMessage("You are already registered!");
            }
            else{
                window.location.href = "/WEB_Lab2/lab2/Pages/signup.html";
            }

        });
    }
}