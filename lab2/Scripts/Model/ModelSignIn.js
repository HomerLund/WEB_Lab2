export default class ModelSignIn{
    constructor() {
        this.usersKey = 'user';
    }

    CurrentUser(UserDate){
        localStorage.setItem("CurrentUser", JSON.stringify(UserDate));
    }

    IsAccount(userData) {
        const {email, password} = userData;
        const accounts = JSON.parse(localStorage.getItem(this.usersKey)) || [];
        
        const existingAccount = accounts.find(
            (account) => account.email === email && account.password === password
        );
          
        if (existingAccount) {
            return existingAccount;
        } else {
            return false;
        }
    }
  
    loginUser(userData) {
        const user = this.IsAccount(userData);
        if (!user){
            alert("Not correct email or password!");
            return false;
        }

        this.CurrentUser(user);
        return true;
    }
  }

