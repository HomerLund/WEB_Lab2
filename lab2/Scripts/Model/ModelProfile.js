export default class ModelProfile {
    IsLoginIn() {
        
        const account = localStorage.getItem("CurrentUser");

        if (!account){
            return false;
        }

        return true;
    }
}