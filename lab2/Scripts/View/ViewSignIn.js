export default class ViewSignIn {
    getUser() {
        return {
            email: document.getElementById("useremail").value,
            password: document.getElementById("password").value,
        };
    }
    
    showSuccessMessage() {
        alert("Login successfully!");
    }

    resetForm() {
        document.getElementById("loginForm").reset();
    }
  }