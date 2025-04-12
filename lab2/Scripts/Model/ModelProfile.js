export default class ModelProfile {
    GetHistory() {
        const user = JSON.parse(localStorage.getItem("CurrentUser"));
        const key = user.name + "calcHistory";
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}