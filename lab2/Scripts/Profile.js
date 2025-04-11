document.addEventListener('DOMContentLoaded', function() {
    const account = localStorage.getItem("user");

    if (account) {
        const currentaccount = JSON.parse(account);

        const nameElement = document.getElementById("name_profile");
        const emailElement = document.getElementById("email_profile");
        const dateElement = document.getElementById("date_profile");

        if (nameElement) {
            nameElement.textContent = currentaccount.name;
        }

        if (emailElement) {
            emailElement.textContent = currentaccount.email;
        }

        if (dateElement) {
            dateElement.textContent = currentaccount.date;
        } 
    }
});