export default class ViewProfile {
    ShowHistory(history) {
        const container = document.getElementById("history-container");
        container.innerHTML = "";
    
        history.forEach(({ expression, result }) => {
            const item = document.createElement("div");
            item.className = "history-item";
            item.innerHTML = `<strong>${expression}</strong> = ${result}`;
            container.appendChild(item);
        });
    }
}