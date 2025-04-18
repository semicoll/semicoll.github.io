// Select elements
const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const nameElement = document.querySelector('.name');
const navLinks = document.querySelectorAll('nav a');
const welcomeBox = document.querySelector('.welcome-box');
const footer = document.querySelector('footer');
const projectTiles = document.querySelectorAll('.project-tile');
const buttons = document.querySelectorAll('.button');
const contactButtons = document.querySelectorAll('.contact-button');
const contactForm = document.querySelector('.contact-form');
const contactInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

// Check localStorage for theme preference and apply on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    enableDarkMode();
    toggleCheckbox.checked = true; // Ensure checkbox matches the dark mode state
} else {
    disableDarkMode();
    toggleCheckbox.checked = false; // Ensure checkbox matches the light mode state
}

// Toggle theme on checkbox change
toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// Enable dark mode
function enableDarkMode() {
    console.log('Dark mode enabled');
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    nameElement.classList.add('dark-mode');
    navLinks.forEach(link => link.classList.add('dark-mode'));
    welcomeBox.classList.add('dark-mode');
    footer.classList.add('dark-mode');
    projectTiles.forEach(tile => tile.classList.add('dark-mode'));
    buttons.forEach(button => button.classList.add('dark-mode'));
    contactButtons.forEach(button => button.classList.add('dark-mode'));

    // Apply dark mode to all inputs and textareas in the contact form
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.classList.add('dark-mode');
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.add('dark-mode'));
    });

    // Save preference in localStorage
    localStorage.setItem('dark-mode', 'enabled');
}

// Disable dark mode
function disableDarkMode() {
    console.log('Dark mode disabled');
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    nameElement.classList.remove('dark-mode');
    navLinks.forEach(link => link.classList.remove('dark-mode'));
    welcomeBox.classList.remove('dark-mode');
    footer.classList.remove('dark-mode');
    projectTiles.forEach(tile => tile.classList.remove('dark-mode'));
    buttons.forEach(button => button.classList.remove('dark-mode'));
    contactButtons.forEach(button => button.classList.remove('dark-mode'));

    // Remove dark mode from all inputs and textareas in the contact form
    const contactForms = document.querySelectorAll('.contact-form');
    contactForms.forEach(form => {
        form.classList.remove('dark-mode');
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.classList.remove('dark-mode'));
    });

    // Remove preference from localStorage
    localStorage.removeItem('dark-mode');
}