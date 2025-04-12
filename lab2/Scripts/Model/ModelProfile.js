export default class ModelProfile {
    GetHistory() {
        return JSON.parse(localStorage.getItem("calcHistory")) || [];
    }
}