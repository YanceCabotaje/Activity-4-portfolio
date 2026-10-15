// Wait for the DOM content to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // Feature 1: Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class to display/hide navigation list on mobile screens
            navLinks.classList.toggle('active');
        });

        // Automatically hide the mobile navigation drawer when any link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Feature 2: Light Mode / Dark Mode Toggle with Icon Switch
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Switch between light and dark mode states on the body element
            body.classList.toggle('light-mode');

            // Update button icon dynamically based on the current mode
            if (body.classList.contains('light-mode')) {
                themeToggle.textContent = '🌙'; 
            } else {
                themeToggle.textContent = '☀️';
            }
        });
    }

});