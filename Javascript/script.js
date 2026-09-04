// DroneTV Interactive Script
document.addEventListener('DOMContentLoaded', () => {
    console.log("DroneTV Frontend Loaded Successfully!");

    // Login Form Interaction Handler
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const email = document.getElementById('emailInput').value;
            console.log(`User attempting login with email: ${email}`);
            // You can add custom validation logic here if required
        });
    }

    // Add interactive click feedback to all green action buttons/links
    const actionButtons = document.querySelectorAll('.card-link, .btn-green, .btn-green-block, .btn-green-dark');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Optional smooth ripple effect or console track
            console.log(`Action triggered on: ${this.textContent.trim()}`);
        });
    });
});
