export default class ModelReg {
    constructor() {
        this.usersKey = 'user';
    }
  
    loadUsers() {
        const usersJSON = localStorage.getItem(this.usersKey);
        return usersJSON ? JSON.parse(usersJSON) : [];
    }
  
    saveUsers(userData) {
        const accounts = JSON.parse(localStorage.getItem(this.usersKey)) || [];
        accounts.push(userData);
        localStorage.setItem(this.usersKey, JSON.stringify(accounts));
    }

    CurrenUser(UserDate){
        localStorage.setItem("CurrentUser", JSON.stringify(UserDate));
    }

    IsAccount(userData) {
        const { name, email } = userData;
        const accounts = JSON.parse(localStorage.getItem(this.usersKey)) || [];
        
        return accounts.some(
            (account) => account.email === email || account.name === name
        );
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

        if (this.IsAccount(userData)){
            alert(  "An account with this email address or username already exists!");
            return false;
        }

        this.saveUsers(userData);
        this.CurrenUser(userData);
        return true;
    }
  }

