function showMessage() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageText = document.getElementById("messageText").value.trim();
    const message = document.getElementById("message");

    if (!name || !email || !messageText) {
        message.textContent = "Please fill in all fields before sending.";
        return;
    }

    message.textContent = "Thank you. Your message has been received.";
}
