// Select all text boxes
const textBoxes = document.querySelectorAll('.text-box');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Check if the text box is in the viewport
        if (entry.isIntersecting) {
            // Get the background image from the data attribute
            const bgImage = entry.target.getAttribute('data-bg');
            // Change the body's background image
            document.body.style.backgroundImage = `url(${bgImage})`;
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the text box is in view
});

// Observe each text box
textBoxes.forEach(box => {
    observer.observe(box);
});
// JavaScript Document