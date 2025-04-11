export default class RegistrationView {
    getUser() {
        return {
            name: document.getElementById("username").value,
            email: document.getElementById("useremail").value,
            password: document.getElementById("password").value,
            confirmpassword: document.getElementById("confirmpassword").value,      
            date: document.getElementById("date").value,
        };
    }
    
    showSuccessMessage() {
        alert("Data has been successfully saved!");
    }

    showMessage(message, isError = false) {
        const msgDiv = this.form.querySelector('.message');
        msgDiv.textContent = message;
        msgDiv.style.color = isError ? 'red' : 'green';
    }

    resetForm() {
        document.getElementById("RegForm").reset();
    }
  }