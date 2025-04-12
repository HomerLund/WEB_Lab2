export default class ViewReg {
    getUser() {
        return {
            name: document.getElementById("username").value,
            email: document.getElementById("useremail").value,
            password: document.getElementById("password").value,
            confirmpassword: document.getElementById("confirmpassword").value,      
            date: document.getElementById("date").value
        };
    }
    
    showSuccessMessage() {
        alert("Data has been successfully saved!");
    }

    resetForm() {
        document.getElementById("RegForm").reset();
    }
  }