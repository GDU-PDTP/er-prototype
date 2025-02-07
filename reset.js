function togglePassword(id, button) {
    const input = document.getElementById(id);
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";

    const eyeIcon = button.querySelector("svg");
    const strokeLine = eyeIcon.querySelector(".eye-stroke");

    if (isPassword) {
        strokeLine.style.display = "none"; // Remove line when password is visible
    } else {
        strokeLine.style.display = "block"; // Add line when password is hidden
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const newPassword = document.getElementById("new-password");
    const confirmPassword = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        if (newPassword.value !== confirmPassword.value) {
            e.preventDefault(); // Stop form submission
            errorMessage.textContent = "Passwords do not match!";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }
    });
});