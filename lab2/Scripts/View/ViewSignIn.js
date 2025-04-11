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

    showMessage(message, isError = false) {
        const msgDiv = this.form.querySelector('.message');
        msgDiv.textContent = message;
        msgDiv.style.color = isError ? 'red' : 'green';
    }

    resetForm() {
        document.getElementById("loginForm").reset();
    }
  }