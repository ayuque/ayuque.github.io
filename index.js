document.addEventListener("DOMContentLoaded", function() {
    // Example function to toggle the visibility of experience section
    const toggleExperience = () => {
        const expSection = document.querySelector('.experience');
        if (expSection.style.display === 'none') {
            expSection.style.display = 'block';
        } else {
            expSection.style.display = 'none';
        }
    };

    // Adding event listener to toggle button
    const toggleButton = document.getElementById('toggleExperienceButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleExperience);
    }
});

// Simple function to show an alert when the page loads
window.onload = function() {
    alert('Welcome to my professional resume page!');
};
