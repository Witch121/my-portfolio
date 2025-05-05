// This file contains the JavaScript code for the portfolio.
// It may include functionality such as event listeners, dynamic content loading, and other interactive features.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click event listener to a button
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }

    // Example: Load dynamic content
    const contentArea = document.getElementById('content');
    if (contentArea) {
        contentArea.innerHTML = '<p>Welcome to my portfolio!</p>';
    }
});