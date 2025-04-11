export default class ModelReg {
    constructor() {
        this.usersKey = 'user';
        //this.users = [];
    }
  
    loadUsers() {
        const usersJSON = localStorage.getItem(this.usersKey);
        return usersJSON ? JSON.parse(usersJSON) : [];
    }
  
    saveUsers(userData) {
        localStorage.setItem(this.usersKey, JSON.stringify(userData));
    }

    IsAccount(userData) {
        const { name, email } = userData;
        let accounts = JSON.parse(localStorage.getItem(this.usersKey));
    
        if (accounts.name == name || accounts.email == email){
            return false;
        }
 
        return true;
    }
  
    registerUser(userData) {
        const { name, email,  password, confirmpassword, date } = userData;
        if (name.length < 4) {
            alert("Login must contain at least 4 characters!");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!emailPattern.test(email)) {
            alert("Not correct email!");
            return false;
        }

        if (password.length < 8) {
            alert("Password must contain at least 8 characters!");
            return false;
        }

        if (confirmpassword != password) {
            alert("The password does not match the previous one");
            return false;
        }

        
        if (!date) {
            alert("Input date of birthday");
            return false;
        }

        if (!this.IsAccount(userData)){
            alert(  "An account with this email address or username already exists!");
            return false;
        }

        //this.users.push(userData);
        this.saveUsers(userData);
        return true;
    }
  }

