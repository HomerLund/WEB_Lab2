export default class ModelHeader {
    IsLoginIn() {
        
        const account = localStorage.getItem("CurrentUser");

        if (!account){
            return false;
        }

        return true;
    }
}